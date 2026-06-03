"use client";
import { motion } from "framer-motion";

export default function HolographicSphere() {
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
      {/* Outer glow rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-[#c084fc]"
          style={{ opacity: 0.15 - i * 0.04 }}
          animate={{ scale: [1, 1.05 + i * 0.05, 1], opacity: [0.15 - i * 0.04, 0.25 - i * 0.04, 0.15 - i * 0.04] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* Main sphere */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: "radial-gradient(ellipse at 35% 35%, #c084fc44, #93c5fd22 40%, #050508 70%)",
          border: "1px solid rgba(192,132,252,0.4)",
          boxShadow: "0 0 60px rgba(192,132,252,0.2), inset 0 0 40px rgba(147,197,253,0.1)",
        }}
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
          <defs>
            <radialGradient id="sphereGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#050508" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[30, 60, 90, 120, 150].map((y) => (
            <ellipse key={y} cx="100" cy={y} rx="80" ry="8" fill="none" stroke="#c084fc" strokeWidth="0.5" />
          ))}
          {[0, 40, 80, 120, 160].map((x) => (
            <line key={x} x1={x} y1="10" x2={x + 10} y2="190" stroke="#93c5fd" strokeWidth="0.5" opacity="0.6" />
          ))}
        </svg>
        {/* Highlight */}
        <div
          className="absolute top-6 left-8 w-16 h-8 rounded-full opacity-40 blur-md"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
        />
      </motion.div>
      {/* Orbiting dot */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 rounded-full bg-[#22d3ee] shadow-[0_0_12px_#22d3ee]" />
      </motion.div>
      {/* Second orbiting dot */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transform: "rotate(45deg)" }}
      >
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#f9a8d4] shadow-[0_0_10px_#f9a8d4]" />
      </motion.div>
    </div>
  );
}
