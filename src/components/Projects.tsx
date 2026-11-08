"use client";

import React, { useState } from "react";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

const categories: ProjectCategory[] = [
  "All",
  "IT Support & Infrastructure",
  "Software Development"
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeading
            badge="GitHub Repositories"
            title="Sistem & Proyek Pilihan"
            description="Koleksi sistem enterprise dan proyek rekayasa perangkat lunak nyata dari repositori GitHub @rifhendi: dari manajemen aset BAST, sistem absensi EOS SIG Site Rembang, industrial CMMS AI, hingga smart GPS tracking SaaS."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200/80 dark:border-slate-800 self-start md:self-auto">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Modal for detailed view */}
        <ProjectModal
          project={activeModalProject}
          isOpen={!!activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}

