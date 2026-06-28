"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import StatsSection from "./components/StatsSection";

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: "easeOut" } }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-theme text-theme pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl animate-float" />
        <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-float" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative z-10 max-w-7xl mx-auto px-8 py-24 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] items-center"
      >
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.3em] text-muted-3 shadow-sm"
          >
            Biomedical Engineering Leader
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight text-theme drop-shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
              Dr. Sweety Pal
            </h1>

            <h2 className="text-3xl font-semibold text-muted">
              Assistant Professor, Biomedical Engineering
            </h2>

            <p className="max-w-xl text-lg leading-8 text-muted">
              Building high-impact biosensor platforms, AI-assisted cognitive research, and multidisciplinary healthcare innovation from Shobhit Institute of Engineering & Technology.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Research Output",
                value: "5+",
                description: "Journal papers and chapters",
              },
              {
                title: "Impact Metrics",
                value: "66+",
                description: "Citations since 2024",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                custom={index * 0.08}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-[2rem] border border-theme bg-overlay p-6 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-muted-2">{item.title}</p>
                <p className="mt-4 text-4xl font-black text-theme">{item.value}</p>
                <p className="mt-2 text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <a
              href="mailto:sweetypal.bme98@gmail.com"
              className="inline-flex rounded-full border border-theme bg-overlay px-8 py-3 text-theme font-semibold shadow-2xl shadow-black/20 transition hover:bg-overlay"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Core strengths</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Nanotechnology & Biosensors",
                "EEG Signal Analysis",
                "AI for Healthcare",
                "Non-enzymatic Electrochemical Sensing",
              ].map((item) => (
                  <div key={item} className="rounded-3xl bg-surface p-4 text-muted-3">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2.5rem] border border-theme bg-surface-95 shadow-[0_50px_120px_rgba(15,23,42,0.45)]">
            <Image
              src="/images/sweety-pal.jpg"
              alt="Dr. Sweety Pal"
              width={520}
              height={520}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.section>

      <StatsSection />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-theme py-20"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-[0.35em] text-muted-2">
              Research focus
            </span>
            <h2 className="mt-4 text-4xl font-bold text-theme">
              Select strengths from the CV
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Focused expertise across nanotechnology, intelligent biosensors, brain-computer interfaces, and cognitive neuroscience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              "Nanotechnology",
              "Electrochemical Sensors",
              "Brain Cancer Detection",
              "Brain Computer Interface",
              "AI in Healthcare",
              "Cognitive Studies",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_80px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-surface"
              >
                <h3 className="text-2xl font-semibold text-theme">{item}</h3>
                <p className="mt-4 text-muted leading-7">
                  Applied research and engineering for advanced diagnostics, analytics, and healthcare systems.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
