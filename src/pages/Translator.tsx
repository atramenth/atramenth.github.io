import { Fragment } from "react";
import { TRANSLATOR } from "../data/translator.ts";
import letter from "../assets/translator/afro-asian-writers-letter.webp";
import letterEn from "../assets/translator/afro-asian-writers-letter-translation.webp";

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
        <div className="letter__pair">
          {[
            { src: letter, ...t.letter.original, w: 1910, h: 2754 },
            { src: letterEn, ...t.letter.translation, w: 1951, h: 2747 },
          ].map((l) => (
            <div className="letter__item" key={l.src}>
              <span className="letter__label">{l.label}</span>
              <a className="letter__frame" href={l.src} target="_blank" rel="noopener" aria-label={`Open ${l.label} full size in a new tab`}>
                <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" />
              </a>
            </div>
          ))}
        </div>
        <figcaption>{t.letter.caption} Tap an image to open it full size.</figcaption>
      </figure>
    </main>
  );
}
