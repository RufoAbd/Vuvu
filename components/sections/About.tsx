"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { aboutParagraphs, skills } from "@/lib/data";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "100px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="numbered-heading">About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 50,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Text column */}
          <div>
            {aboutParagraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  margin: "0 0 15px",
                  color: "var(--slate)",
                  fontSize: "var(--fz-lg)",
                  lineHeight: 1.7,
                }}
              >
                {p}
              </p>
            ))}

            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
                gap: "0 10px",
                padding: 0,
                margin: "20px 0 0",
                overflow: "hidden",
                listStyle: "none",
              }}
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  style={{
                    position: "relative",
                    paddingLeft: 20,
                    marginBottom: 10,
                    color: "var(--slate)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fz-xs)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--green)",
                      fontSize: "var(--fz-sm)",
                    }}
                  >
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo column */}
          <div
            style={{
              position: "relative",
              maxWidth: 300,
              marginTop: 0,
            }}
            className="photo-col"
          >
            <div className="photo-outer" style={{
              position: "relative",
              width: "100%",
              borderRadius: "var(--border-radius)",
              transition: "transform 400ms ease, box-shadow 400ms ease",
            }}>
              {/* Tinted image wrapper */}
              <div
                className="photo-tint"
                style={{
                  position: "relative",
                  borderRadius: "var(--border-radius)",
                  backgroundColor: "var(--green)",
                  width: "100%",
                  paddingBottom: "100%",
                  overflow: "hidden",
                  transition: "background-color 400ms ease",
                }}
              >
              {/* protected-image-wrap adds a transparent overlay above the
                  <img> so right-click/drag/long-press can't reach it directly */}
              <div className="protected-image-wrap">
                <img
                  src="/vusala.jpeg"
                  alt="Vusala Huseynova"
                  className="profile-img"
                  draggable={false}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    borderRadius: "var(--border-radius)",
                    filter: "grayscale(100%) contrast(1)",
                    transition: "filter 400ms ease, transform 400ms ease, mix-blend-mode 400ms ease",
                  }}
                />
              </div>
              </div>
              {/* Green border offset */}
              <div
                className="photo-border"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  borderRadius: "var(--border-radius)",
                  border: "2px solid var(--green)",
                  top: 14,
                  left: 14,
                  zIndex: -1,
                  transition: "top 400ms ease, left 400ms ease",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            display: block !important;
          }
          .photo-col {
            max-width: 220px !important;
            margin: 50px auto 0 !important;
          }
        }
        .photo-col:hover .photo-outer {
          transform: translate(-4px, -4px);
          box-shadow: 0 20px 40px -10px rgba(100, 255, 218, 0.15);
        }
        .photo-tint {
          background-color: var(--green);
        }
        .photo-col:hover .photo-tint {
          background-color: transparent !important;
        }
        .profile-img {
          mix-blend-mode: multiply;
        }
        .photo-col:hover .profile-img {
          filter: none !important;
          mix-blend-mode: normal !important;
          transform: scale(1.04);
        }
        .photo-col:hover .photo-border {
          top: 6px;
          left: 6px;
        }
      `}</style>
    </section>
  );
}
