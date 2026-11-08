"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { 
  ArrowDown, 
  FileText, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  Server 
} from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Main Hero Text (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Available Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                {personalInfo.status.text}
              </span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {personalInfo.fullName}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 font-mono">
                IT Support L1 <span className="text-slate-400 dark:text-slate-600">/</span> Software Developer <span className="text-slate-400 dark:text-slate-600">/</span> Cybersecurity Enthusiast
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Quick Meta Pills */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-slate-400" />
                <span>Kirana Team / SIG Site Rembang</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>S1 Teknik Informatika</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xs"
              >
                <span>Lihat Proyek</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all shadow-xs"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg border border-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Direct"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Profile Card & Technical Highlights (Cols 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              {/* Profile Avatar / Monogram Header */}
              <div className="flex items-center gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80">
                <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-600 dark:to-slate-900 flex items-center justify-center text-white font-mono text-xl font-bold shadow-md ring-2 ring-blue-500/20">
                  VR
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Vino Rifhendi Setiawan
                  </h2>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                    Telkom University Purwokerto
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/50 dark:border-blue-900/50">
                    S1 Teknik Informatika
                  </span>
                </div>
              </div>

              {/* Technical Core Metrics */}
              <div className="py-5 space-y-3">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-blue-500" /> Current Role
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    IT Support L1 (Kirana / SIG)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-blue-500" /> Web Development
                  </span>
                  <span className="font-mono text-slate-900 dark:text-slate-200">
                    Next.js, TypeScript, React
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-50 dark:border-slate-800/50">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Focus Area
                  </span>
                  <span className="text-slate-900 dark:text-slate-200">
                    Infrastructure & Security
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> SLA Standard
                  </span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    Strict SLA Compliance
                  </span>
                </div>
              </div>

              {/* Terminal Quick Box */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300">
                <div className="flex items-center justify-between text-slate-500 pb-1.5 border-b border-slate-800 text-[10px]">
                  <span>bash · vino@portfolio:~$</span>
                  <span className="text-emerald-400 font-sans">READY</span>
                </div>
                <div className="pt-2 text-slate-400 space-y-1">
                  <div><span className="text-blue-400">user:</span> vinorifhendi</div>
                  <div><span className="text-blue-400">target:</span> enterprise_operations</div>
                  <div className="text-emerald-400">✓ Systems operational and monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
