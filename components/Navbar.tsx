"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="font-[family-name:var(--font-space-grotesk)] font-bold text-white">
          R<span className="text-[#c084fc]">.</span>R
        </a>
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#64748b] hover:text-[#c084fc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:ritikarana9999@gmail.com"
          className="font-[family-name:var(--font-space-grotesk)] text-xs px-4 py-2 rounded-full text-[#c084fc]"
          style={{ border: "1px solid rgba(192,132,252,0.4)" }}
        >
          Hire me ✦
        </a>
      </div>
    </motion.nav>
  );
}
