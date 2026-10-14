import { useState } from 'react';
import { ArrowRight, Mail, Download, MapPin, Share2, Copy, Check, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function HeroSection({ onOpenResume, onOpenContact }: HeroSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Samyuktha Sahana V - Portfolio",
          text: "Check out the portfolio of Samyuktha Sahana V (Full Stack MERN & AI Engineer)",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Kicker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#4edea3]/10 text-[#4edea3] border border-[#4edea3]/30 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            <span>{PORTFOLIO_DATA.profile.availability}</span>
          </div>

          {/* Status pill on far right */}
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[#c7c4d7] bg-[#171f33]/80 px-3 py-1 rounded-full border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]" />
            <span>Active Candidate</span>
          </div>
        </div>

        {/* Technical Sub-kicker */}
        <div className="text-xs font-mono text-[#4cd7f6] tracking-wider mb-3 flex items-center gap-2">
          <span>// SOFTWARE ENGINEER</span>
          <span className="text-[#908fa0]">•</span>
          <span className="text-[#c0c1ff]">AI ENTHUSIAST</span>
        </div>

        {/* 2-Column Split: Typographic Column + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 7 Cols on desktop */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#8083ff] to-[#c0c1ff]">
                Samyuktha Sahana V
              </span>            
            </h1>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-xl font-semibold text-[#c0c1ff] flex items-center gap-2">
                <span>Full Stack MERN Developer</span>
                <span className="text-[#4cd7f6]">&amp;</span>
                <span className="text-[#4cd7f6]">AI / Data Analytics Engineer</span>
              </h2>

              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-2xl">
                {PORTFOLIO_DATA.profile.bio}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#4cd7f6] text-[#003640] hover:bg-[#6ee7f7] transition-all shadow-lg shadow-[#4cd7f6]/20 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#171f33] text-white border border-[#908fa0]/25 hover:border-[#4cd7f6]/60 hover:bg-[#222a3d] transition-all cursor-pointer active:scale-95"
              >
                <Mail className="w-4 h-4 text-[#4cd7f6]" />
                <span>Get in Touch</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#171f33] text-white border border-[#908fa0]/25 hover:border-[#c0c1ff]/60 hover:bg-[#222a3d] transition-all cursor-pointer active:scale-95"
              >
                <Download className="w-4 h-4 text-[#c0c1ff]" />
                <span>Direct Resume</span>
              </button>
            </div>

            {/* Quick Contact & Location Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-[#94a3b8]">
              <div className="flex items-center gap-1.5 bg-[#171f33]/60 p-1 rounded-lg border border-white/5">
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors relative"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#4edea3]" /> : <Mail className="w-4 h-4" />}
                </button>
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-md hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors"
                  title="Share portfolio"
                  aria-label="Share"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-[#4edea3]" /> : <Share2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
                    alert("Copied phone number: " + PORTFOLIO_DATA.profile.phone);
                  }}
                  className="p-1.5 rounded-md hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[#908fa0]/40">|</span>

              <div className="inline-flex items-center gap-1.5 font-mono text-[#c7c4d7]">
                <MapPin className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span>{PORTFOLIO_DATA.profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols on desktop - Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Cyan/Indigo Radial Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#4cd7f6]/30 via-[#6366f1]/20 to-[#c0c1ff]/30 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Concentric Decorative Orbit Ring */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#4cd7f6] via-[#171f33] to-[#8083ff] shadow-2xl">
                {/* Secondary inner ring */}
                <div className="w-full h-full rounded-full p-1.5 bg-[#0b1326] border border-[#4cd7f6]/40">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-[#171f33]">
                    <img
                      src={PORTFOLIO_DATA.profile.avatar}
                      alt="Samyuktha Sahana V - Full Stack & AI Developer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle optical highlight shine */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326]/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Floating verified badge */}
              {/* <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#171f33]/95 backdrop-blur-md border border-[#4cd7f6]/50 rounded-full px-3 py-1.5 shadow-xl flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#4cd7f6]" />
                <span className="text-xs font-mono font-medium text-white">Full Stack & AI</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
