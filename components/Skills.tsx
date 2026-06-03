"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CATEGORIES = [
  {
    name: "Languages",
    color: "#c084fc",
    skills: ["Python", "SQL", "R", "JavaScript", "TypeScript", "Bash"],
  },
  {
    name: "ML & Analytics",
    color: "#93c5fd",
    skills: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "LangChain", "OpenAI API", "Regression", "Clustering"],
  },
  {
    name: "Visualisation",
    color: "#f9a8d4",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly", "D3.js"],
  },
  {
    name: "Tools & Platforms",
    color: "#22d3ee",
    skills: ["Git", "Docker", "AWS", "Google BigQuery", "Jupyter", "VS Code", "dbt"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-[0.3em] text-sm mb-2">
            &gt; SKILLS.json
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-white">
            What I work with
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#93c5fd] to-transparent mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.name}
              className="glass rounded-2xl p-6 glass-hover"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <span
                  className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm tracking-wide"
                  style={{ color: cat.color }}
                >
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-[family-name:var(--font-inter)] text-[#cbd5e1]"
                    style={{
                      background: `${cat.color}11`,
                      border: `1px solid ${cat.color}33`,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.08, borderColor: cat.color, color: cat.color }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
