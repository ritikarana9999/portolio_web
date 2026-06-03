"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    id: "chat-pdf",
    title: "CHAT-pdf",
    subtitle: "RAG-powered document Q&A",
    description:
      "Upload any PDF and have a conversation with it. Built with LangChain, OpenAI GPT-4, and a FAISS vector store. Supports multi-document sessions and source citation.",
    tags: ["LangChain", "OpenAI", "Python", "FAISS", "Streamlit"],
    accent: "#c084fc",
    icon: "📄",
    github: "https://github.com/ritikarana9999",
    demo: "#",
    stats: [{ label: "Accuracy", value: "~92%" }, { label: "Latency", value: "<2s" }],
    size: "large",
  },
  {
    id: "falcon9",
    title: "Falcon 9 Landing Predictor",
    subtitle: "SpaceX first-stage outcome prediction",
    description:
      "ML pipeline predicting Falcon 9 first-stage landing success from historical SpaceX data. Achieved 94.6% accuracy using ensemble methods and feature engineering on launch parameters.",
    tags: ["scikit-learn", "Python", "XGBoost", "Pandas", "Plotly"],
    accent: "#93c5fd",
    icon: "🚀",
    github: "https://github.com/ritikarana9999",
    demo: "#",
    stats: [{ label: "Accuracy", value: "94.6%" }, { label: "Model", value: "XGBoost" }],
    size: "medium",
  },
  {
    id: "customer-behaviour",
    title: "Customer Behaviour Analysis",
    subtitle: "Retail segmentation & insights",
    description:
      "End-to-end behavioural analytics on a retail dataset — RFM analysis, k-means clustering to identify high-value segments, and an interactive Tableau dashboard for stakeholders.",
    tags: ["Python", "K-Means", "Tableau", "RFM", "SQL"],
    accent: "#f9a8d4",
    icon: "📊",
    github: "https://github.com/ritikarana9999",
    demo: "#",
    stats: [{ label: "Segments", value: "6" }, { label: "Records", value: "500K+" }],
    size: "medium",
  },
];

function ProjectCard({ project, index, inView }: { project: typeof PROJECTS[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      className={`glass glass-hover rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden group ${
        project.size === "large" ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      style={{ borderColor: `${project.accent}22` }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
        style={{ background: project.accent }}
      />
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-2xl">{project.icon}</span>
            <h3
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-xl text-white"
            >
              {project.title}
            </h3>
          </div>
          <p
            className="font-[family-name:var(--font-vt323)] tracking-widest text-xs"
            style={{ color: project.accent }}
          >
            {project.subtitle.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          {project.stats.map((s) => (
            <div
              key={s.label}
              className="text-center px-3 py-1.5 rounded-lg"
              style={{ background: `${project.accent}11`, border: `1px solid ${project.accent}33` }}
            >
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm" style={{ color: project.accent }}>{s.value}</p>
              <p className="font-[family-name:var(--font-inter)] text-[#64748b] text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Description */}
      <p className="font-[family-name:var(--font-inter)] text-[#94a3b8] text-sm leading-relaxed">
        {project.description}
      </p>
      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs font-[family-name:var(--font-inter)] text-[#94a3b8]"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Links */}
      <div className="flex gap-4 mt-auto pt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          style={{ color: project.accent }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href={project.demo}
          className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium flex items-center gap-1.5 text-[#64748b] hover:text-[#94a3b8] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-[0.3em] text-sm mb-2">
            &gt; PROJECTS/
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-white">
            Selected work
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#f9a8d4] to-transparent mt-4" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
