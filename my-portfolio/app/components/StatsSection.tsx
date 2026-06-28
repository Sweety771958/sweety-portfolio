"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    value: "5+",
    title: "Peer-reviewed Works",
    link: "/publications",
  },
  {
    value: "66+",
    title: "Citations",
    link: "/research",
  },
  {
    value: "4",
    title: "h-index",
    link: "/research",
  },
  {
    value: "15+",
    title: "Publications & Chapters",
    link: "/publications",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-theme py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-muted-2">
            Research Impact
          </p>
          <h2 className="mt-4 text-4xl font-bold text-theme">
            High-impact metrics for a growing scientific profile
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-theme bg-overlay p-8 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-surface cursor-pointer"
            >
              <motion.h3
                whileHover={{ scale: 1.1 }}
                className="text-5xl font-extrabold text-theme"
              >
                {item.value}
              </motion.h3>

              <p className="mt-4 text-muted font-semibold">
                {item.title}
              </p>

              {item.link && (
                <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    href={item.link}
                    className="inline-block rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-theme shadow-md shadow-cyan-500/20 hover:bg-cyan-300"
                  >
                    View
                  </Link>
                </div>
              )}

              <div className="mt-5 h-1 w-0 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
