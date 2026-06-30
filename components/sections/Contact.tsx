"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { config } from "@/lib/data";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "100px 0",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p
          style={{
            margin: "0 0 20px",
            color: "var(--green)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fz-md)",
            fontWeight: 400,
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: 16,
              counterIncrement: "section",
            }}
          >
            04. What&apos;s Next?
          </span>
        </p>

        <h2
          className="medium-heading"
          style={{ marginBottom: 30 }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            margin: "0 0 50px",
            color: "var(--slate)",
            fontSize: "var(--fz-xl)",
            lineHeight: 1.7,
          }}
        >
          I&apos;m currently open to new opportunities where I can leverage data
          to drive business impact. Whether you have a question, a project in
          mind, or just want to connect — my inbox is always open.
        </p>

        <a
          href={`mailto:${config.email}`}
          className="btn"
          style={{
            padding: "1.25rem 1.75rem",
            fontSize: "clamp(var(--fz-sm), 3.5vw, var(--fz-md))",
          }}
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
