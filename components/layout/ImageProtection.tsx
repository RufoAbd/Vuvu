"use client";

import { useEffect } from "react";

/**
 * Best-effort protection against casual image saving / copying.
 *
 * IMPORTANT (be honest with the client about this in chat, not here):
 * No client-side technique can make an image 100% impossible to capture
 * (screenshots, browser dev tools, OS-level screen recording, printing,
 * or simply photographing the screen all bypass this). What this DOES do
 * is remove every *easy* path: right-click "Save image as", drag-and-drop
 * to desktop, long-press "Save" on mobile, Ctrl+S page save, and opening
 * dev tools / view-source via the obvious shortcuts.
 */
export function ImageProtection() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const preventDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Block the most common "save / inspect" keyboard shortcuts.
    const preventKeyShortcuts = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // F12 -> DevTools
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + S -> Save page
      if ((e.ctrlKey || e.metaKey) && key === "s") {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + U -> View source
      if ((e.ctrlKey || e.metaKey) && key === "u") {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + Shift + I/J/C -> DevTools panels
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(key)) {
        e.preventDefault();
        return false;
      }
    };

    // Prevent the native "long-press to save" image menu on touch devices
    // by treating a sustained touch on an <img> the same as a blocked
    // context menu (iOS Safari triggers contextmenu on long-press too,
    // but this is an extra safety net).
    const preventTouchSave = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDragStart);
    document.addEventListener("keydown", preventKeyShortcuts);
    document.addEventListener("touchstart", preventTouchSave, { passive: false });

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDragStart);
      document.removeEventListener("keydown", preventKeyShortcuts);
      document.removeEventListener("touchstart", preventTouchSave);
    };
  }, []);

  return null;
}
