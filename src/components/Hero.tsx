export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-8 px-6 pb-20 pt-10 sm:pt-16 md:flex-row md:justify-between md:text-left"
    >
      <div className="max-w-[480px] text-center md:text-left">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-yellow-dark">
          Full Stack Web Developer
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Hello, my name is <span className="text-yellow-dark">Edu Ismail</span>
        </h1>
        <p className="mb-7 leading-relaxed text-muted">
          Driven by continuous learning, I stay at the forefront of evolving
          frameworks and deployment strategies to ensure every project I
          touch is modern and secure. Whether I'm optimizing database
          queries or refining a responsive UI, my goal is always to build
          scalable, production-ready software that meets the rigorous
          demands of today's digital landscape.
        </p>
        <div className="flex items-center justify-center gap-2 md:justify-start">
          <a
            href="#projects"
            className="rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:bg-yellow-dark"
          >
            Projects
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-2 text-sm font-semibold text-ink underline transition-transform hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="relative h-52 w-52 flex-shrink-0 sm:h-64 sm:w-64 md:h-72 md:w-72">
        <div className="absolute inset-0 rounded-blob bg-yellow" />
        <img
          src="/images/portrait.jpg"
          alt="Portrait"
          className="relative h-full w-full rounded-blob object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </section>
  );
}
