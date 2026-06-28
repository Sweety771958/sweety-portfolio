"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  {
    value: "3",
    title: "Journal Papers",
    link: "/publications",
  },
  {
    value: "5",
    title: "Book Chapters",
    link: "/publications",
  },
  {
    value: "66+",
    title: "Citations",
  },
  {
    value: "AI",
    title: "Healthcare Research",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
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
                scale: 1.05,
              }}
              className="group bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer"
            >
              <motion.h3
                whileHover={{ scale: 1.15 }}
                className="text-5xl font-extrabold text-blue-800"
              >
                {item.value}
              </motion.h3>

              <p className="mt-4 text-gray-800 font-semibold">
  {item.title}
</p>

{item.link && (
  <div className="mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
    <Link
      href={item.link}
      className="inline-block rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-800"
    >
      View
    </Link>
  </div>
)}

              <div className="mt-5 h-1 w-0 bg-blue-700 rounded-full transition-all duration-500 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}