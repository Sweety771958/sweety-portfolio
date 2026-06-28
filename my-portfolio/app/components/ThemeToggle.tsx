"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) {
        setIsLight(stored === "light");
        document.documentElement.classList.toggle("light", stored === "light");
        document.documentElement.setAttribute("data-theme", stored === "light" ? "light" : "dark");
      } else {
        // default: dark
        setIsLight(false);
        document.documentElement.classList.remove("light");
        document.documentElement.setAttribute("data-theme", "dark");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
    document.documentElement.classList.toggle("light", next);
    document.documentElement.setAttribute("data-theme", next ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.96 }}
      aria-pressed={isLight}
      className="inline-flex items-center justify-center rounded-full border border-theme bg-overlay p-2 text-muted-3 transition hover:bg-overlay focus:outline-none focus:ring-2 focus:ring-cyan-300"
      title={isLight ? "Switch to dark" : "Switch to light"}
    >
      {isLight ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16zM4.22 4.22a.75.75 0 011.06 0l.884.884a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM14.834 14.834a.75.75 0 011.06 0l.884.884a.75.75 0 11-1.06 1.06l-.884-.884a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zM16 10a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zM4.22 15.78a.75.75 0 010-1.06l.884-.884a.75.75 0 111.06 1.06l-.884.884a.75.75 0 01-1.06 0zM14.834 5.166a.75.75 0 010-1.06l.884-.884a.75.75 0 111.06 1.06l-.884.884a.75.75 0 01-1.06 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-300" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 0010.586 10.586z" />
        </svg>
      )}
    </motion.button>
  );
}
