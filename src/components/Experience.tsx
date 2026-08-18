"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./About";

export default function Experience() {
  const [activeId, setActiveId] = useState(experience[0]?.id);
  const active = experience.find((entry) => entry.id === activeId) ?? experience[0];

  if (!active) return null;

  return (
    <section id="work" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading index="02" title="Work" />
      <p className="mb-8 max-w-xl text-sm text-mist">
        Professional and client engagements — real briefs, real
        stakeholders, real deadlines.
      </p>

      <div className="flex flex-col gap-6 sm:flex-row">
        <div
          role="tablist"
          aria-label="Work history"
          className="flex shrink-0 gap-1 overflow-x-auto sm:flex-col sm:overflow-visible sm:border-l sm:border-ink-line"
        >
          {experience.map((entry) => {
            const isActive = entry.id === activeId;
            return (
              <button
                key={entry.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(entry.id)}
                className={[
                  "whitespace-nowrap px-4 py-3 text-left font-mono text-xs uppercase tracking-wide transition-colors sm:whitespace-normal sm:border-l-2 sm:-ml-px",
                  isActive
                    ? "bg-ink-raised text-signal sm:border-signal"
                    : "text-mist hover:bg-ink-raised/60 hover:text-paper sm:border-transparent",
                ].join(" ")}
              >
                {entry.organisation}
              </button>
            );
          })}
        </div>

        <div className="min-h-[280px] flex-1">
          <h3 className="font-display text-lg font-semibold text-bright">
            {active.role}{" "}
            <span className="text-signal">
              @{" "}
              {active.liveUrl ? (
                <a
                  href={active.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
                >
                  {active.organisation}
                </a>
              ) : (
                active.organisation
              )}
            </span>
          </h3>
          <p className="mt-1 font-mono text-xs text-mist">{active.period}</p>
          <p className="mt-4 max-w-lg text-sm text-paper">{active.summary}</p>

          <ul className="mt-4 space-y-2">
            {active.highlights.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm text-paper"
              >
                <span className="mt-1 text-signal">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
            {active.tech.map((tech) => (
              <li key={tech} className="font-mono text-xs text-mist">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
