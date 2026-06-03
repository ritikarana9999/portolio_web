"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGradientOrbs() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 80 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 80 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          background: "radial-gradient(circle, #c084fc, transparent)",
          left: springX.get() + "%",
          top: springY.get() + "%",
          x: "-50%",
          y: "-50%",
          translateX: springX,
          translateY: "-50%",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #22d3ee, transparent)",
          right: "10%",
          bottom: "20%",
          translateX: useSpring(useMotionValue(0), { damping: 80, stiffness: 60 }),
        }}
      />
      {/* Static ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#c084fc] opacity-[0.04] blur-[100px]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#93c5fd] opacity-[0.04] blur-[90px]" />
    </div>
  );
}
