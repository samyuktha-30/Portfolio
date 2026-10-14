import { GraduationCap, Briefcase, Layers, Trophy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function StatsStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-[#4cd7f6]" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-[#c0c1ff]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#4edea3]" />;
      case 'Trophy':
        return <Trophy className="w-4 h-4 text-[#4cd7f6]" />;
      default:
        return <Layers className="w-4 h-4 text-[#4cd7f6]" />;
    }
  };

  return (
    <section className="relative py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#171f33]/80 hover:bg-[#222a3d]/90 backdrop-blur-md rounded-xl p-5 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-200 group shadow-lg shadow-black/10"
            >
              {/* Header: Label and Icon */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono tracking-wider text-[#94a3b8] font-semibold uppercase">
                  {stat.title}
                </span>
                <div className="p-1.5 rounded-lg bg-[#222a3d]/80 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
              </div>

              {/* Value and Suffix */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-sm sm:text-base font-semibold text-[#4cd7f6]">
                    {stat.suffix}
                  </span>
                )}
              </div>

              {/* Caption */}
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
