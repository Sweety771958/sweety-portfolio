"use client";

import { motion, Variants } from "framer-motion";

const statFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: "easeOut" } }),
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.55, ease: "easeOut" } }),
};

const publications = [
  {
    year: "2024",
    title: "Bioinspired Electronic Sensors for Healthcare Applications",
    journal: "Chemical Engineering Journal",
    IF: "13.2",
    type: "Scopus & SCI Journal",
    doi: "https://doi.org/10.1016/j.cej.2024.155894",
    status: "Published",
  },
  {
    year: "2025",
    title: "Multiplex Biosensor Interface Utilizing PANI-AgNP Nanocomposite for Glucose and Urea detection",
    journal: "Topics in Catalysis",
    type: "SCI Journal",
    doi: "https://doi.org/10.1007/s11244-025-02058-3",
    status: "Published",
  },
  {
    year: "2025",
    title: "Advanced TiO2-polypyrrole nanostructures enhance glucose detection accuracy with cutting-edge non-enzymatic electrochemical capabilities",
    journal: "Chemical Physics Impact",
    type: "Scopus & SCI Journal",
    doi: "https://doi.org/10.1016/j.chphi.2025.100818",
    status: "Published",
  },
  {
    year: "2024",
    title: "Challenges and prospects of functionalized nanomaterial-based biosensors",
    book: "Functionalized Nanomaterials for Biosensing and Bioelectronics Applications",
    type: "Chapter 15",
    doi: "https://doi.org/10.1016/B978-0-12-823829-5.00009-9",
    status: "Published",
  },
  {
    year: "2022",
    title: "Variation in Physiological Parameters According to Degree of Obesity in Different Ages Male and Female",
    journal: "International Journal of Contemporary Research in Engineering & Technology",
    type: "Article",
    status: "Published",
  },
  {
    year: "2019",
    title: "Influence of Hydration Status on Physical Characteristics of Goat Bone",
    journal: "International Journal of Contemporary Research in Engineering & Technology",
    type: "Article",
    status: "Published",
  },
  {
    year: "2022",
    title: "Role of nanotechnology for coronavirus detection",
    book: "In Sensing Tools and Techniques for COVID-19",
    type: "Chapter 3",
    doi: "https://doi.org/10.1016/B978-0-12-823829-5.00009-9",
    status: "Published",
  },
  {
    year: "2024",
    title: "Advancement in Medical Imaging: Nanotechnology",
    book: "Futuristic Trends in Chemical, Material Sciences & Nano Technology",
    type: "Chapter 2",
    number: "e-ISBN: 978-93-5747-912-7",
    status: "Published",
  },
  {
    year: "2025",
    title: "Impact of Rudraksha as a Catalyst in Overcoming Depression",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites",
    type: "Chapter 3",
    status: "Accepted",
  },
  {
    year: "2025",
    title: "Investigation of Antimicrobial Activity of Silver Nanoparticles",
    book: "Modern Approaches in Identification and Therapeutic Applications of Secondary Metabolites",
    type: "Chapter 15",
    status: "Accepted",
  },
  {
    year: "2026",
    title: "Optimization of Multiplexed Biosensor Interface for the detection of Glucose and Urea Utilizing MgO-PVP composite",
    status: "Under review",
  },
];

export default function Publications() {
  return (
    <main className="min-h-screen bg-theme text-theme">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative overflow-hidden bg-surface-95 py-24 px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl space-y-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted">
              Publication Highlights
            </span>
            <h1 className="mt-6 text-5xl font-black text-theme sm:text-6xl">
              A cinematic showcase of impactful research.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Peer-reviewed journals, book chapters, and interdisciplinary work in biosensors, nanotechnology, and healthcare innovation.
            </p>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-6xl px-8 py-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { value: "5+", label: "Journal Papers" },
            { value: "66+", label: "Google Scholar Citations" },
            { value: "4", label: "h-index" },
            { value: "23", label: "Conferences & Chapters" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={statFade}
              custom={index * 0.08}
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
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Publication List</p>
          <h2 className="mt-4 text-4xl font-bold text-theme">Recent scholarly output</h2>
        </div>
        <div className="space-y-8">
          {publications.map((paper, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardFade}
              custom={index * 0.08}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-[2rem] border border-theme bg-overlay p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="rounded-full bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">{paper.year}</span>
                  <span className="rounded-full bg-cyan-400/6 px-4 py-1 text-sm font-semibold text-muted-3">{paper.status}</span>
              </div>
                <h3 className="mt-6 text-2xl font-semibold text-theme">{paper.title}</h3>
                {paper.journal && <p className="mt-3 text-muted"><strong>Journal:</strong> {paper.journal}</p>}
                {paper.book && <p className="mt-3 text-muted"><strong>Book:</strong> {paper.book}</p>}
                <p className="mt-3 text-muted"><strong>Type:</strong> {paper.type ?? "Publication"}</p>
                {paper.number && <p className="mt-2 text-muted-2"><strong>ISBN:</strong> {paper.number}</p>}
              {paper.doi && (
                <a
                  href={paper.doi}
                  target="_blank"
                  rel="noreferrer"
                    className="mt-6 inline-flex rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-theme transition hover:bg-cyan-300"
                >
                  DOI
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
