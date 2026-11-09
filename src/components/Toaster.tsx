import { useEffect, useState } from "react";
import { useStore } from "../hooks/useStore.ts";
import { toast } from "../services/ToastStore.ts";

/** Quiet confirmation line above the controls. Announced to screen readers, gone after a moment. */
export function Toaster() {
  const { message, id } = useStore(toast);
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!message) return;
    setShown(message);
    const timer = window.setTimeout(() => setShown(""), 2600);
    return () => window.clearTimeout(timer);
  }, [message, id]);

  return (
    <div className="toaster" role="status" aria-live="polite">
      {shown && (
        <p key={id} className="toast">
          {shown}
        </p>
      )}
    </div>
  );
}
