import React from "react";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import { 
  HardDrive, 
  Network, 
  Code, 
  ShieldCheck, 
  Wrench, 
  Check 
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  HardDrive,
  Network,
  Code,
  ShieldCheck,
  Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Kompetensi Teknis"
          title="Keahlian & Perangkat Lunak"
          description="Kompilasi kapabilitas teknis yang terverifikasi melalui pengalaman operasional, proyek rekayasa software, dan laboratorium siber."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Code;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges List */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-slate-50 dark:bg-slate-800/70 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-colors"
                      >
                        <Check className="w-3 h-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shrink-0" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  <span>{cat.skills.length} spesifikasi terdaftar</span>
                  <span className="text-emerald-500">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

