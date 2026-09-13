import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-pink-light/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a className="font-bold tracking-wide text-ink" href="#top">
          Edu Ismail
        </a>

        <nav
          className={`
            font-medium
            max-sm:absolute max-sm:inset-x-0 max-sm:top-full max-sm:flex max-sm:flex-col
            max-sm:items-center max-sm:gap-5 max-sm:bg-pink-light max-sm:py-6
            max-sm:transition-all max-sm:duration-200
            ${open
              ? "max-sm:translate-y-0 max-sm:opacity-100"
              : "max-sm:pointer-events-none max-sm:-translate-y-2 max-sm:opacity-0"}
            flex gap-8
          `}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-ink hover:text-yellow-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 p-2 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-ink transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
