import { ExternalLink, CheckCircle2, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="text-xs font-mono text-[#4cd7f6] tracking-wider mb-2">
              // BUILT & DEPLOYED
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Featured Engineering Projects
            </h2>
          </div>
          {/* <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md leading-relaxed">
            Production systems, AI advisory pipelines, and cross-platform mobile services tested with real-world workloads.
          </p> */}
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-10">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#171f33]/85 hover:bg-[#1a233a] backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-300 shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Project Specs (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Category Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#222a3d] text-[#c0c1ff] border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#4cd7f6] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet Highlights with Blue/Cyan Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {project.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#dae2fd] leading-snug">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills & Architecture CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#222a3d] text-[#dae2fd] border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4cd7f6] hover:text-[#6ee7f7] transition-colors cursor-pointer group/btn"
                    >
                      <Terminal className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      <span>Architecture &amp; Specs</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Interactive UI Visual Frame (5 cols) */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative rounded-xl overflow-hidden border border-[#908fa0]/20 group/img cursor-pointer bg-[#0e1629] shadow-2xl transition-all duration-300 group-hover:border-[#4cd7f6]/50 group-hover:shadow-[#4cd7f6]/10 group-hover:-translate-y-1"
                  >
                    {/* Project Preview Image */}
                    <div className="aspect-video w-full relative overflow-hidden bg-[#131b2e]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/80 via-transparent to-black/20" />
                    </div>

                    {/* Bottom Status Bar matching screenshot */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#0b1326]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
                        <span className="text-xs font-mono font-medium text-white">
                          {project.statusBadge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-[#4cd7f6] group-hover/img:text-white transition-colors">
                        <span className="text-[11px] font-mono hidden sm:inline">Inspect</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
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
