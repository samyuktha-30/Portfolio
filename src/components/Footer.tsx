import { Code, User, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#908fa0]/15 bg-[#060e20] py-12 text-[#94a3b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Column: Brand & Tagline */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span>Samyuktha Sahana V</span>
              <span className="text-[#4cd7f6] font-mono">//</span>
              <span className="text-[#4cd7f6]">Full-Stack &amp; AI</span>
            </div>
            <p className="text-xs text-[#908fa0]">
              Building scalable applications and intelligent solutions through code.
            </p>
          </div>

          {/* Center Column: Quick Navigation Affordances */}
          <div className="flex items-center gap-3">
            <a
              href="#projects"
              className="p-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors text-white"
              title="View Projects"
              aria-label="Projects"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="p-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors text-white"
              title="About Samyuktha"
              aria-label="About"
            >
              <User className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenContact}
              className="p-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors text-white cursor-pointer"
              title="Send a Message"
              aria-label="Contact"
            >
              <Mail className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#171f33] hover:bg-[#222a3d] hover:text-[#4cd7f6] transition-colors text-white cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Copyright */}
          <div className="text-xs text-center md:text-right space-y-1">
            <div className="text-[#dae2fd]">
              © {new Date().getFullYear()} Samyuktha.dev. All rights reserved.
            </div>
            <div className="text-[11px] font-mono text-[#908fa0]">
              Built with MERN &amp; Precision UI
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
