"use client";

import React, { useEffect } from "react";
import { Project } from "@/types/portfolio";
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import ProjectMockup from "./ProjectMockup";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.date}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup Detail Proyek"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Mockup Preview */}
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xs">
            <ProjectMockup type={project.mockupType} title={project.title} />
          </div>

          {/* Title & Status */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-medium ${
                project.status === "Live" || project.status === "Production"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
                  : project.status === "Completed"
                  ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800"
                  : "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800"
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-xs tracking-wider uppercase mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Fitur Utama & Spesifikasi Teknis
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-500" />
              Teknologi & Lingkungan Eksekusi
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/70 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono">
            Detail View · {project.slug}
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
