import { Project } from "../api/client";

interface Props {
  project: Project;
  reverse: boolean;
}

export default function ProjectCard({ project, reverse }: Props) {
  return (
    <article
      className={`flex flex-col items-center gap-8 md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 text-center md:text-left">
        <h3 className="mb-3 text-xl font-semibold text-ink">{project.title}</h3>
        <p className="mb-5 leading-relaxed text-muted">{project.description}</p>
        <a
          href={project.link}
          className="inline-block rounded-full bg-ink px-5 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          View Project
        </a>
      </div>
      <div className="flex-1">
        <img
          src={project.image}
          alt={project.title}
          className="block w-full rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%25' height='100%25' fill='%23f3d9dc'/></svg>";
          }}
        />
      </div>
    </article>
  );
}
