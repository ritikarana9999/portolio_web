"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DIARY_ENTRIES = [
  { date: "2024-03-12", text: "Finished my Customer Behaviour Analysis project. The clustering results were surprisingly beautiful 🌸" },
  { date: "2024-01-28", text: "Submitted Falcon 9 prediction model — 94.6% accuracy!! Couldn't believe it honestly." },
  { date: "2023-11-15", text: "Started learning LangChain. CHAT-pdf idea sparked from a very tedious study session lol" },
  { date: "2023-09-02", text: "Moved to Brisbane! New chapter, new data, new adventures ✨" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-[0.3em] text-sm mb-2">
            &gt; ABOUT_ME.txt
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-white">
            A little about me
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#c084fc] to-transparent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Polaroid */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            animate={inView ? { opacity: 1, x: 0, rotate: -2 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="p-4 pb-12 float-anim"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(192,132,252,0.1)",
                transform: "rotate(-2deg)",
              }}
            >
              <div
                className="w-64 h-72 md:w-72 md:h-80 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
                  filter: "saturate(0.8) brightness(0.9)",
                }}
              >
                {/* Decorative photo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-28 h-28 mx-auto rounded-full mb-4"
                      style={{
                        background: "radial-gradient(circle at 40% 40%, #c084fc, #93c5fd55, #050508)",
                        border: "2px solid rgba(192,132,252,0.4)",
                        boxShadow: "0 0 30px rgba(192,132,252,0.3)",
                      }}
                    />
                    <p className="font-[family-name:var(--font-vt323)] text-[#c084fc] tracking-widest text-xl">
                      RITIKA.RANA
                    </p>
                    <p className="font-[family-name:var(--font-vt323)] text-[#64748b] tracking-widest text-sm mt-1">
                      DATA ANALYST
                    </p>
                  </div>
                </div>
                {/* Y2K decorative elements */}
                <div className="absolute top-3 right-3 w-6 h-6 border border-[#22d3ee] opacity-40 rotate-45" />
                <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full border border-[#f9a8d4] opacity-40" />
                <div className="absolute top-1/2 right-4 w-2 h-12 bg-gradient-to-b from-[#c084fc] to-transparent opacity-20" />
              </div>
              <p
                className="mt-3 text-center font-[family-name:var(--font-vt323)] text-[#94a3b8] tracking-wider text-sm"
                style={{ fontStyle: "italic" }}
              >
                Brisbane, AU — 2024 ✦
              </p>
            </div>
          </motion.div>

          {/* Digital diary */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 mb-6">
              <p className="font-[family-name:var(--font-inter)] text-[#94a3b8] leading-relaxed mb-4">
                Hi! I&apos;m Ritika — a data analyst who gets genuinely excited about
                finding the story hidden in a dataset. I love the intersection of
                rigorous analysis and beautiful presentation.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[#94a3b8] leading-relaxed">
                When I&apos;m not wrangling DataFrames, I&apos;m probably on Pinterest collecting
                aesthetic references, experimenting with ML models, or exploring Brisbane&apos;s café scene.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Python", "SQL", "Machine Learning", "Tableau", "Power BI", "R"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-[family-name:var(--font-space-grotesk)] text-[#c084fc]"
                    style={{ border: "1px solid rgba(192,132,252,0.3)", background: "rgba(192,132,252,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Diary entries */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-widest text-sm">📓 DIGITAL DIARY</span>
              </div>
              <div className="space-y-4">
                {DIARY_ENTRIES.map((entry, i) => (
                  <motion.div
                    key={i}
                    className="border-l-2 border-[#c084fc33] pl-4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <p className="font-[family-name:var(--font-vt323)] text-[#c084fc] text-xs tracking-widest mb-1">
                      {entry.date}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[#94a3b8] text-sm leading-relaxed">
                      {entry.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
