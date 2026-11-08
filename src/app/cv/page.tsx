"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { educationData } from "@/data/education";
import { GithubIcon } from "@/components/Icons";
import { 
  ArrowLeft, 
  Printer, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Download 
} from "lucide-react";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-8 sm:py-12 print:bg-white print:py-0">
      {/* Top Floating Control Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6 print:hidden">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Website Utama</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / Simpan PDF (A4)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Printable Resume Document (Styled like an executive modern CV) */}
      <main className="max-w-4xl mx-auto bg-white text-slate-900 shadow-lg print:shadow-none p-8 sm:p-12 print:p-8 rounded-xl print:rounded-none border border-slate-200 print:border-none font-sans text-xs sm:text-sm leading-relaxed">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                {personalInfo.fullName}
              </h1>
              <p className="text-sm font-semibold text-blue-700 mt-1 font-mono">
                IT Support L1 · Software Developer · Cybersecurity Enthusiast
              </p>
            </div>
            <div className="text-xs text-slate-600 font-mono space-y-1 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>github.com/rifhendi</span>
              </div>
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
            Ringkasan Profesional
          </h2>
          <p className="text-slate-700 leading-normal text-xs sm:text-sm">
            {personalInfo.bio}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 border-b border-slate-200 pb-1 mb-3">
            Pengalaman Kerja
          </h2>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline mb-1">
                  <div>
                    <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                    <span className="text-slate-600"> — {exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                </div>
                <div className="text-xs text-slate-500 mb-2 italic">
                  {exp.division} · {exp.location}
                </div>

                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-700 text-xs sm:text-xs">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>

                <div className="mt-2 text-xs font-mono text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="font-bold text-slate-800">Tech: </span>
                  {exp.techEnvironment.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 border-b border-slate-200 pb-1 mb-3">
            Pendidikan
          </h2>

          <div className="flex justify-between items-baseline mb-1">
            <div>
              <span className="font-bold text-slate-900 text-sm">{educationData.degree}</span>
              <div className="text-slate-700 font-medium">{educationData.institution}</div>
            </div>
            <span className="text-xs font-mono text-slate-500">{educationData.period}</span>
          </div>
          <div className="text-xs text-slate-500 mb-2">
            {educationData.faculty} · {educationData.location}
          </div>
          <p className="text-xs text-slate-700">
            {educationData.description}
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 border-b border-slate-200 pb-1 mb-3">
            Keahlian Teknis
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="p-2.5 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 font-mono mb-1">{cat.title}:</div>
                <div className="text-slate-700">
                  {cat.skills.map((s) => s.name).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Featured Projects */}
        <section>
          <h2 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-900 border-b border-slate-200 pb-1 mb-3">
            Proyek Sistem Pilihan
          </h2>

          <div className="space-y-3">
            {projectsData.slice(0, 3).map((p) => (
              <div key={p.id} className="text-xs">
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <span>{p.title}</span>
                  <span className="font-mono text-slate-500">{p.date}</span>
                </div>
                <p className="text-slate-600 mt-0.5">{p.shortDescription}</p>
                <div className="font-mono text-[11px] text-blue-700 mt-0.5">
                  Stack: {p.techStack.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
