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
          and actively interviewing for frontend roles in the Australian market.
        </p>
        <p>
          I enjoy building interfaces that work well in the real world, not just
          in a design file. That means dealing with tight deadlines, changing
          content, handing projects over to non-technical clients, and fixing
          the little edge cases that tend to appear once a site is live. For me,
          the way a project is built and handed over is just as important as how
          it looks.
        </p>
        <p>
          Outside of client work, I spend time on personal projects and
          algorithm practice. There’s no deadline with those projects. I usually
          just pick something I want to improve or a problem I want to figure
          out.
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
