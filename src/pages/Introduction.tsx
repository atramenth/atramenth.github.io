import { Fragment } from "react";
import { InlineText } from "../components/InlineText.tsx";
import { INTRODUCTION } from "../data/introduction.ts";
import type { IntroBlock } from "../domain/types.ts";

function Block({ block }: { block: IntroBlock }) {
  switch (block.type) {
    case "basmala":
      return (
        <p className="intro__basmala">
          {block.lines.map((l, i) => (
            <span key={i}>
              <InlineText text={l} staticNotes />
            </span>
          ))}
        </p>
      );
    case "title":
      return (
        <h2 className="intro__title">
          <InlineText text={block.text} staticNotes />
        </h2>
      );
    case "heading":
      return (
        <h3 className={`intro__heading${block.italic ? " is-italic" : ""}`}>
          <InlineText text={block.text} staticNotes />
        </h3>
      );
    case "lines":
      return (
        <p className="intro__lines">
          {block.lines.map((l, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              <InlineText text={l} staticNotes />
            </Fragment>
          ))}
        </p>
      );
    case "ornament":
      return (
        <p className="intro__ornament" aria-hidden="true">
          {"❊".repeat(block.count)}
        </p>
      );
    default:
      return (
        <p className={`intro__p${block.continued ? " is-continued" : ""}${block.continues ? " is-continues" : ""}`}>
          <InlineText text={block.text} staticNotes />
        </p>
      );
  }
}

export default function Introduction() {
  const empty = INTRODUCTION.pages.length === 0;
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
            Add the translator’s introduction to <code>src/data/introduction.ts</code>. Each entry in <code>pages</code> is one printed book page.
          </p>
        </div>
      ) : (
        <article className="intro">
          {INTRODUCTION.pages.map((page) => (
            <section key={page.bookPage} className="intro__page" aria-label={`Book page ${page.bookPage}`}>
              {page.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
              {page.footnotes.length > 0 && (
                <ul className="intro__notes" aria-label="Footnotes">
                  {page.footnotes.map((f) => (
                    <li key={f.id}>
                      {f.id}. <InlineText text={f.text} />
                    </li>
                  ))}
                </ul>
              )}
              <p className="intro__no">{page.bookPage}</p>
            </section>
          ))}
        </article>
      )}
    </main>
  );
}
