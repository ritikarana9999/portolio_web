"use client";
import { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const COLORS = ["#c084fc", "#93c5fd", "#f9a8d4", "#22d3ee"];

export default function SparkleParticles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const initial: Sparkle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setSparkles(initial);

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => ({
          ...s,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animation: `sparkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        >
          <svg
            width={s.size * 4}
            height={s.size * 4}
            viewBox="0 0 24 24"
            fill={s.color}
          >
            <path d="M12 2l1.5 7.5L21 12l-7.5 1.5L12 21l-1.5-7.5L3 12l7.5-1.5z" />
          </svg>
        </div>
      ))}
    </div>
  );
}
