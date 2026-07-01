"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks, config } from "@/lib/data";

const Logo = () => (
  <a
    href="/"
    aria-label="home"
    className="logo-link"
    style={{ transition: "var(--transition)", display: "inline-block" }}
  >
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 100 115"
      style={{ width: 44, height: 44, fill: "none", display: "block" }}
    >
      <defs>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <title>V</title>
      {/* Hexagon shape */}
      <polygon
        points="50 4 96 29 96 86 50 111 4 86 4 29"
        stroke="#64ffda"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="logo-hex"
      />
      {/* VH text — perfectly centered */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'SF Mono', 'Fira Code', monospace"
        fontSize="45"
        fontWeight="600"
        fill="#64ffda"
        className="logo-text"
      >
        V
      </text>
    </svg>

    <style>{`
      .logo-link svg .logo-hex {
        transition: filter 0.3s ease, stroke 0.3s ease;
      }
      .logo-link svg .logo-text {
        transition: filter 0.3s ease;
      }
      .logo-link:hover svg .logo-hex {
        filter: url(#glow);
        stroke: #64ffda;
      }
      .logo-link:hover svg .logo-text {
        filter: url(#glow);
      }
    `}</style>
  </a>
);

export function Nav() {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDir, scrollY } = useScrollDirection();

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const scrolledDown = scrollY > 50;

  const handleNavClick = (url: string) => {
    setMenuOpen(false);
    const id = url.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
style={{
  position: "fixed",
  top: 0,
  zIndex: 11,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 clamp(16px, 5vw, 50px)",
  height: scrolledDown ? "70px" : "100px",
  backgroundColor: scrolledDown
    ? "rgba(10, 25, 47, 0.85)"
    : "transparent",
  backdropFilter: scrolledDown ? "blur(10px)" : "none",
  WebkitBackdropFilter: scrolledDown ? "blur(10px)" : "none",
  boxShadow: scrolledDown
    ? "0 10px 30px -10px rgba(2,12,27,0.7)"
    : "none",
  transition: "var(--transition)",
  transform: "translateY(0)",
}}
    >
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Logo />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Nav */}
      <nav
        style={{ alignItems: "center", gap: 5 }}
        className="hidden lg:flex"
      >
        <ol
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: 5,
          }}
        >
          {navLinks.map(({ name, url }, i) =>
            isMounted ? (
              <motion.li
                key={name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
              >
                <a
                  href={url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(url);
                  }}
                  style={{
                    padding: "10px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fz-xs)",
                    color: "var(--lightest-slate)",
                    transition: "var(--transition)",
                  }}
                  className="hover:text-green"
                >
                  <span
                    style={{
                      color: "var(--green)",
                      marginRight: 5,
                      fontSize: "var(--fz-xxs)",
                    }}
                  >
                    0{i + 1}.
                  </span>
                  {name}
                </a>
              </motion.li>
            ) : null
          )}
        </ol>

        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            style={{ marginLeft: 15 }}
          >
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Resume
            </a>
          </motion.div>
        )}
      </nav>

      {/* Mobile hamburger */}
      <div className="lg:hidden" style={{ position: "relative", zIndex: 10 }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: 30,
            height: 24,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            gap: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: i === 1 ? (menuOpen ? 30 : 20) : 30,
                height: 2,
                marginLeft: i === 1 ? (menuOpen ? 0 : "auto") : 0,
                backgroundColor: "var(--green)",
                borderRadius: 2,
                transformOrigin: "center",
                transition: "var(--transition)",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 7px)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -7px)"
                      : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: [0.645, 0.045, 0.355, 1] }}
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              right: 0,
              width: "min(75vw, 400px)",
              height: "100vh",
              zIndex: 9,
              outline: 0,
              backgroundColor: "var(--light-navy)",
              boxShadow: "-10px 0 30px -15px var(--navy-shadow)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <nav>
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0,
                }}
              >
                {navLinks.map(({ name, url }, i) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 * i }}
                    style={{ margin: "0 auto 20px" }}
                  >
                    <a
                      href={url}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(url);
                      }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "3px 20px 20px",
                        fontFamily: "var(--font-mono)",
                        textAlign: "center",
                        textDecoration: "none",
                        color: "var(--lightest-slate)",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          marginBottom: 5,
                          color: "var(--green)",
                          fontSize: "var(--fz-sm)",
                        }}
                      >
                        0{i + 1}.
                      </span>
                      <span
                        style={{
                          fontSize: "clamp(var(--fz-sm), 4vw, var(--fz-md))",
                        }}
                      >
                        {name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ol>
              <a
                href={config.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ padding: "18px 50px", marginTop: 20 }}
              >
                Resume
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 8,
              backgroundColor: "rgba(10, 25, 47, 0.7)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
