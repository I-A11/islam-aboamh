import { projects } from "@/data/projects";
import { SectionHeading } from "./About";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading index="03" title="Projects" />
      <p className="mb-8 max-w-xl text-sm text-mist">
        Self-directed builds — where I test ideas, practice patterns, and
        learn things client work doesn&apos;t always call for.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col rounded-sm border border-ink-line bg-ink-raised/40 p-5 transition-colors hover:border-signal/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-bright group-hover:text-signal">
                {project.title}
              </h3>
              <div className="flex shrink-0 gap-3">
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View source code for ${project.title}`}
                    className="text-mist hover:text-signal"
                  >
                    <CodeIcon />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View live project: ${project.title}`}
                    className="text-mist hover:text-signal"
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            <p className="mt-3 flex-1 text-sm text-paper">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
              {project.tech.map((tech) => (
                <li key={tech} className="font-mono text-xs text-mist">
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 6L2 12L8 18M16 6L22 12L16 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
