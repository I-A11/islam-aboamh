const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "WordPress / WooCommerce",
  "HTML",
  "CSS",
  "JavaScript",
  "Git / GitHub",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24">
      <SectionHeading index="01" title="About" />
      <div className="max-w-xl space-y-4 text-paper">
        <p>
          I&apos;m a frontend developer with around four years of production
          experience, currently splitting my time between contract client work
          and actively interviewing for mid-level frontend roles in the
          Australian market.
        </p>
        <p>
          My focus is building interfaces that hold up under real constraints —
          client deadlines, content that changes hands to non-technical owners,
          and the small edge cases that only show up once something is live. I
          care as much about how a project is delivered as how it looks.
        </p>
        <p>
          Outside client work, I keep sharpening fundamentals through
          self-directed projects and algorithm practice — the kind of work that
          doesn&apos;t have a deadline, only a next problem.
        </p>
      </div>

      <ul className="mt-8 grid max-w-md grid-cols-2 gap-x-4 gap-y-2">
        {stack.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 font-mono text-xs text-mist"
          >
            <span className="text-signal">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-8 flex items-baseline gap-3 lg:sticky lg:top-0 lg:z-10 lg:-mx-2 lg:bg-ink/85 lg:px-2 lg:py-4 lg:backdrop-blur">
      <span className="font-mono text-sm text-signal">{index}</span>
      <h2 className="font-display text-xl font-semibold text-bright">
        {title}
      </h2>
      <span className="h-px flex-1 bg-ink-line" aria-hidden="true" />
    </div>
  );
}
