const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Archive", href: "#archive" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/I-A11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/islam-aboamh/" },
  { label: "Email", href: "mailto:d.islam1983@gmail.com" },
];

export default function Sidebar() {
  return (
    <header className="lg:fixed lg:flex lg:h-screen lg:w-[--sidebar-width] lg:flex-col lg:justify-between px-8 py-12 lg:py-16 [--sidebar-width:40%] xl:[--sidebar-width:34%]">
      <div>
        <a href="#" className="font-display text-3xl font-semibold text-bright">
          Islam Aboamh
        </a>
        <p className="mt-3 font-display text-lg text-paper">
          Frontend Developer
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
          I build responsive, production-ready interfaces with React, Next.js,
          and TypeScript. I work with clients and build things on the side to
          keep learning. Based in Sydney, Australia.
        </p>

        <nav className="mt-14 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-signal"
                >
                  <span className="h-px w-8 bg-ink-line transition-all group-hover:w-12 group-hover:bg-signal" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-12 flex gap-5 lg:mt-0">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="font-mono text-xs uppercase tracking-widest text-mist transition-colors hover:text-signal"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
