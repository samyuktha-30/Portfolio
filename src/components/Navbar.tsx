import { useState, useEffect } from 'react';
import { FileDown, Menu, X, Check, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export function Navbar({ onOpenResume, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b1326]/90 backdrop-blur-md border-b border-[#908fa0]/15 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark & status badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#about"
            className="flex items-center gap-2 group text-white font-bold tracking-tight text-lg hover:text-[#4cd7f6] transition-colors"
          >
            <span className="text-[#4cd7f6] font-mono text-base">&lt;/&gt;</span>
            <span className="font-display font-semibold tracking-tight text-white group-hover:text-[#4cd7f6] transition-colors">
              samyuktha.dev
            </span>
          </a>

          {/* Availability badge */}
          <button
            onClick={handleCopyEmail}
            title="Click to copy email"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#4edea3]/10 text-[#4edea3] border border-[#4edea3]/25 hover:bg-[#4edea3]/20 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse" />
            <span className="text-[11px] font-mono">
              {copiedEmail ? 'Copied Email!' : 'Available'}
            </span>
            {copiedEmail ? <Check className="w-3 h-3 ml-0.5" /> : <Copy className="w-2.5 h-2.5 opacity-60 ml-0.5" />}
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#171f33]/80 p-1 rounded-full border border-[#908fa0]/20 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#c0c1ff] text-[#1000a9] font-semibold shadow-sm'
                    : 'text-[#c7c4d7] hover:text-white hover:bg-[#222a3d]/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Resume CTA & Profile Avatar */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#4cd7f6] text-[#003640] hover:bg-[#6ee7f7] shadow-sm hover:shadow-[#4cd7f6]/25 transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            <span>Resume</span>
            <FileDown className="w-3.5 h-3.5" />
          </button>

          <a
            href="#about"
            className="relative w-8 h-8 rounded-full overflow-hidden border border-[#4cd7f6]/50 shadow-sm shrink-0 block group"
            title="Samyuktha Sahana V"
          >
            <img
              src={PORTFOLIO_DATA.profile.avatar}
              alt="Samyuktha Sahana V"
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#c7c4d7] hover:text-white hover:bg-[#171f33]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1629] border-b border-[#908fa0]/20 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-150">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <span className="text-xs font-mono text-[#c7c4d7]">Navigation</span>
            <button
              onClick={handleCopyEmail}
              className="text-xs text-[#4edea3] flex items-center gap-1 font-mono"
            >
              {copiedEmail ? 'Email Copied!' : 'samyukthasahana2004@gmail.com'}
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-[#dae2fd] hover:bg-[#171f33] hover:text-[#4cd7f6] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-[#4cd7f6] text-[#003640]"
            >
              <FileDown className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
