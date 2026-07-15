import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Your Name" },
      { name: "description", content: "Learn more about my background, skills, and experience as a data scientist." },
      { property: "og:title", content: "About — Your Name" },
      { property: "og:description", content: "Learn more about my background, skills, and experience as a data scientist." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  { category: "Languages", items: ["Python", "SQL", "R"] },
  { category: "ML & AI", items: ["scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "Hugging Face", "Gradient Boosting", "Random Forest","Logistic Regression"] },
  { category: "Data & Viz", items: ["Pandas", "NumPy", "Spark", "Plotly", "Tableau", "Power BI"] },
  { category: "Engineering", items: ["Docker", "FastAPI", "AWS", "GCP", "Git", "MLflow"] },
];

const experience = [
  {
    role: "Student",
    company: "Dian Nuswantoro University",
    period: "2022 — Present",
    description:
      "",
  },
  {
    role: "Data Scientist",
    company: "Bengkel Coding Workshop Participant",
    period: "2025",
    description:
      "",
  },
  {
    role: "Research",
    company: "Dian Nuswantoro University",
    period: "2026",
    description:
      "Enhancing Gradient Boosting Performance for Obesity Prediction Through Body Mass Index Feature Engineering and Hyperparameter Optimization",
  },
];

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-gold">
            About Me
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Bima Sakti Khaharrasul
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Data Scientist & Machine Learning Engineer
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="space-y-8 text-foreground/90">
          <p className="text-lg leading-relaxed">
            I’m a data scientist with a passion for turning messy, complex data
            into actionable insights. Over the past several years, I’ve worked
            across industries including fintech, e-commerce, and healthcare,
            building predictive models, recommendation systems, and real-time
            analytics pipelines.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            My approach combines strong statistical foundations with modern
            machine learning engineering. I care deeply about model
            interpretability, reproducibility, and building solutions that
            actually get used in production.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            When I’m not exploring datasets, you’ll find me writing about data
            science, contributing to open-source tools, or experimenting with
            new ML frameworks.
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-24">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Skills & Tools
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="font-display text-sm font-medium uppercase tracking-wider text-gold">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-24">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground">
          Experience
        </h2>
        <div className="mt-8 space-y-8">
          {experience.map((job) => (
            <div
              key={job.role}
              className="flex flex-col gap-2 border-b border-border/30 pb-8 sm:flex-row sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-medium text-foreground">
                  {job.role}
                </h3>
                <p className="text-muted-foreground">{job.company}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground/80">
                  {job.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-medium text-gold">
                {job.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
