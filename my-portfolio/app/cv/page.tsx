"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Ph.D. in Biomedical Engineering",
    school: "Indian Institute of Technology (example)",
    year: "2025",
  },
  {
    degree: "M.Tech. in Biomedical Engineering",
    school: "University (example)",
    year: "2019",
  },
];

const teaching = [
  "Biomedical Sensors",
  "Signal Processing for Bioengineering",
  "Introduction to Embedded Systems",
];

const skills = ["Electrochemistry", "EEG Analysis", "Python", "Embedded C", "Machine Learning"];

export default function CV() {
  return (
    <main className="min-h-screen bg-theme text-theme">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-surface-95 py-24 px-8"
      >
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-8">
            <span className="inline-flex rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted">
              Curriculum Vitae
            </span>
            <h1 className="mt-6 text-5xl font-black text-theme sm:text-6xl">Academic profile & experience</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl">Concise CV-style overview for academic and industry reviewers.</p>
          </div>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-theme bg-surface p-6">
              <h2 className="text-xl font-semibold text-theme">Education</h2>
              <ul className="mt-4 space-y-4 text-muted">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-semibold text-theme">{e.degree}</p>
                    <p className="mt-1 text-muted-2">{e.school} • {e.year}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-theme bg-surface p-6">
              <h2 className="text-xl font-semibold text-theme">Teaching & Supervision</h2>
              <p className="mt-4 text-muted">Courses taught and current supervision load.</p>
              <ul className="mt-4 space-y-2 text-muted">
                {teaching.map((t) => (
                  <li key={t} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"/> {t}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-theme bg-surface p-6">
            <h2 className="text-xl font-semibold text-theme">Technical skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{s}</span>
              ))}
            </div>
          </section>
        </div>
      </motion.section>
    </main>
  );
}
