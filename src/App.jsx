import React from "react"
import { Github, Linkedin, Mail, Download, Briefcase, Code2, LineChart, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

// Tailwind is available by default in canvas previews.
// shadcn/ui components are also available if you want to expand this later.
// Replace placeholder data with your own.

const projects = [
  {
    title: "Stock Simulator Platform",
    blurb: "Full‑stack trading simulator with real‑time quotes, multi‑account support, and portfolio analytics.",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
    link: "https://github.com/nolanmartzke/Stock-Market-Simulator",
  },
  {
    title: "MLB Player Value Analytics",
    blurb: "A data-driven pipeline that integrates advanced MLB statistics, salary data, and custom value algorithms to identify top performers and high-value trade targets. Features interactive visualizations and a React interface for exploring player performance.",
    stack: ["Python", "Pandas", "Selenium", "PyBaseball", "SciPy", "React"],
    link: "https://github.com/nolanmartzke/MLB-Rankings-Predictor",
  },
  {
    title: "ML Pipeline Starter",
    blurb: "Reproducible ML workflow with data versioning, experiment tracking, and CI checks.",
    stack: ["PyTorch", "DVC", "GitHub Actions"],
    link: "https://github.com/nolanmartzke/ml-pipeline-starter",
  },
]

const experiences = [
  {
    role: "Software Engineer & Data Analyst",
    org: "University Projects & Internships",
    time: "2023 — 2025",
    bullets: [
      "Built full‑stack apps and REST APIs with React + Java/Spring",
      "Deployed containerized services with Docker & GitHub Actions",
      "Developed ML models and data visualizations (PyTorch, Pandas)",
    ],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">Nolan Martzke</a>
          <nav className="flex gap-6 text-sm">
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Software Engineer · Data Scientist · Full‑Stack Dev</h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I build reliable, fast web apps and data products. Strong in React, Java/Spring,
              Python/ML, and DevOps. Obsessed with clean code, sensible abstractions, and helpful visualizations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:opacity-90">
                <Code2 className="w-4 h-4" /> See projects
              </a>
              <a href="mailto:nolanmartzke@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-slate-50">
                <Mail className="w-4 h-4" /> Contact me
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-slate-50">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
            <div className="mt-6 flex gap-4 text-slate-600">
              <a href="https://github.com/nolanmartzke" className="hover:text-slate-900 inline-flex items-center gap-2"><Github className="w-4 h-4"/> GitHub</a>
              <a href="https://www.linkedin.com/in/nolanmartzke" className="hover:text-slate-900 inline-flex items-center gap-2"><Linkedin className="w-4 h-4"/> LinkedIn</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="bg-white rounded-3xl shadow p-6 border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-100"><LineChart className="w-5 h-5"/></div>
              <h3 className="font-semibold">What I like to build</h3>
            </div>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Production‑ready full‑stack apps</li>
              <li>• Interactive data viz & dashboards</li>
              <li>• ML pipelines & evaluators</li>
              <li>• Efficient APIs with CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-slate-100"><Code2 className="w-5 h-5"/></div>
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -4 }}
              className="group block rounded-3xl border bg-white p-5 shadow hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-semibold group-hover:underline">{p.title}</h3>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-slate-100"><Briefcase className="w-5 h-5"/></div>
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((e) => (
            <div key={e.role} className="rounded-3xl border bg-white p-5 shadow">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold">{e.role} · {e.org}</h3>
                <span className="text-sm text-slate-500">{e.time}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-600">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="Languages" items={["Java", "JavaScript", "C/C++", "Python", "SQL", "R"]} />
          <Card title="Frameworks & Libraries" items={["React", "Spring Boot", "PyTorch", "TensorFlow", "NumPy/Pandas"]} />
          <Card title="Cloud & DevOps" items={["Docker", "GitHub Actions", "AWS", "GCP", "Linux"]} />
          <Card title="Concepts" items={["Agile/Scrum", "TDD", "API Design", "Data Pipelines"]} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl border bg-white p-8 shadow text-center">
          <h2 className="text-2xl font-semibold">Let’s build something great</h2>
          <p className="mt-2 text-slate-600">I’m open to software, data, and ML roles — internships or full‑time.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="mailto:nolanmartzke@gmail.com" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:opacity-90">
              <Mail className="w-4 h-4" /> Email me
            </a>
            <a href="https://github.com/nolanmartzke" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-slate-50">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nolanmartzke" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border hover:bg-slate-50">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-slate-500 py-8">© {new Date().getFullYear()} Nolan Martzke. Built with React.</footer>
    </div>
  )
}

function Card({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="rounded-3xl border bg-white p-5 shadow">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 text-slate-600 space-y-1">
        {items.map((i) => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  )
}
