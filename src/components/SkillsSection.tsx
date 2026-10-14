import { useState } from 'react';
import { Code, Layout, Server, Database, Cpu, Wrench, Search, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string, categoryNumber: string) => {
    switch (iconName) {
      case 'Code':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/15 border border-[#3b82f6]/30 flex items-center justify-center text-[#60a5fa]">
            <Code className="w-4 h-4" />
          </div>
        );
      case 'Layout':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/15 border border-[#06b6d4]/30 flex items-center justify-center text-[#22d3ee]">
            <Layout className="w-4 h-4" />
          </div>
        );
      case 'Server':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399]">
            <Server className="w-4 h-4" />
          </div>
        );
      case 'Database':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#6366f1]/15 border border-[#6366f1]/30 flex items-center justify-center text-[#818cf8]">
            <Database className="w-4 h-4" />
          </div>
        );
      case 'Cpu':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#06b6d4]/15 border border-[#06b6d4]/30 flex items-center justify-center text-[#22d3ee]">
            <Cpu className="w-4 h-4" />
          </div>
        );
      case 'Wrench':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#10b981]/15 border border-[#10b981]/30 flex items-center justify-center text-[#34d399]">
            <Wrench className="w-4 h-4" />
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-[#222a3d] flex items-center justify-center text-[#dae2fd]">
            <Code className="w-4 h-4" />
          </div>
        );
    }
  };

  const filteredCategories = PORTFOLIO_DATA.skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.number !== selectedCategory) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesCategory = cat.title.toLowerCase().includes(query);
    const matchesSkill = cat.skills.some((s) => s.toLowerCase().includes(query));
    return matchesCategory || matchesSkill;
  });

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/5">
          <div>
            <div className="text-xs font-mono text-[#4cd7f6] tracking-wider mb-2">
              // TECH STACK
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Engineered Stack &amp; Core Tooling
            </h2>
          </div>
          {/* <p className="text-xs sm:text-sm text-[#94a3b8] max-w-md leading-relaxed">
            Curated mastery across full-stack component architecture, backend microservices, real-time data flows, and machine intelligence.
          </p> */}
        </div>

        {/* Interactive Filter & Search Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Quick Filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#c0c1ff] text-[#1000a9] font-semibold'
                  : 'bg-[#171f33] text-[#c7c4d7] hover:bg-[#222a3d]'
              }`}
            >
              All Tooling (26)
            </button>
            {PORTFOLIO_DATA.skillCategories.map((cat) => (
              <button
                key={cat.number}
                onClick={() => setSelectedCategory(cat.number)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.number
                    ? 'bg-[#c0c1ff] text-[#1000a9] font-semibold'
                    : 'bg-[#171f33] text-[#c7c4d7] hover:bg-[#222a3d]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#908fa0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Node, React, AI)..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-[#171f33] text-white placeholder-[#908fa0] border border-[#908fa0]/20 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-[#908fa0] hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => (
            <div
              key={category.number}
              className="bg-[#171f33]/85 hover:bg-[#222a3d]/90 backdrop-blur-md rounded-xl p-5 border border-[#908fa0]/15 hover:border-[#4cd7f6]/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                {/* Header row with Icon, Title, and 01/02 Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(category.iconName, category.number)}
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#908fa0] group-hover:text-[#4cd7f6] transition-colors">
                    {category.number}
                  </span>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => {
                    const isHighlighted =
                      searchQuery.trim() &&
                      skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono transition-all ${
                          isHighlighted
                            ? 'bg-[#4cd7f6] text-[#003640] font-bold shadow-md shadow-[#4cd7f6]/30'
                            : 'bg-[#222a3d]/90 text-[#dae2fd] border border-white/5 hover:border-[#4cd7f6]/40 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#94a3b8] font-mono">
                <span>{category.skills.length} core competencies</span>
                <Sparkles className="w-3 h-3 text-[#4cd7f6]/40 group-hover:text-[#4cd7f6] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-[#171f33]/40 rounded-xl border border-white/5">
            <p className="text-sm text-[#94a3b8]">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-[#4cd7f6] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
