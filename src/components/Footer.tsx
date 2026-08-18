export default function Footer() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 flex flex-col items-start py-16 lg:py-32"
    >
      <p className="font-mono text-sm text-signal">04 / What&apos;s next?</p>
      <h2 className="mt-4 font-display text-3xl font-semibold text-bright sm:text-4xl">
        Get in touch
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
        I&apos;m currently open to mid-level frontend roles and new freelance
        projects. If you have an opportunity, a question, or just want to
        say hi, my inbox is open.
      </p>
      <a
        href="mailto:d.islam1983@gmail.com"
        className="mt-8 rounded-sm border border-signal px-6 py-3 font-mono text-sm text-signal transition-colors hover:bg-signal-dim"
      >
        Say hello
      </a>

      <footer className="mt-24 font-mono text-xs text-mist">
        Built with Next.js, TypeScript &amp; Tailwind CSS.
      </footer>
    </section>
  );
}
