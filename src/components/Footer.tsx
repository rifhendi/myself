"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { ArrowUp, Mail, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          {/* Identity & Status */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
              <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
              IT Support L1 · Software Developer · Cybersecurity Enthusiast · S1 Teknik Informatika (Telkom University Purwokerto)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send direct email"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Kembali ke atas"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tech */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 dark:text-slate-500">
          <div>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>Built with Next.js App Router, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
