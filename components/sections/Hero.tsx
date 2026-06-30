"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { config } from "@/lib/data";

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.1 + i * 0.1 },
  }),
};

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!isMounted) return null;

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: "0",
        maxWidth: 1000,
      }}
    >
      <motion.h1
        custom={0}
        variants={itemVariant}
        initial="hidden"
        animate="visible"
        style={{
          margin: "0 0 20px 4px",
          color: "var(--green)",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(var(--fz-sm), 5vw, var(--fz-md))",
          fontWeight: 400,
        }}
      >
        Hi, my name is
      </motion.h1>

      <motion.h2
        custom={1}
        variants={itemVariant}
        initial="hidden"
        animate="visible"
        className="big-heading"
      >
        {config.name}.
      </motion.h2>

      <motion.h3
        custom={2}
        variants={itemVariant}
        initial="hidden"
        animate="visible"
        className="big-heading"
        style={{ color: "var(--slate)" }}
      >
        I turn data into decisions.
      </motion.h3>

      <motion.p
        custom={3}
        variants={itemVariant}
        initial="hidden"
        animate="visible"
        style={{
          margin: "20px 0 0",
          maxWidth: 540,
          color: "var(--slate)",
          fontSize: "var(--fz-xl)",
          lineHeight: 1.6,
        }}
      >
        I&apos;m a{" "}
        <strong style={{ color: "var(--lightest-slate)" }}>
          Data Analyst
        </strong>{" "}
        specializing in transforming raw data into actionable insights through{" "}
        <span className="inline-link">Excel</span>,{" "}
        <span className="inline-link">SQL</span>,{" "}
        <span className="inline-link">Python</span>, and{" "}
        <a
          href="https://powerbi.microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          Power BI
        </a>
        . Currently driving data-backed decisions at{" "}
        <a
          href="https://www.azerimed.az"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          AzeriMed&nbsp;QSC
        </a>
        .
      </motion.p>

      <motion.div
        custom={4}
        variants={itemVariant}
        initial="hidden"
        animate="visible"
        style={{ marginTop: 50 }}
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="btn"
          style={{ fontSize: "clamp(13px, 3.5vw, 14px)", padding: "1.25rem 1.75rem" }}
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
}
