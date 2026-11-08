import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium tracking-wide uppercase bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 mb-3 ${isCenter ? "mx-auto" : ""}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

