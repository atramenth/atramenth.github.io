import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { useT } from "../hooks/useT.tsx";
import { IconClose } from "./Icons.tsx";

interface Props {
  label: string;
  onClose: () => void;
  header?: ReactNode;
  children: ReactNode;
  /** Taller sheet for content that needs room (jump, settings). */
  tall?: boolean;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Bottom sheet: backdrop, Esc, drag down from the grabber or title to dismiss, focus kept inside while open,
 * the page behind frozen, and a short exit animation so it never just vanishes.
 */
export function Sheet({ label, onClose, header, children, tall = false }: Props) {
  const { t } = useT();
  const ref = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ y: number; t: number } | null>(null);
  const [dy, setDy] = useState(0);
  const [closing, setClosing] = useState(false);

  // `onClose` is usually an inline function; keep the latest in a ref so the effects below run once.
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const closingRef = useRef(false);
  const close = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    window.setTimeout(() => closeRef.current(), matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 220);
  }, []);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.focus({ preventScroll: true });
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    if (scrollbar > 0) html.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
        return;
      }
      if (e.key !== "Tab" || !ref.current) return;
      const items = [...ref.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === ref.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => {
      window.removeEventListener("keydown", onKey, true);
      html.style.overflow = prevOverflow;
      html.style.paddingRight = "";
      previous?.focus?.({ preventScroll: true });
    };
  }, [close]);

  const startDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button")) return;
    drag.current = { y: e.clientY, t: performance.now() };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const moveDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current) setDy(Math.max(0, e.clientY - drag.current.y));
  };
  const endDrag = () => {
    if (!drag.current) return;
    const elapsed = Math.max(1, performance.now() - drag.current.t);
    const fast = dy / elapsed > 0.6 && dy > 24;
    drag.current = null;
    if (dy > 110 || fast) {
      setDy(0);
      close();
    } else setDy(0);
  };

  return (
    <div className={`sheet-root${closing ? " is-closing" : ""}`}>
      <div className="sheet-backdrop" onClick={close} />
      <div
        ref={ref}
        className={`sheet${tall ? " sheet--tall" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        style={{ transform: dy ? `translateY(${dy}px)` : undefined, transition: drag.current ? "none" : undefined }}
      >
        <div className="sheet__drag" onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag}>
          <div className="sheet__grab" aria-hidden="true">
            <span />
          </div>
          <div className="sheet__head">
            <div className="sheet__title">{header}</div>
            <button type="button" className="icon-btn" onClick={close} aria-label={t("sheet.close")}>
              <IconClose />
            </button>
          </div>
        </div>
        <div className="sheet__body" ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
