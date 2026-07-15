import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Brain, Database, Sparkles } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../lib/projects";
import heroImage from "../assets/hero-data-science.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Data Science Portfolio" },
      { name: "description", content: "Data Scientist and Machine Learning Engineer portfolio showcasing predictive models, dashboards, and AI solutions." },
      { property: "og:title", content: "Your Name — Data Science Portfolio" },
      { property: "og:description", content: "Data Scientist and Machine Learning Engineer portfolio showcasing predictive models, dashboards, and AI solutions." },
    ],
  }),
  component: Index,
});

const highlights = [
  { icon: Brain, label: "Machine Learning", description: "Predictive modeling & deep learning" },
  { icon: BarChart3, label: "Data Visualization", description: "Interactive dashboards & reports" },
  { icon: Database, label: "Data Engineering", description: "Pipelines, ETL & cloud infrastructure" },
];

function Index() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Data science visualization"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              <Sparkles className="h-4 w-4" />
              <span>Available for freelance & full-time roles</span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Turning complex data into{" "}
              <span className="text-gold">clear decisions</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I’m a data scientist and machine learning engineer who builds
              predictive models, interactive dashboards, and end-to-end AI
              solutions that drive measurable business impact.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-base font-medium text-foreground transition-all hover:border-gold hover:text-gold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-y border-border/30 bg-noir-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start rounded-2xl border border-border/30 bg-card p-6 transition-colors hover:border-gold/30"
              >
                <div className="rounded-full bg-gold/10 p-3 text-gold">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-medium text-card-foreground">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gold">
              Featured Work
            </p>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Selected Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light sm:inline-flex"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-noir-elevated px-6 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Let’s build something impactful together.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Open to data science consulting, machine learning projects, and
              full-time opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
