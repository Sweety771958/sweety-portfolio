"use client";

import { motion } from "framer-motion";

type AboutItem = {
  label: string;
  detail?: string;
  time?: string;
};

type AboutGroup = {
  title: string;
  label: string;
  items: AboutItem[];
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const aboutCards: AboutGroup[] = [
  {
    title: "Academic credentials",
    label: "Education",
    items: [
      {
        label: "Ph.D. in Biomedical Engineering",
        detail: "Shobhit Deemed-to-be University",
        time: "2022 – 2025",
      },
      {
        label: "M.Sc. Biomedical (Gold Medalist)",
        detail: "Shobhit Deemed-to-be University",
        time: "2019 – 2021",
      },
      {
        label: "B.Sc. Honors Biomedical Sciences (Gold Medalist)",
        detail: "Shobhit University, Meerut",
        time: "2016 – 2019",
      },
    ],
  },
  {
    title: "Professional experience",
    label: "Experience",
    items: [
      {
        label: "Assistant Professor",
        detail: "School of Biomedical Engineering and Health Sciences, Shobhit Institute of Engineering and Technology",
        time: "Nov 2021 – Present",
      },
      {
        label: "Research Associate",
        detail: "School of Biomedical Engineering and Health Sciences, Shobhit Institute of Engineering and Technology",
        time: "Nov 2021 – Jul 2025",
      },
      {
        label: "Biomedical Engineering Intern",
        detail: "Aoratas Technica Engineering Pvt. Ltd., Delhi",
        time: "Jun 2018 – Jan 2019",
      },
    ],
  },
  {
    title: "Mentoring & leadership",
    label: "Supervision",
    items: [
      { label: "B.Sc. Biomedical Sciences", detail: "3 Students supervised" },
      { label: "M.Sc. Biomedical Sciences", detail: "1 Student supervised" },
      { label: "M.Sc. Clinical Research", detail: "1 Student supervised" },
      { label: "B.Tech. Biomedical Engineering", detail: "9 Students supervised" },
      { label: "M.Tech. Biomedical Engineering", detail: "1 Student supervised" },
    ],
  },
  {
    title: "Technical & research tools",
    label: "Skills",
    items: [
      { label: "Python, Pandas, NumPy" },
      { label: "MNE-Python, PsychoPy, Biopac MP36" },
      { label: "Electrochemical sensor design" },
      { label: "Origin data analysis" },
      { label: "AI-driven biomedical workflows" },
      { label: "Nanomaterial-enabled sensing" },
    ],
  },
];

const thesisHighlights = [
  "Designed and fabricated a biosensor for simultaneous glucose and urea measurement from a single blood sample.",
  "Developed a multiplex biosensor with non-enzymatic electrochemical sensing.",
  "Implemented a nanocomposite-based sensing platform for robust clinical diagnostics.",
];

const additionalCourses = [
  {
    title: "Critical Thinking Skills for the Professional",
    provider: "University of California, Davis",
    href: "https://coursera.org/share/2dcf126068238e788edbbe258055e258",
  },
  {
    title: "Science of Diet and Exercise Specialization",
    provider: "National Academy of Sports Medicine",
    href: "https://coursera.org/verify/specialization/E8CEYIL0YGAI",
  },
  {
    title: "Metabolic Makeover National",
    provider: "Academy of Sports Medicine",
    href: "https://coursera.org/verify/H2R66W0LN8UO",
  },
  {
    title: "Aligning Diet & Exercise",
    provider: "National Academy of Sports Medicine",
    href: "https://coursera.org/verify/F6WKYSURQTKQ",
  },
];

const awards = [
  "Qualified in (NEET) National Eligibility Cum Entrance Test (2016).",
  "Consolation position in Poster Making Competition on World Health Day (2017).",
  "Student Coordinator in Annual Sports Meet – Blood Donation Camp (2018, 2019 & 2022).",
  "2nd Position in Biomedical Instruments Components Testing Competition at Shobhit Deemed University (2018).",
  "2nd position in poster presentation at National Seminar on Emerging trends in Bioelectronics & Informatics (2019).",
  "Best PG Research Fellow Award at ICSR-2023 (SUBMS/PGRFA/2023/01).",
];

const workshops = [
  "Workshop on MATLAB & IOT organised by APTRON, New Delhi (2017).",
  "SERB Sponsored High-End Workshop on Biomedical Acquisition and Analysis (NIT Raipur) (2023).",
  "Molecular Biology & Biochemistry Techniques workshop at IIT Roorkee (2023).",
  "AI & Computational Imaging in Healthcare workshop under CSIR Integrated Skill Initiative (2023).",
  "BCI & Neurotechnology Spring School (140 hrs) (2024).",
  "Faculty Development Program on Smart Health Innovations (2024).",
  "Quantum AI Innovations in Cancer Diagnosis workshop (2026).",
];

const abstracts = [
  "Gradually decreasing hydration status in goat bone and its impaction biomechanical characteristics (3rd National Conference on Medical Instrumentation, Biomaterials and Signal Processing, 2020).",
  "Elevated Groundwater Arsenic Contamination: A risk factor for Health and its Monitoring (3rd National Conference on Medical Instrumentation, Biomaterials and Signal Processing, 2020).",
  "Exploring Rudraksha’s Electromagnetic Effects and its Nano-Material Applications in Biosensors (International Conference on Science of Rudraksha, 2023).",
  "Impact of Rudraksha as a Catalyst in Overcoming Depression (International Conference on Science of Rudraksha, 2023).",
  "Optimization of Multiplex Biosensor Interface for Glucose and Urea Utilizing MgO/PVP Composite (RAFAS-2024).",
];

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={fadeIn}
        className="relative overflow-hidden bg-slate-900/95 py-24 px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.2),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.18),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-slate-300">
              About Dr. Sweety Pal
            </span>
            <h1 className="mt-6 text-5xl font-black text-white sm:text-6xl">
              Profile for leadership in biomedical research.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Assistant Professor at Shobhit Institute of Engineering & Technology with a strong record of biosensor innovation, computational neuroscience, and translational healthcare research.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-white">Academic Leadership</h2>
              <p className="mt-4 text-slate-300 leading-7 text-justify">
                Dr. Sweety Pal applies interdisciplinary expertise in biomedical engineering, nanotechnology, and AI to advance novel diagnostics and intelligent health systems. Her research emphasizes non-enzymatic sensing, EEG analytics, and brain-computer interface solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-white">Professional Impact</h2>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>• Mentored multidisciplinary teams in biomedical sciences and engineering.</li>
                <li>• Led advanced sensor design for glucose and urea detection.</li>
                <li>• Published in high-impact journals and authored book chapters.</li>
                <li>• Delivered conference abstracts and national workshop training.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((group, index) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{group.label}</p>
              <h2 className="mt-4 text-3xl font-bold text-white">{group.title}</h2>
              <div className="mt-8 space-y-4 text-slate-300">
                {group.items.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="font-semibold text-white">{item.label}</p>
                    {item.detail && <p className="mt-2 text-slate-400">{item.detail}</p>}
                    {item.time && <p className="mt-2 text-cyan-300">{item.time}</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Curriculum Vitae</p>
          <h2 className="mt-4 text-4xl font-bold text-white">Research thesis, experience, and certifications</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">PhD Thesis</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Design & fabrication of multiplex biosensors</h3>
            <p className="mt-4 text-slate-300">
              Design and fabrication of biosensor for the measurement of glucose and urea in a single blood sample.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {thesisHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Professional Experience</p>
            <div className="mt-4 space-y-6 text-slate-300">
              <div>
                <p className="font-semibold text-white">Assistant Professor</p>
                <p className="mt-2 text-sm text-slate-400">School of Biomedical Engineering and Health Sciences, Shobhit Institute of Engineering and Technology</p>
                <p className="mt-2 text-cyan-300">Nov 2021 – Present</p>
              </div>
              <div>
                <p className="font-semibold text-white">Research Associate</p>
                <p className="mt-2 text-sm text-slate-400">School of Biomedical Engineering and Health Sciences, Shobhit Institute of Engineering and Technology</p>
                <p className="mt-2 text-cyan-300">Nov 2021 – Jul 2025</p>
              </div>
              <div>
                <p className="font-semibold text-white">Biomedical Engineering Intern</p>
                <p className="mt-2 text-sm text-slate-400">Aoratas Technica Engineering Pvt. Ltd., Delhi</p>
                <p className="mt-2 text-cyan-300">Jun 2018 – Jan 2019</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Courses & Certifications</p>
            <div className="mt-4 space-y-4 text-slate-300">
              {additionalCourses.map((course) => (
                <a
                  key={course.title}
                  href={course.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                >
                  <p className="font-semibold text-white">{course.title}</p>
                  <p className="mt-2 text-sm text-slate-400">{course.provider}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 pb-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Awards & Workshops</p>
          <h2 className="mt-4 text-4xl font-bold text-white">Recognition and professional development</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Awards</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {awards.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Workshops</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {workshops.map((w) => (
                <li key={w} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Conference Abstracts</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {abstracts.map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300"></span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
