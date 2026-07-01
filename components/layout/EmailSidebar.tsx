"use client";

import { motion } from "framer-motion";
import { config } from "@/lib/data";

export function EmailSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.2 }}
      style={{
        width: "40px",
        position: "fixed",
        bottom: 0,
        left: "auto",
        right: "40px",
        zIndex: 10,
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
      className="hidden lg:flex"
    >
      <a
        href={`mailto:${config.email}`}
        style={{
          margin: "20px auto",
          padding: "10px",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-xxs)",
          letterSpacing: "0.1em",
          writingMode: "vertical-rl",
          color: "var(--light-slate)",
          transition: "var(--transition)",
        }}
        className="hover:text-green hover:-translate-y-1 transition-all duration-200"
      >
        {config.email}
      </a>
      <div
        style={{
          width: 1,
          height: 90,
          margin: "0 auto",
          backgroundColor: "var(--light-slate)",
        }}
      />
    </motion.div>
  );
}
