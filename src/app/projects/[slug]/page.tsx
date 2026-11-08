import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { personalInfo } from "@/data/portfolio";
import { GithubIcon } from "@/components/Icons";
import ProjectMockup from "@/components/ProjectMockup";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Calendar 
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${personalInfo.name}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | ${personalInfo.fullName}`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Portfolio Utama</span>
          </Link>
        </div>

        {/* Project Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Header Bar */}
          <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/60">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.date}
              </span>
              <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-medium ml-auto ${
                project.status === "Live" || project.status === "Production"
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800"
                  : project.status === "Completed"
                  ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800"
                  : "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800"
              }`}>
                {project.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Visual Mockup Preview */}
          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800">
            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
              <ProjectMockup type={project.mockupType} title={project.title} />
            </div>
          </div>

          {/* Deep Breakdown Body */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-xs tracking-wider uppercase mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Latar Belakang Permasalahan</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Solusi Teknis yang Diterapkan</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Spesifikasi & Fitur Utama Sistem
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-500" />
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
