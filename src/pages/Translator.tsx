import { Fragment } from "react";
import { TRANSLATOR } from "../data/translator.ts";
import letter from "../assets/translator/afro-asian-writers-letter.webp";

/** Renders plain text with **bold** runs. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}
    </>
  );
}

export default function Translator() {
  const t = TRANSLATOR;
  return (
    <main className="screen screen--read">
      <header className="screen__head">
        <h1>{t.title}</h1>
        <p>
          {t.name} · {t.subtitle}
        </p>
      </header>

      <article className="prose bio">
        {t.paragraphs.map((p, i) => (
          <p key={i}>
            <Rich text={p} />
          </p>
        ))}
        <p className="bio__sign">{t.signature}</p>
      </article>

      <figure className="letter">
        <h2>{t.letter.heading}</h2>
        <a className="letter__frame" href={letter} target="_blank" rel="noopener" aria-label="Open the letter full size in a new tab">
          <img src={letter} alt={t.letter.alt} width={1910} height={2754} loading="lazy" decoding="async" />
        </a>
        <figcaption>{t.letter.caption} Tap the image to open it full size.</figcaption>
      </figure>
    </main>
  );
}
