import type { ReactNode } from "react";

function Svg({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export const IconHome = () => (
  <Svg>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" strokeDasharray="1 2.4" />
    <path d="M12 3.5V8" />
  </Svg>
);
export const IconSurahs = () => (
  <Svg>
    <path d="M5 4.5h11a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z" />
    <path d="M8.5 9h7M8.5 12.5h5" />
  </Svg>
);
export const IconIndex = () => (
  <Svg>
    <path d="M4.5 6h15M4.5 12h15M4.5 18h15" />
    <path d="M8.5 4v4M8.5 10v4M8.5 16v4" strokeOpacity="0.55" />
  </Svg>
);
export const IconIntro = () => (
  <Svg>
    <path d="M12 3.5c3.4 3.6 5.5 6.3 5.5 9.2a5.5 5.5 0 0 1-11 0c0-2.9 2.1-5.6 5.5-9.2z" />
    <path d="M12 12v6" strokeOpacity="0.55" />
  </Svg>
);
export const IconTranslator = () => (
  <Svg>
    <path d="M12 20.5 7 12.2 9.2 4h5.6L17 12.2z" />
    <path d="M12 20.5V13.2" strokeOpacity="0.55" />
    <circle cx="12" cy="11.6" r="1.1" />
  </Svg>
);
export const IconBack = () => (
  <Svg>
    <path d="M14.5 5.5 8 12l6.5 6.5" />
  </Svg>
);
export const IconNext = () => (
  <Svg>
    <path d="M9.5 5.5 16 12l-6.5 6.5" />
  </Svg>
);
export const IconClose = () => (
  <Svg>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </Svg>
);
export const IconSearch = () => (
  <Svg>
    <circle cx="11" cy="11" r="6" />
    <path d="m15.5 15.5 4 4" />
  </Svg>
);
export const IconType = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    <text x="2" y="18" fontFamily="Cormorant Garamond, serif" fontSize="17" fontWeight="500" fill="currentColor">A</text>
    <text x="13.5" y="18" fontFamily="Cormorant Garamond, serif" fontSize="11" fontWeight="500" fill="currentColor">A</text>
  </svg>
);


export const IconBookmark = ({ filled = false }: { filled?: boolean }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 4.5h10a1 1 0 0 1 1 1V20l-6-4.2L6 20V5.5a1 1 0 0 1 1-1z" />
  </svg>
);
export const IconJump = () => (
  <Svg>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5v9M7.5 12h9" strokeOpacity="0.55" />
    <circle cx="12" cy="12" r="1.2" />
  </Svg>
);
export const IconCheck = () => (
  <Svg>
    <path d="m5.5 12.5 4.2 4.2 8.8-9.4" />
  </Svg>
);
export const IconUp = () => (
  <Svg>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Svg>
);

/** The hexagonal end-of-verse marker, echoing the book’s own. `progress` (0 to 1) inks the outline like a pen drawing it. */
export function Hexagon({ size = 28, children, filled = false, progress }: { size?: number; children?: ReactNode; filled?: boolean; progress?: number }) {
  const pts = "16,2.5 27.7,9.25 27.7,22.75 16,29.5 4.3,22.75 4.3,9.25";
  const drawn = progress !== undefined && progress > 0;
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" className="hex">
      <polygon points={pts} fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" opacity={drawn ? 0.35 : 1} />
      {drawn && (
        <polygon className="hex__ink" points={pts} pathLength={1} fill="none" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" strokeDasharray={`${Math.min(1, progress)} 1`} />
      )}
      {children}
    </svg>
  );
}

/** The diamond rule used under titles. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg className={`ornament ${className}`} viewBox="0 0 240 14" aria-hidden="true">
      <path d="M0 7h98M142 7h98" />
      <polygon points="120,1.5 127,7 120,12.5 113,7" />
    </svg>
  );
}

/**
 * A number set inside the hexagon. The type size follows the digit count and the text is centred on the
 * hexagon's own centre, so 1, 36 and 286 all sit inside it with the same breathing room.
 */
export function HexNumber({ n, size = 36, progress, filled = false }: { n: number; size?: number; progress?: number; filled?: boolean }) {
  const digits = String(n).length;
  const fontSize = digits >= 3 ? 9.6 : digits === 2 ? 11.4 : 13;
  return (
    <Hexagon size={size} progress={progress} filled={filled}>
      <text x="16" y="16.4" textAnchor="middle" dominantBaseline="central" fill={filled ? "var(--paper)" : "currentColor"} stroke="none" fontSize={fontSize} className="hex__num">
        {n}
      </text>
    </Hexagon>
  );
}
