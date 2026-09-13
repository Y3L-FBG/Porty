export default function Footer() {
  const links = [
    { href: "https://instagram.com", label: "Instagram", short: "IG" },
    { href: "https://linkedin.com", label: "LinkedIn", short: "in" },
    { href: "mailto:hello@example.com", label: "Email", short: "@" },
  ];

  return (
    <footer className="px-6 pb-12 pt-10 text-center text-muted">
      <div className="mb-4 flex justify-center gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={link.label}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold shadow-[0_6px_16px_-8px_rgba(0,0,0,0.3)]"
          >
            {link.short}
          </a>
        ))}
      </div>
      <p>Made with ♥ — {new Date().getFullYear()}</p>
    </footer>
  );
}
