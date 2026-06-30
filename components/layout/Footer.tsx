"use client";

import { Github, Linkedin } from "lucide-react";
import { config } from "@/lib/data";

export function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "auto",
        minHeight: "70px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      {/* Mobile social icons */}
      <ul
        className="flex lg:hidden"
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 10px",
          justifyContent: "center",
          gap: 20,
        }}
      >
        {[
          { icon: Github, label: "GitHub", href: config.github },
          { icon: Linkedin, label: "LinkedIn", href: config.linkedin },
        ].map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: "var(--light-slate)", display: "block", padding: 10 }}
              className="hover:text-green"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          </li>
        ))}
      </ul>

      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-xxs)",
          lineHeight: 1,
        }}
      >
        <a
          href={config.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green"
          style={{ color: "var(--light-slate)", transition: "var(--transition)" }}
        >
          <div style={{ marginBottom: 2 }}>Designed &amp; Built by</div>
          <div style={{ color: "var(--green)" }}>Vusala Huseynova</div>
        </a>
      </div>
    </footer>
  );
}
