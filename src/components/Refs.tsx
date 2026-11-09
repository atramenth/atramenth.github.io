import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { InlineParser } from "../domain/InlineParser.ts";
import { useT } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";
import { toast } from "../services/ToastStore.ts";

interface LinkProps {
  text: string;
  surah: number;
  ayah: number;
  /** Where the reader is coming from; shown on the "Back to ..." pill after the jump. */
  from: string;
  /** Called just before navigating (a sheet closes itself here). */
  onGo?: () => void;
}

/** A Qur'ān reference (10:92) that opens that verse in the reader. Back and forward work like any link. */
export function RefLink({ text, surah, ayah, from, onGo }: LinkProps) {
  const { t } = useT();
  const navigate = useNavigate();
  const name = library.get(surah)?.name ?? "";
  const ready = library.isAvailable(surah);

  if (!ready) {
    return (
      <button type="button" className="ref is-soon" onClick={() => toast.show(t("note.refSoon", { n: surah, name }))}>
        {text}
      </button>
    );
  }
  return (
    <button
      type="button"
      className="ref is-link"
      aria-label={t("note.refGo", { ref: text, name })}
      onClick={() => {
        onGo?.();
        navigate(`/surah/${surah}/v${ayah}`, { state: { from } });
      }}
    >
      {text}
    </button>
  );
}

interface TextProps {
  text: string;
  from: string;
  onGo?: () => void;
}

/**
 * The one rule for references: anywhere a note, an introduction passage or a bracketed insertion writes
 * "chapter:verse" (also "4: 149" and "36:69-70"), it becomes a link. A pattern that is not a real verse
 * of the book (surah above 114, verse beyond the sūrah's count) stays plain text.
 */
export function RefText({ text, from, onGo }: TextProps) {
  return (
    <>
      {InlineParser.splitReferences(text).map((part, i) => {
        if (!("ref" in part)) return <Fragment key={i}>{part.text}</Fragment>;
        const item = library.get(part.surah);
        if (!item || part.ayah < 1 || part.ayah > item.ayahCount) return <Fragment key={i}>{part.ref}</Fragment>;
        return <RefLink key={i} text={part.ref} surah={part.surah} ayah={part.ayah} from={from} onGo={onGo} />;
      })}
    </>
  );
}
