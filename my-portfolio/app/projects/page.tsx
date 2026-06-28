"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Multiplex Glucose–Urea Sensor",
    summary:
      "A non-enzymatic multiplex electrochemical sensor for simultaneous glucose and urea measurement using nanocomposite electrodes and signal separation algorithms.",
    tech: ["Electrochemistry", "PANI-AgNP", "Signal Processing"],
    href: "/publications",
  },
  {
    title: "EEG-based Cognitive State Classifier",
    summary:
      "A lightweight pipeline for preprocessing and classifying EEG signals for meditation and stress monitoring using feature extraction and ML.",
    tech: ["EEG", "MNE-Python", "ML"],
    href: "/research",
  },
  {
    title: "Portable Biosensor Platform",
    summary:
      "Miniaturized hardware and firmware for point-of-care diagnostic devices with cloud synchronization and simple mobile UI.",
    tech: ["Embedded", "IoT", "Firmware"],
    href: "/contact",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-theme text-theme">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-surface-95 py-24 px-8"
      >
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <span className="inline-flex rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted">
              Projects
            </span>
            <h1 className="mt-6 text-5xl font-black text-theme sm:text-6xl">Selected engineering projects</h1>
            <p className="mt-4 text-lg text-muted max-w-2xl">
              Practical prototypes and research-driven engineering work focusing on biosensors, embedded systems, and signal analytics.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="rounded-2xl border border-theme bg-overlay p-6">
                <h3 className="text-xl font-semibold text-theme">{p.title}</h3>
                <p className="mt-3 text-muted leading-7">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="inline-block rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href={p.href} className="inline-block rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-theme">
                    Learn more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
