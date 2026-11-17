import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { skillCategories } from "../data/skills";

const technologyCount = new Set(skillCategories.flatMap((c) => c.skills)).size;

const stats = [
  { value: projects.length, label: "Projects built" },
  { value: technologyCount, label: "Technologies used" },
  { value: skillCategories.length, label: "Skill areas" },
  { value: 1, label: "Training placement (NSSF)" },
];

const nowRows = [
  { label: "Project", value: "Medicube skincare e-commerce store" },
  { label: "Features", value: "Cart, online checkout, delivery to the customer's location" },
  { label: "Learning", value: "Computer Systems & Networks" },
  { label: "Hosted on", value: "Vercel" },
];

const openTo = ["Software Developer", "Network Engineer", "Internship", "Remote"];

export default function Hero() {
  return (
    <section id="home" className="py-14 md:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="eyebrow">
            Software Developer &amp; Computer Networks Enthusiast · Tanzania
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] sm:text-5xl">
            I build web applications and IoT systems with a networking mindset.
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-[var(--color-muted)]">
            I build modern web applications, explore computer networking, and
            develop technology solutions through software, IoT, and real-world
            projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-ink !rounded-lg">
              View Projects
              <ArrowRight size={16} />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold">{s.value}</dd>
                <p className="mt-1 text-xs leading-snug text-[var(--color-muted)]" aria-hidden="true">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <aside className="card overflow-hidden" aria-label="Currently working on">
          <div className="flex items-center gap-2.5 bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-[#34d399]" aria-hidden="true" />
            Currently working on
          </div>
          <dl className="divide-y divide-[var(--color-line)] px-5 pb-2">
            {nowRows.map((r) => (
              <div key={r.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3 text-sm">
                <dt className="mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  {r.label}
                </dt>
                <dd className="font-medium">{r.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="container-page mt-10 flex flex-wrap items-center gap-2.5">
        <span className="mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
          Open to:
        </span>
        {openTo.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
