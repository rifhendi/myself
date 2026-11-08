"use client";

import React from "react";
import { Project } from "@/types/portfolio";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import ProjectMockup from "./ProjectMockup";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="group rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col overflow-hidden">
      {/* Visual Mockup Header */}
      <div 
        onClick={() => onSelect(project)}
        className="cursor-pointer relative overflow-hidden"
      >
        <ProjectMockup type={project.mockupType} title={project.title} />
        {/* Subtle overlay hint */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3 py-1 rounded bg-slate-900/90 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5 shadow-md">
            Lihat Spesifikasi & Detail <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Status Row */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
              {project.category}
            </span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
              project.status === "Live" || project.status === "Production"
                ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/60"
                : project.status === "Completed"
                ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60"
                : "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60"
            }`}>
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(project)}
            className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Badges & Actions */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Detail Proyek</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repo untuk ${project.title}`}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo untuk ${project.title}`}
                  className="p-1.5 rounded-md text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
