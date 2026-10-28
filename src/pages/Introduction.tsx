import { InlineText } from "../components/InlineText.tsx";
import { INTRODUCTION } from "../data/introduction.ts";

export default function Introduction() {
  const empty = INTRODUCTION.sections.length === 0;
  return (
    <main className="screen screen--read">
      <header className="screen__head">
        <h1>{INTRODUCTION.title}</h1>
        <p>From the end of the book</p>
      </header>

      {empty ? (
        <div className="soon soon--intro">
          <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
            <circle cx="60" cy="60" r="52" className="ink-ring" />
            <circle cx="60" cy="60" r="36" className="ink-ring ink-ring--dash" />
            <path d="M60 24c13 14 20 24 20 35a20 20 0 0 1-40 0c0-11 7-21 20-35z" className="ink-drop" />
          </svg>
          <h2>Waiting for the text</h2>
          <p>
            Add the translator’s introduction to <code>src/data/introduction.ts</code>. Each section takes a heading and paragraphs.
          </p>
        </div>
      ) : (
        <article className="prose">
          {INTRODUCTION.sections.map((s, i) => (
            <section key={i}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j}>
                  <InlineText text={p} />
                </p>
              ))}
            </section>
          ))}
        </article>
      )}
    </main>
  );
}
