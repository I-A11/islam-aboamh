import { SectionHeading } from "./About";

const archives = [
  {
    id: "v1",
    title: "Portfolio v3",
    description: "Built with Next.js and Tailwind CSS",
    url: "https://islam-aboamh-ia-11.netlify.app/",
    year: "2024",
  },
  {
    id: "v2",
    title: "Portfolio v2",
    description: "Built with Next.js and Vercel deployment",
    url: "https://next-portfolio-i-a11.vercel.app/",
    year: "2023",
  },
  {
    id: "v3",
    title: "Portfolio v1",
    description: "Built with React and Netlify",
    url: "https://islam-aboamh.netlify.app/",
    year: "2022",
  },
];

export default function Archive() {
  return (
    <section id="archive" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading index="04" title="Archive" />
      <p className="mb-8 max-w-xl text-sm text-mist">
        A collection of previous portfolio versions showcasing my evolution as
        a developer over the years.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {archives.map((archive) => (
          <a
            key={archive.id}
            href={archive.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-sm border border-ink-line bg-ink-raised/40 p-5 transition-colors hover:border-signal/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-bright group-hover:text-signal">
                  {archive.title}
                </h3>
                <p className="mt-1 text-xs text-mist">{archive.year}</p>
              </div>
              <div className="shrink-0 text-mist group-hover:text-signal">
                <ExternalIcon />
              </div>
            </div>

            <p className="mt-3 flex-1 text-sm text-paper">
              {archive.description}
            </p>
          </a>
        ))}
      </div>
    </section>
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
