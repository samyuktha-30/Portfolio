import { GraduationCap, Award, ShieldCheck, Star, Globe2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function EducationSection() {
  const { academics, credentials, languages } = PORTFOLIO_DATA;

  return (
    <section id="education" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-white/5">
          <div className="text-xs font-mono text-[#4cd7f6] tracking-wider mb-2">
            // ACADEMIC PROFILE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Academic Standing &amp; Credentials
          </h2>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Academic Standing & Degree */}
          <div className="bg-[#171f33]/85 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-200 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#4cd7f6] font-semibold tracking-wider">
                  {academics.program}
                </span>
                <span className="text-[#908fa0] bg-[#222a3d] px-2.5 py-1 rounded-md border border-white/5">
                  {academics.period}
                </span>
              </div>

              {/* Degree & College */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {academics.degree}
                </h3>
                <p className="text-xs sm:text-sm text-[#c7c4d7]">
                  {academics.institution}
                </p>
              </div>

              {/* GPA Display Box */}
              <div className="bg-[#0e1629] rounded-xl p-4 border border-[#4cd7f6]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-[#908fa0] tracking-wider mb-0.5">
                    CUMULATIVE GPA
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#4cd7f6] tabular-nums">
                      {academics.gpa}
                    </span>
                    <span className="text-sm font-semibold text-[#908fa0]">
                      /{academics.gpaMax}
                    </span>
                  </div>
                </div>
                <div className="p-2.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20">
                  <Star className="w-5 h-5 fill-[#4cd7f6]/20" />
                </div>
              </div>

              {/* Key Academic Coursework */}
              <div>
                <div className="text-xs font-mono text-[#908fa0] tracking-wider mb-3">
                  KEY ACADEMIC COURSEWORK:
                </div>
                <div className="flex flex-wrap gap-2">
                  {academics.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-3 py-1 rounded-md bg-[#222a3d] text-[#dae2fd] border border-white/5 hover:border-[#4cd7f6]/40 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#94a3b8] font-mono">
              <GraduationCap className="w-4 h-4 text-[#4cd7f6]" />
              <span>Rajalakshmi Institute of Technology • Chennai</span>
            </div>
          </div>

          {/* Card 2: Honors, Credentials & Languages */}
          <div className="bg-[#171f33]/85 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-200 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Header with Shield Icon */}
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/5">
                <span className="text-white font-bold tracking-wide">
                  Honors &amp; Credentials
                </span>
                <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
              </div>

              {/* Credential List */}
              <div className="space-y-4">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-xl bg-[#0e1629]/70 border border-white/5 hover:border-[#4cd7f6]/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-[#222a3d] shrink-0 mt-0.5">
                      <Award
                        className={`w-4 h-4 ${
                          idx === 0
                            ? 'text-[#818cf8]'
                            : idx === 1
                            ? 'text-[#4cd7f6]'
                            : 'text-[#4edea3]'
                        }`}
                      />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-semibold text-white">
                        {cred.title}
                      </h4>
                      <p className="text-xs text-[#94a3b8]">
                        {cred.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Language Proficiencies */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#908fa0] tracking-wider mb-3">
                  <Globe2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                  <span>LANGUAGE PROFICIENCIES:</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="bg-[#0e1629] p-3 rounded-xl border border-white/5 text-center"
                    >
                      <div className="text-xs font-semibold text-white mb-0.5">
                        {lang.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#4cd7f6]">
                        {lang.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 text-xs text-[#94a3b8] font-mono flex items-center justify-between">
              <span>Verified Qualifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
