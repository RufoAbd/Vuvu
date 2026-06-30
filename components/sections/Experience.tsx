"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const TAB_WIDTH = 200;
  const TAB_HEIGHT = "auto";

  return (
    <section
      id="experience"
      ref={ref}
      style={{ maxWidth: 700, margin: "0 auto", padding: "100px 0" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>

        <div
          className="exp-wrapper"
          style={{
            display: "flex",
            alignItems: "flex-start",
            minHeight: 340,
          }}
        >
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Job tabs"
            className="exp-tablist"
            style={{
              position: "relative",
              zIndex: 3,
              width: "max-content",
              padding: 0,
              margin: 0,
              listStyle: "none",
            }}
          >
            {experience.map(({ company }, i) => (
              <button
                key={company}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                id={`tab-${i}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                style={{
                  textDecoration: "none",
                  textDecorationSkipInk: "auto",
                  position: "relative",
                  transition: "var(--transition)",
                  display: "flex",
                  alignItems: "center",
                  width: TAB_WIDTH,
                  height: TAB_HEIGHT,
                  minHeight: 42,
                  padding: "10px 20px",
                  borderLeft: `2px solid ${activeTab === i ? "var(--green)" : "var(--lightest-navy)"}`,
                  background: "transparent",
                  color: activeTab === i ? "var(--green)" : "var(--slate)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fz-xs)",
                  textAlign: "left",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  lineHeight: 1.4,
                  cursor: "pointer",
                  backgroundColor:
                    activeTab === i ? "var(--green-tint)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--green-tint)";
                  (e.currentTarget as HTMLElement).style.color = "var(--green)";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== i) {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--slate)";
                  }
                }}
              >
                {company}
              </button>
            ))}
          </div>

          {/* Tab panels */}
          <div
            className="exp-panels"
            style={{
              position: "relative",
              width: "100%",
              marginLeft: 20,
            }}
          >
            <AnimatePresence mode="wait">
              {experience.map(
                ({ company, url, title, range, duties }, i) =>
                  activeTab === i && (
                    <motion.div
                      key={company}
                      id={`panel-${i}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${i}`}
                      tabIndex={0}
                      initial={{ opacity: 0, x: 5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.2 }}
                      style={{ width: "100%" }}
                    >
                      <h3
                        style={{
                          marginBottom: 2,
                          fontSize: "var(--fz-xxl)",
                          fontWeight: 500,
                          color: "var(--lightest-slate)",
                          lineHeight: 1.3,
                        }}
                      >
                        <span>{title}</span>
                        <span style={{ color: "var(--green)" }}>
                          &nbsp;@&nbsp;
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-link"
                            style={{ fontWeight: 500 }}
                          >
                            {company}
                          </a>
                        </span>
                      </h3>

                      <p
                        style={{
                          marginBottom: 25,
                          color: "var(--light-slate)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "var(--fz-xs)",
                        }}
                      >
                        {range}
                      </p>

                      <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
                        {duties.map((duty, j) => (
                          <li
                            key={j}
                            style={{
                              position: "relative",
                              paddingLeft: 30,
                              marginBottom: 10,
                              color: "var(--slate)",
                              fontSize: "var(--fz-lg)",
                              lineHeight: 1.6,
                            }}
                          >
                            <span
                              style={{
                                position: "absolute",
                                left: 0,
                                color: "var(--green)",
                              }}
                            >
                              ▹
                            </span>
                            {duty}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 600px) {
          .exp-wrapper {
            flex-direction: column;
          }
          .exp-tablist {
            display: flex;
            flex-direction: row;
            width: 100% !important;
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            border-bottom: 1px solid var(--lightest-navy);
          }
          .exp-tablist::-webkit-scrollbar {
            display: none;
          }
          .exp-tablist :global(button) {
            width: auto !important;
            flex: 0 0 auto;
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
            white-space: nowrap !important;
          }
          .exp-tablist :global(button[aria-selected="true"]) {
            border-bottom: 2px solid var(--green) !important;
          }
          .exp-panels {
            margin-left: 0 !important;
            margin-top: 25px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
