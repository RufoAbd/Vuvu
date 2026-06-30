"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { config } from "@/lib/data";

const socials = [
  { icon: Github, label: "GitHub", href: config.github },
  { icon: Linkedin, label: "LinkedIn", href: config.linkedin },
];

export function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 1.0 }}
      style={{
        width: "40px",
        position: "fixed",
        bottom: 0,
        left: "40px",
        right: "auto",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
      className="hidden lg:flex"
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {socials.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                color: "var(--light-slate)",
                transition: "var(--transition)",
              }}
              className="hover:text-green hover:-translate-y-1 transition-transform duration-200 block"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          </li>
        ))}
      </ul>
      {/* Vertical line */}
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
