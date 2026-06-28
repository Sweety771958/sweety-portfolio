"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

const navVariants: Variants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as any } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as any } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [themeLabel, setThemeLabel] = useState<'Light' | 'Dark'>('Dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const readTheme = () => {
      try {
        const t = document.documentElement.getAttribute('data-theme');
        setThemeLabel(t === 'light' ? 'Light' : 'Dark');
      } catch (e) {}
    };
    readTheme();

    // storage event for other tabs
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'theme') readTheme();
    };
    window.addEventListener('storage', onStorage);

    // MutationObserver for attribute changes on html (data-theme or class)
    const obs = new MutationObserver(() => readTheme());
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });

    return () => {
      window.removeEventListener('storage', onStorage);
      obs.disconnect();
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed inset-x-0 top-0 z-50 border-b border-theme bg-theme-95 backdrop-blur-xl shadow-2xl shadow-theme transition-all duration-300 ${scrolled ? "backdrop-brightness-90 py-3" : "py-4"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4"
        >
          <div className="h-10 w-10 rounded-2xl bg-cyan-400/15 ring-1 ring-cyan-300/30 flex items-center justify-center text-lg font-black text-cyan-300">
            S
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Dr. Sweety Pal</p>
            <p className="text-xs text-muted-2">Biomedical Engineering</p>
          </div>
        </motion.div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="ml-2 inline-flex items-center rounded-full border border-theme bg-theme-95 px-3 py-1 text-xs font-medium text-muted-2">
            <span className="mr-2 h-2 w-2 rounded-full" aria-hidden style={{ backgroundColor: themeLabel === 'Light' ? 'var(--cyan-300)' : 'var(--muted-3)' }} />
            {themeLabel}
          </span>
        </div>

          <motion.button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center justify-center rounded-full border border-theme bg-overlay p-2 text-muted-3 transition hover:bg-overlay focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Open menu</span>
          <svg className={`h-6 w-6 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d={open ? "M6 18L18 6" : "M4 6h16"} strokeLinecap="round" strokeLinejoin="round" />
            <path d={open ? "M6 6l12 12" : "M4 12h16"} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

          <div className={`w-full overflow-hidden transition-all duration-300 ease-out sm:flex sm:w-auto ${open ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"} sm:max-h-full sm:opacity-100`}>
          <motion.ul
            initial="hidden"
            animate="visible"
              className="flex flex-col gap-3 rounded-3xl border border-theme bg-theme-95 p-4 text-sm font-semibold text-muted-3 shadow-2xl shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:border-none sm:bg-transparent sm:p-0 sm:shadow-none sm:max-h-full sm:opacity-100"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.li key={link.href} variants={itemVariants} whileHover={{ y: -2 }}>
                  <Link
                    href={link.href}
                    className={`block rounded-full px-4 py-2 transition ${isActive ? "bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30" : "hover:bg-overlay hover:text-theme"}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
}
