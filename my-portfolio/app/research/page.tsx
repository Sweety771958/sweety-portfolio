"use client";

import { motion } from "framer-motion";

const researchAreas = [
  {
    title: "Bio-inspired Electronic Sensors",
    subtitle: "E-Tongue • E-Nose • E-Skin",
    description:
      "Designing novel bio-inspired systems for healthcare diagnostics, environmental sensing, and adaptive biosensing platforms.",
  },
  {
    title: "Electrochemical Biosensors",
    subtitle: "Non-enzymatic Sensing",
    description:
      "Developing multiplex biosensors for glucose, urea, and metabolic biomarkers using nanocomposite electrodes and advanced signal analytics.",
  },
  {
    title: "EEG Signal Processing",
    subtitle: "Cognitive Neuroscience",
    description:
      "Analyzing brain signals for meditation, stress assessment, seizure detection, and brain-computer interface systems using MNE-Python and AI methods.",
  },
];

const publications = [
  {
    title: "Multiplex Biosensor Interface Utilizing PANI-AgNP Nanocomposite for Glucose and Urea detection",
    journal: "Topics in Catalysis",
    year: "2025",
    impact: "IF-2.8",
  },
  {
    title: "Advanced TiO2-polypyrrole nanostructures enhance glucose detection accuracy with cutting-edge non-enzymatic electrochemical capabilities",
    journal: "Chemical Physics Impact",
    year: "2025",
    impact: "IF-3.8",
  },
  {
    title: "Bio-inspired Electronic Sensors for Healthcare Applications",
    journal: "Chemical Engineering Journal",
    year: "2024",
    impact: "IF-13.3",
  },
  {
    title: "Variation in Physiological Parameters According to Degree of Obesity in Different Ages Male and Female",
    journal: "International Journal of Contemporary Research in Engineering & Technology",
    year: "2022",
  },
];

const bookChapters = [
  {
    title: "Investigation of antimicrobial activity using Silver Nanoparticles",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites, Volume 2",
    year: "2025",
  },
  {
    title: "Impact of Rudraksha as a catalyst in overcoming Depression",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites, Volume 1",
    year: "2025",
  },
  {
    title: "Challenges and prospects of functionalized nanomaterial-based biosensors",
    book: "Functionalized Nanomaterials for Biosensing and Bioelectronics Applications",
    year: "2024",
  },
  {
    title: "Advancement in Medical Imaging: Nanotechnology",
    book: "Futuristic Trends in Chemical, Material Sciences & Nano Technology",
    year: "2024",
  },
];

export default function Research() {
  return (
    <main className="min-h-screen bg-theme text-theme">
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative overflow-hidden bg-surface-95 py-24 px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted">
              Research Focus
            </span>
            <h1 className="mt-6 text-5xl font-black text-theme sm:text-6xl">
              High-impact biomedical research themes
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              A strong research narrative built around biosensors, AI-assisted cognition, advanced materials, and translational healthcare innovation.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-6xl px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "66+", label: "Citations" },
            { value: "4", label: "h-index" },
            { value: "5+", label: "Publications" },
            { value: "5+", label: "Book Chapters" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <p className="text-4xl font-bold text-theme">{stat.value}</p>
              <p className="mt-3 text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Core domains</p>
          <h2 className="mt-4 text-4xl font-bold text-theme">Research themes</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {researchAreas.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl transition hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.subtitle}</p>
              <h3 className="mt-4 text-2xl font-semibold text-theme">{item.title}</h3>
              <p className="mt-4 text-muted leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Selected publications</p>
          <h2 className="mt-4 text-4xl font-bold text-theme">Recent scientific work</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {publications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
            >
              <div className="flex flex-wrap items-center gap-3 text-muted">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{item.year}</span>
                <span className="text-xs uppercase tracking-[0.35em]">{item.impact ?? "Peer-reviewed"}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-theme">{item.title}</h3>
              <p className="mt-4 text-muted">{item.journal}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-theme">Book chapters</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {bookChapters.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
            >
              <h3 className="text-xl font-semibold text-theme">{item.title}</h3>
              <p className="mt-3 text-muted">{item.book}</p>
              <p className="mt-2 text-muted-2">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
