"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-16 lg:px-24 relative">
      <div className="h-px bg-gradient-to-r from-transparent via-[#c084fc33] to-transparent mb-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-lg text-white">
            Ritika <span className="text-[#c084fc]">(Rachel)</span> Rana
          </p>
          <p className="font-[family-name:var(--font-vt323)] text-[#374151] tracking-widest text-sm mt-1">
            DATA ANALYST — BRISBANE, AU
          </p>
        </div>
        <div className="flex gap-6">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#64748b] hover:text-[#c084fc] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-[family-name:var(--font-vt323)] text-[#374151] text-sm tracking-wider">
          built with ✦ next.js + framer motion
        </p>
      </div>
    </footer>
  );
}
