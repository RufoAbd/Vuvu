"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Folder, ArrowUpRight } from "lucide-react";
import { featuredProjects, otherProjects } from "@/lib/data";

function FeaturedProject({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        alignItems: "center",
        gap: "10px",
        marginBottom: 100,
      }}
    >
      {/* Image / visual */}
      <div
        style={{
          gridColumn: isEven ? "1 / 8" : "6 / -1",
          gridRow: "1 / -1",
          height: "100%",
          minHeight: 250,
          position: "relative",
          borderRadius: "var(--border-radius)",
          overflow: "hidden",
          backgroundColor: "var(--navy-light)",
        }}
        className="featured-img"
      >
        {/* Data visualization placeholder */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.5,
          }}
        >
          <svg viewBox="0 0 400 250" style={{ width: "90%", height: "auto" }}>
            {/* Fake chart bars */}
            {[40, 70, 55, 90, 65, 80, 45, 95, 60, 75].map((h, i) => (
              <rect
                key={i}
                x={15 + i * 38}
                y={250 - h * 2.2}
                width={26}
                height={h * 2.2}
                fill="var(--green)"
                opacity={0.15 + i * 0.05}
                rx={3}
              />
            ))}
            <line
              x1={0}
              y1={250}
              x2={400}
              y2={250}
              stroke="var(--lightest-navy)"
              strokeWidth={1}
            />
          </svg>
        </div>
        {/* Green tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "var(--navy)",
            opacity: 0.7,
            transition: "var(--transition)",
          }}
          className="featured-overlay"
        />
      </div>

      {/* Content */}
      <div
        style={{
          gridColumn: isEven ? "7 / -1" : "1 / 7",
          gridRow: "1 / -1",
          position: "relative",
          textAlign: isEven ? "right" : "left",
          zIndex: 2,
          padding: "10px 0",
        }}
        className="featured-content"
      >
        <p
          style={{
            margin: "10px 0",
            color: "var(--green)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fz-xs)",
            fontWeight: 400,
          }}
        >
          Featured Project
        </p>

        <h3
          style={{
            margin: "0 0 20px",
            color: "var(--lightest-slate)",
            fontSize: "clamp(24px, 5vw, 28px)",
            lineHeight: 1.1,
          }}
        >
          <a
            href={project.external || project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            className="hover:text-green"
          >
            {project.title}
          </a>
        </h3>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "25px",
            borderRadius: "var(--border-radius)",
            backgroundColor: "var(--light-navy)",
            color: "var(--light-slate)",
            fontSize: "var(--fz-lg)",
            lineHeight: 1.6,
            boxShadow: "0 10px 30px -15px var(--navy-shadow)",
          }}
        >
          <p style={{ margin: 0 }}>{project.description}</p>
        </div>

        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            position: "relative",
            zIndex: 2,
            margin: "25px 0 10px",
            padding: 0,
            listStyle: "none",
            justifyContent: isEven ? "flex-end" : "flex-start",
          }}
        >
          {project.tech.map((t) => (
            <li
              key={t}
              style={{
                margin: "0 0 5px 20px",
                color: "var(--light-slate)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fz-xs)",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginTop: 10,
            marginLeft: isEven ? 0 : -10,
            color: "var(--lightest-slate)",
            justifyContent: isEven ? "flex-end" : "flex-start",
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub link"
              style={{
                padding: 10,
                color: "var(--light-slate)",
                transition: "var(--transition)",
              }}
              className="hover:text-green"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="External link"
              style={{
                padding: 10,
                color: "var(--light-slate)",
                transition: "var(--transition)",
              }}
              className="hover:text-green"
            >
              <ExternalLink size={20} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .featured-img:hover .featured-overlay {
          opacity: 0;
        }
        @media (max-width: 768px) {
          .featured-img {
            grid-column: 1 / -1 !important;
            grid-row: 1 / 2 !important;
            opacity: 0.25;
          }
          .featured-content {
            grid-column: 1 / -1 !important;
            grid-row: 1 / 2 !important;
            text-align: left !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

function OtherProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [showMore, setShowMore] = useState(false);

  const GRID_LIMIT = 6;
  const firstSix = otherProjects.slice(0, GRID_LIMIT);
  const hasMore = otherProjects.length > GRID_LIMIT;

  return (
    <div
      ref={ref}
      style={{ marginTop: 100, textAlign: "center" }}
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        style={{
          color: "var(--slate)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--fz-lg)",
          marginBottom: 50,
        }}
      >
        Other Noteworthy Projects
      </motion.p>

      <div
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 15,
          position: "relative",
        }}
      >
        {firstSix.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <a
              href={project.external || project.github || "#"}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                position: "relative",
                height: "100%",
                padding: "2rem 1.75rem",
                borderRadius: "var(--border-radius)",
                backgroundColor: "var(--light-navy)",
                color: "inherit",
                transition: "var(--transition)",
                textDecoration: "none",
                boxShadow: "0 10px 30px -15px var(--navy-shadow)",
              }}
              className="project-card group"
            >
              <header>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 30,
                  }}
                >
                  <div
                    style={{
                      color: "var(--green)",
                      transition: "var(--transition)",
                    }}
                  >
                    <Folder size={40} strokeWidth={1} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      color: "var(--light-slate)",
                    }}
                  >
                    {project.github && (
                      <span
                        aria-label="GitHub link"
                        style={{ transition: "var(--transition)" }}
                        className="hover:text-green"
                      >
                        <Github size={20} strokeWidth={1.5} />
                      </span>
                    )}
                    {project.external && (
                      <span
                        aria-label="External link"
                        style={{ transition: "var(--transition)" }}
                        className="hover:text-green"
                      >
                        <ExternalLink size={20} strokeWidth={1.5} />
                      </span>
                    )}
                  </div>
                </div>

                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "var(--lightest-slate)",
                    fontSize: "var(--fz-xxl)",
                    lineHeight: 1.3,
                    transition: "var(--transition)",
                  }}
                  className="group-hover:text-green"
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--light-slate)",
                    fontSize: "var(--fz-sm)",
                    lineHeight: 1.7,
                  }}
                >
                  {project.description}
                </p>
              </header>

              <footer style={{ marginTop: 20 }}>
                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0 15px",
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                  }}
                >
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--fz-xxs)",
                        color: "var(--light-slate)",
                        lineHeight: 1.75,
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </footer>
            </a>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

// need useState for OtherProjects
import { useState } from "react";

export function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: "100px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      </motion.div>

      <div>
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.title} project={project} index={i} />
        ))}
      </div>

      <OtherProjects />
    </section>
  );
}
