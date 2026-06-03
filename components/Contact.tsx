"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface GuestEntry {
  name: string;
  message: string;
  time: string;
}

const IM_MESSAGES = [
  { from: "RachelR_99", text: "hey! want to collaborate or just say hi? 🌸", time: "12:01" },
  { from: "system", text: "DataAnalyst has entered the chat", time: "12:00" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [messages, setMessages] = useState(IM_MESSAGES);
  const [input, setInput] = useState("");
  const [guestbook, setGuestbook] = useState<GuestEntry[]>([]);
  const [gbName, setGbName] = useState("");
  const [gbMsg, setGbMsg] = useState("");
  const [sent, setSent] = useState(false);
  const msgEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("guestbook");
    if (stored) setGuestbook(JSON.parse(stored));
  }, []);

  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;
    setMessages((prev) => [...prev, { from: "You", text: input, time }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "RachelR_99", text: "thanks for reaching out! I'll get back to you soon ✨", time },
      ]);
    }, 1200);
  };

  const submitGuestbook = () => {
    if (!gbName.trim() || !gbMsg.trim()) return;
    const entry: GuestEntry = {
      name: gbName.trim(),
      message: gbMsg.trim(),
      time: new Date().toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" }),
    };
    const updated = [entry, ...guestbook];
    setGuestbook(updated);
    localStorage.setItem("guestbook", JSON.stringify(updated));
    setGbName("");
    setGbMsg("");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-vt323)] text-[#22d3ee] tracking-[0.3em] text-sm mb-2">
            &gt; CONTACT.exe
          </p>
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-4xl md:text-5xl text-white">
            Let&apos;s connect
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[#22d3ee] to-transparent mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* MSN-style IM window */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(192,132,252,0.3)", boxShadow: "0 0 40px rgba(192,132,252,0.1)" }}>
              {/* Window title bar */}
              <div
                className="px-4 py-2.5 flex items-center justify-between"
                style={{ background: "linear-gradient(90deg, #1e1b4b, #1e3a5f)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#22d3ee] shadow-[0_0_6px_#22d3ee]" />
                  <span className="font-[family-name:var(--font-vt323)] text-[#c084fc] tracking-wider text-sm">
                    MSN Messenger — RachelR_99
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#f9a8d4] opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24] opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-[#4ade80] opacity-60" />
                </div>
              </div>
              {/* Messages */}
              <div className="h-72 overflow-y-auto p-4 space-y-3" style={{ background: "rgba(5,5,8,0.95)" }}>
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-2 ${m.from === "You" ? "flex-row-reverse" : ""}`}>
                    {m.from !== "system" && (
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
                        style={{
                          background: m.from === "You" ? "rgba(34,211,238,0.2)" : "rgba(192,132,252,0.2)",
                          border: `1px solid ${m.from === "You" ? "#22d3ee44" : "#c084fc44"}`,
                        }}
                      >
                        {m.from === "You" ? "Y" : "R"}
                      </div>
                    )}
                    <div className={m.from === "system" ? "w-full text-center" : "max-w-[75%]"}>
                      {m.from !== "system" && (
                        <p
                          className="font-[family-name:var(--font-vt323)] text-xs tracking-wider mb-0.5"
                          style={{ color: m.from === "You" ? "#22d3ee" : "#c084fc" }}
                        >
                          {m.from} · {m.time}
                        </p>
                      )}
                      {m.from === "system" ? (
                        <p className="font-[family-name:var(--font-vt323)] text-[#374151] text-xs tracking-widest">
                          ── {m.text} ──
                        </p>
                      ) : (
                        <div
                          className="px-3 py-2 rounded-xl font-[family-name:var(--font-inter)] text-sm text-[#cbd5e1]"
                          style={{
                            background: m.from === "You" ? "rgba(34,211,238,0.1)" : "rgba(192,132,252,0.1)",
                            border: `1px solid ${m.from === "You" ? "#22d3ee22" : "#c084fc22"}`,
                          }}
                        >
                          {m.text}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={msgEndRef} />
              </div>
              {/* Input */}
              <div
                className="flex gap-2 p-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(5,5,8,0.98)" }}
              >
                <input
                  className="flex-1 px-3 py-2 rounded-lg text-sm font-[family-name:var(--font-inter)] text-[#cbd5e1] placeholder-[#374151] outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="px-4 py-2 rounded-lg text-sm font-[family-name:var(--font-space-grotesk)] font-medium text-white transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg, #c084fc, #93c5fd)" }}
                >
                  Send
                </button>
              </div>
            </div>

            {/* Direct contact links */}
            <div className="mt-5 flex gap-4 flex-wrap">
              <a
                href="mailto:ritikarana9999@gmail.com"
                className="glass glass-hover px-4 py-2 rounded-full text-sm font-[family-name:var(--font-space-grotesk)] text-[#c084fc] flex items-center gap-2"
              >
                📧 Email me
              </a>
              <a
                href="https://github.com/ritikarana9999"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover px-4 py-2 rounded-full text-sm font-[family-name:var(--font-space-grotesk)] text-[#93c5fd] flex items-center gap-2"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Guestbook */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-6 mb-4">
              <h3 className="font-[family-name:var(--font-vt323)] text-[#f9a8d4] tracking-widest mb-4 text-lg">
                📖 GUESTBOOK
              </h3>
              <div className="space-y-3 mb-5">
                <input
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-[family-name:var(--font-inter)] text-[#cbd5e1] placeholder-[#374151] outline-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  placeholder="Your name"
                  value={gbName}
                  onChange={(e) => setGbName(e.target.value)}
                />
                <textarea
                  className="w-full px-4 py-2.5 rounded-xl text-sm font-[family-name:var(--font-inter)] text-[#cbd5e1] placeholder-[#374151] outline-none resize-none"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  placeholder="Leave a message ✨"
                  rows={3}
                  value={gbMsg}
                  onChange={(e) => setGbMsg(e.target.value)}
                />
                <button
                  onClick={submitGuestbook}
                  className="w-full py-2.5 rounded-xl font-[family-name:var(--font-space-grotesk)] font-medium text-sm text-white transition-opacity hover:opacity-80"
                  style={{ background: "linear-gradient(135deg, #f9a8d4, #c084fc)" }}
                >
                  {sent ? "✓ Signed!" : "Sign Guestbook"}
                </button>
              </div>
            </div>

            {/* Guestbook entries */}
            <div className="space-y-3 max-h-64 overflow-y-auto">
              <AnimatePresence>
                {guestbook.map((entry, i) => (
                  <motion.div
                    key={i}
                    className="glass rounded-xl p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-[family-name:var(--font-space-grotesk)] font-semibold text-sm text-[#f9a8d4]">
                        {entry.name}
                      </span>
                      <span className="font-[family-name:var(--font-vt323)] text-[#374151] text-xs tracking-wider">
                        {entry.time}
                      </span>
                    </div>
                    <p className="font-[family-name:var(--font-inter)] text-[#94a3b8] text-sm">
                      {entry.message}
                    </p>
                  </motion.div>
                ))}
              </AnimatePresence>
              {guestbook.length === 0 && (
                <p className="font-[family-name:var(--font-vt323)] text-[#374151] text-sm tracking-wider text-center py-4">
                  Be the first to sign! ✦
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
