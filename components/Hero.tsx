"use client";
import { motion, type Variants } from "framer-motion";
import HolographicSphere from "./HolographicSphere";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-[0.3em] text-sm mb-4"
          >
            &gt; HELLO WORLD_
          </motion.p>
          <motion.h1
            variants={item}
            className="font-[family-name:var(--font-space-grotesk)] font-bold leading-tight mb-2"
          >
            <span className="block text-5xl md:text-7xl text-white">Ritika</span>
            <span className="block text-5xl md:text-7xl shimmer-text">(Rachel) Rana</span>
          </motion.h1>
          <motion.div variants={item} className="flex items-center gap-3 mt-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-[#c084fc] to-transparent" />
            <span className="font-[family-name:var(--font-vt323)] text-[#c084fc] tracking-widest text-lg">
              DATA ANALYST
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#93c5fd] to-transparent" />
          </motion.div>
          <motion.p
            variants={item}
            className="text-[#94a3b8] text-lg leading-relaxed max-w-xl font-[family-name:var(--font-inter)]"
          >
            Turning messy data into clear stories. Based in{" "}
            <span className="text-[#f9a8d4]">Brisbane, AU</span> — passionate
            about machine learning, behavioural analytics, and building things
            that look as good as they perform.
          </motion.p>
          <motion.div variants={item} className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-[family-name:var(--font-space-grotesk)] font-medium text-sm tracking-wide text-white"
              style={{
                background: "linear-gradient(135deg, #c084fc, #93c5fd)",
                boxShadow: "0 0 30px rgba(192,132,252,0.3)",
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-[family-name:var(--font-space-grotesk)] font-medium text-sm tracking-wide text-[#c084fc] glass glass-hover"
            >
              Say Hello ✦
            </a>
          </motion.div>
          {/* Social links */}
          <motion.div variants={item} className="flex gap-5 mt-8">
            {[
              { label: "GitHub", href: "https://github.com/ritikarana9999" },
              { label: "LinkedIn", href: "#" },
              { label: "Email", href: "mailto:ritikarana9999@gmail.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-[family-name:var(--font-vt323)] text-[#64748b] hover:text-[#c084fc] transition-colors tracking-widest text-sm"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
        {/* Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <HolographicSphere />
        </motion.div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-[family-name:var(--font-vt323)] text-[#374151] text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c084fc] to-transparent" />
      </motion.div>
    </section>
  );
}
