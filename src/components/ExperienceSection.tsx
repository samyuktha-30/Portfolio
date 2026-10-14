import { Calendar, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/5">
          <div>
            <div className="text-xs font-mono text-[#4cd7f6] tracking-wider mb-2">
              // CAREER &amp; EXPERIENCE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Professional Engineering Track
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md leading-relaxed">
            Hands-on enterprise roles optimizing production APIs, database schemas, and end-to-end full stack software features.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#908fa0]/20 space-y-10 ml-2 sm:ml-4">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Indicator */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  item.active
                    ? 'bg-[#4cd7f6] border-[#0b1326] ring-4 ring-[#4cd7f6]/20 animate-pulse'
                    : idx === 1
                    ? 'bg-[#0b1326] border-[#4cd7f6]'
                    : 'bg-[#0b1326] border-[#908fa0]'
                }`}
              />

              {/* Card Container */}
              <div className="bg-[#171f33]/80 hover:bg-[#1f2840] backdrop-blur-md rounded-xl p-6 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-200">
                {/* Header row: Role, Company, Period */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#4cd7f6] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#4cd7f6]">
                      {item.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#222a3d] text-[#c7c4d7] border border-white/5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullets */}
                {item.bullets.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-[#4cd7f6] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Focus Footer */}
                {item.techFocus.length > 0 && (
                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-[#908fa0] text-[11px]">Tech Focus:</span>
                    {item.techFocus.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#222a3d] text-[#4cd7f6] text-[11px] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
