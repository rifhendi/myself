import React from "react";
import { educationData } from "@/data/education";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Fondasi Akademis"
          title="Pendidikan Formal"
          description="Latar belakang pendidikan strata satu (S1) yang membentuk daya nalar komputasi, metodologi rekayasa sistem, dan etika profesional teknologi informasi."
        />

        <div className="max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 shadow-2xs">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {educationData.degree}
                  </h3>
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800">
                    {educationData.status}
                  </span>
                </div>
                <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                  {educationData.institution}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-0.5">
                  {educationData.faculty}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0 space-y-1">
              <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center gap-1.5 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{educationData.location}</span>
              </div>
            </div>
          </div>

          <div className="py-6 space-y-4">
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {educationData.description}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Sorotan Akademis & Pembelajaran Inti
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

