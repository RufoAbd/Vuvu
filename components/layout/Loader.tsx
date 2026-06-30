"use client";

import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"start" | "text" | "exit">("start");

  useEffect(() => {
    // line expands immediately on mount
    const t1 = setTimeout(() => setPhase("text"), 700);   // text fades in
    const t2 = setTimeout(() => setPhase("exit"), 2100);  // whole loader fades out
    const t3 = setTimeout(() => onComplete(), 2700);       // unmount
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const textVisible = phase === "text" || phase === "exit";

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      backgroundColor: "#0a192f",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: phase === "exit" ? 0 : 1,
      transition: "opacity 600ms cubic-bezier(0.645,0.045,0.355,1)",
      pointerEvents: phase === "exit" ? "none" : "all",
    }}>

      {/* Top dot */}
      <div style={{
        width: 5, height: 5,
        borderRadius: "50%",
        backgroundColor: "#64ffda",
        marginBottom: 28,
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? "translateY(0)" : "translateY(-10px)",
        transition: "opacity 500ms ease 150ms, transform 500ms ease 150ms",
      }} />

      {/* Name */}
      <div style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "clamp(22px, 5vw, 38px)",
        fontWeight: 700,
        color: "#ccd6f6",
        letterSpacing: "0.03em",
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? "translateY(0)" : "translateY(12px)",
        filter: textVisible ? "blur(0px)" : "blur(8px)",
        transition: "opacity 600ms ease, transform 600ms ease, filter 600ms ease",
        whiteSpace: "nowrap",
        marginBottom: 18,
      }}>
        Vusala Huseynova
      </div>

      {/* Expanding line — center-out via scaleX on a wrapper */}
      <div style={{
        width: 320,
        maxWidth: "60vw",
        height: 1,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <div style={{
          width: "100%",
          height: 1,
          backgroundColor: "#64ffda",
          transformOrigin: "center",
          transform: phase === "start" ? "scaleX(0)" : "scaleX(1)",
          transition: "transform 700ms cubic-bezier(0.645,0.045,0.355,1)",
        }} />
      </div>

      {/* Role */}
      <div style={{
        fontFamily: "'SF Mono', 'Fira Code', monospace",
        fontSize: "clamp(10px, 2vw, 13px)",
        fontWeight: 400,
        color: "#64ffda",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        marginTop: 18,
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? "translateY(0)" : "translateY(-12px)",
        filter: textVisible ? "blur(0px)" : "blur(8px)",
        transition: "opacity 600ms ease 120ms, transform 600ms ease 120ms, filter 600ms ease 120ms",
        whiteSpace: "nowrap",
      }}>
        Data Analyst
      </div>

      {/* Bottom dot */}
      <div style={{
        width: 5, height: 5,
        borderRadius: "50%",
        backgroundColor: "#64ffda",
        marginTop: 28,
        opacity: textVisible ? 1 : 0,
        transform: textVisible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 500ms ease 150ms, transform 500ms ease 150ms",
      }} />

      {/* Corner brackets */}
      {([
        { top: 36, left: 36, borderTop: "1px solid rgba(100,255,218,0.25)", borderLeft: "1px solid rgba(100,255,218,0.25)" },
        { top: 36, right: 36, borderTop: "1px solid rgba(100,255,218,0.25)", borderRight: "1px solid rgba(100,255,218,0.25)" },
        { bottom: 36, left: 36, borderBottom: "1px solid rgba(100,255,218,0.25)", borderLeft: "1px solid rgba(100,255,218,0.25)" },
        { bottom: 36, right: 36, borderBottom: "1px solid rgba(100,255,218,0.25)", borderRight: "1px solid rgba(100,255,218,0.25)" },
      ] as React.CSSProperties[]).map((style, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 22,
          height: 22,
          ...style,
          opacity: textVisible ? 1 : 0,
          transition: `opacity 700ms ease ${200 + i * 80}ms`,
        }} />
      ))}
    </div>
  );
}
