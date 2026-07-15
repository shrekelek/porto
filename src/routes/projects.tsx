import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Your Name" },
      { name: "description", content: "A collection of data science and machine learning projects." },
      { property: "og:title", content: "Projects — Your Name" },
      { property: "og:description", content: "A collection of data science and machine learning projects." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-gold">
          Portfolio
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of data science, machine learning, and analytics projects.
          Each project includes a summary of the problem, approach, and impact.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
