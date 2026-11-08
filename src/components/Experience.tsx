import React from "react";
import { experiences } from "@/data/experience";
import SectionHeading from "./SectionHeading";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Trophy, 
  Terminal, 
  Server 
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Rekam Jejak"
          title="Pengalaman Kerja Profesional"
          description="Dedikasi langsung dalam menjaga stabilitas infrastruktur IT, kepatuhan SLA ticketing, dan manajemen aset di site industri."
        />

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs"
            >
              {/* Header Box: Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      {exp.company}
                    </span>
                    <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
                    <span className="text-xs text-slate-500 font-mono">
                      {exp.division}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0 space-y-1">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="mt-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities & Achievements Grid */}
              <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Responsibilities (Cols 1-7) */}
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                    <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Tanggung Jawab Utama (Scope of Work)
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements & Tech (Cols 8-12) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Achievements */}
                  <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Environment Badges */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-slate-500" />
                      Tech Environment
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techEnvironment.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

