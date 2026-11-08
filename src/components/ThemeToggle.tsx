"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === "light" ? "Beralih ke Mode Gelap" : "Beralih ke Mode Terang"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform duration-200 hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}

