"use client";
import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrollDir(y > lastScrollY ? "down" : "up");
      lastScrollY = y;
    };

    window.addEventListener("scroll", updateScrollDir, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return { scrollDir, scrollY };
}
