"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "> initializing portfolio.exe...",
  "> loading aesthetic modules [████████] 100%",
  "> importing vibes... OK",
  "> calibrating holographic display...",
  "> running ritika.rana --mode=data-analyst",
  "> Brisbane, AU detected",
  "> all systems nominal ✓",
  "> welcome.",
];

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let i = 0;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const add = () => {
      if (cancelled) return;
      if (i < LINES.length) {
        const line = LINES[i];
        setLines((prev) => [...prev, line]);
        i++;
        const t = setTimeout(add, 300 + Math.random() * 250);
        timers.push(t);
      } else {
        const t1 = setTimeout(() => { if (!cancelled) setDone(true); }, 600);
        const t2 = setTimeout(() => { if (!cancelled) onDone(); }, 1200);
        timers.push(t1, t2);
      }
    };

    const t0 = setTimeout(add, 400);
    timers.push(t0);

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-[#050508] flex items-center justify-center"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
            }}
          />
          <div className="max-w-lg w-full px-8">
            <div className="mb-6">
              <p className="font-[family-name:var(--font-vt323)] text-[#22d3ee] text-sm tracking-widest">
                PORTFOLIO_OS v2.0.26 — BOOT SEQUENCE
              </p>
              <div className="h-px bg-gradient-to-r from-[#c084fc] to-transparent mt-2" />
            </div>
            <div className="space-y-1.5 min-h-[200px]">
              {lines.filter(Boolean).map((line, idx) => (
                <motion.p
                  key={idx}
                  className="font-[family-name:var(--font-vt323)] text-lg"
                  style={{
                    color: line.includes("✓") || line.includes("welcome") ? "#c084fc" : "#a1a1aa",
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {line}
                </motion.p>
              ))}
              {!done && (
                <span
                  className="inline-block w-2 h-4 bg-[#22d3ee] ml-1 align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              )}
            </div>
            <div className="mt-8 h-1 bg-[#1a1a2e] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#c084fc] to-[#22d3ee]"
                initial={{ width: "0%" }}
                animate={{ width: `${(lines.length / LINES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
