"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo Text */}
        <Link
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 group-hover:scale-125 transition-transform" />
          <span>VINO RIFHENDI</span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          
          <Link
            href="/cv"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Download CV</span>
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <Link
                href="/cv"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Unduh / Pratinjau CV</span>
              </Link>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900"
              >
                <span>Hubungi Vino</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

