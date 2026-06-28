"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-theme text-theme">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-surface-95 py-24 px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.18),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-theme bg-overlay px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted">
              Contact & Connect
            </span>
            <h1 className="mt-6 text-5xl font-black text-theme sm:text-6xl">
              Partner with research, innovation, and leadership.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Reach out for collaboration, consulting, scientific review, or academic mentorship in biomedical engineering and biosensor development.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-[2rem] border border-theme bg-overlay p-10 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-theme">Get in touch</h2>
              <div className="mt-8 space-y-6 text-muted">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Email</p>
                  <a href="mailto:sweetypal.bme98@gmail.com" className="mt-2 block text-lg font-semibold text-theme hover:text-cyan-300">
                    sweetypal.bme98@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Location</p>
                  <p className="mt-2 text-lg font-semibold text-theme">Meerut, Uttar Pradesh, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="rounded-[2rem] border border-theme bg-overlay p-10 shadow-[0_30px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl"
            >
              <h2 className="text-2xl font-semibold text-theme">Professional links</h2>
              <div className="mt-8 space-y-4 text-muted">
                {[
                  { label: "Google Scholar", href: "https://acesse.one/rtx0mi7" },
                  { label: "ORCID", href: "https://orcid.org/0009-0007-3611-7381" },
                  { label: "ResearchGate", href: "https://sl1nk.com/3qnusgz" },
                  { label: "LinkedIn", href: "https://shorturl.at/bWVSo" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-theme bg-surface px-5 py-4 text-theme transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.label}</p>
                    <p className="mt-2 font-semibold">Visit profile</p>
                  </a>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
