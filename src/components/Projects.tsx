import { useEffect, useState } from "react";
import { fetchProjects, Project } from "../api/client";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    let isMounted = true;

    fetchProjects()
      .then((data) => {
        if (!isMounted) return;
        setProjects(data);
        setStatus("success");
      })
      .catch(() => {
        if (!isMounted) return;
        setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 pb-20 pt-8">
      <h2 className="mb-12 text-center text-3xl font-bold text-ink">
        Projects
      </h2>

      {status === "loading" && (
        <p className="text-center text-muted">Loading projects…</p>
      )}

      {status === "error" && (
        <p className="text-center text-red-600">
          Couldn't reach the API at http://localhost:3000. Make sure the
          backend is running (npm run dev inside /backend).
        </p>
      )}

      {status === "success" && (
        <div className="flex flex-col gap-14">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}
