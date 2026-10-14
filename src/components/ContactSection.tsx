import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill out all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fe985db2-4e29-4376-86f9-a83f5e985b57',
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitted(true);

        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#4cd7f6', '#c0c1ff', '#4edea3', '#8083ff']
        });
      } else {
        setErrorMessage('Failed to send email. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#131b2e]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#908fa0]/20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#4cd7f6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Active Candidate Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#4edea3]/10 text-[#4edea3] border border-[#4edea3]/30 tracking-wider mb-6 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse" />
            <span>ACTIVE CANDIDATE STATUS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
            {/* Left Column: Proposition & Contact Points (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
                  Let's Build Something{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4cd7f6] via-[#8083ff] to-[#c0c1ff]">
                    Impactful
                  </span>{' '}
                  Together.
                </h2>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed max-w-lg">
                  Currently actively interviewing for Software Engineering, Full-Stack MERN, and AI/Data Internships &amp; junior roles. Open to both on-site (Chennai) and remote worldwide opportunities.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3 pt-2">
                {/* Email Card */}
                <div
                  onClick={handleCopyEmail}
                  className="p-3.5 rounded-xl bg-[#0e1629]/90 border border-white/5 hover:border-[#4cd7f6]/40 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#222a3d] text-[#4cd7f6] group-hover:scale-110 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#908fa0] uppercase tracking-wider">
                        EMAIL
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white group-hover:text-[#4cd7f6] transition-colors">
                        {PORTFOLIO_DATA.profile.email}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#908fa0] group-hover:text-[#4cd7f6] flex items-center gap-1 font-mono">
                    {copiedEmail ? (
                      <span className="text-[#4edea3] flex items-center gap-1 text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    )}
                  </div>
                </div>

                {/* Direct Phone Card */}
                <div
                  onClick={handleCopyPhone}
                  className="p-3.5 rounded-xl bg-[#0e1629]/90 border border-white/5 hover:border-[#4cd7f6]/40 transition-all flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#222a3d] text-[#c0c1ff] group-hover:scale-110 transition-transform">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-[#908fa0] uppercase tracking-wider">
                        DIRECT PHONE
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white group-hover:text-[#c0c1ff] transition-colors">
                        {PORTFOLIO_DATA.profile.phone}
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#908fa0] group-hover:text-[#c0c1ff] flex items-center gap-1 font-mono">
                    {copiedPhone ? (
                      <span className="text-[#4edea3] flex items-center gap-1 text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    )}
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-3.5 rounded-xl bg-[#0e1629]/90 border border-white/5 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-[#222a3d] text-[#4edea3]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#908fa0] uppercase tracking-wider">
                      LOCATION
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white">
                      {PORTFOLIO_DATA.profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-[#0e1629]/95 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[#4cd7f6] font-mono text-sm">&gt;</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Get in Touch
                  </h3>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-12 h-12 rounded-full bg-[#4edea3]/20 text-[#4edea3] flex items-center justify-center mx-auto border border-[#4edea3]/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs sm:text-sm text-[#94a3b8] max-w-sm mx-auto">
                      Thank you for reaching out, <span className="text-white font-semibold">{formData.fullName}</span>. Your message has been routed to Samyuktha's inbox and will be answered promptly.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                        className="text-xs text-[#4cd7f6] hover:underline flex items-center gap-1"
                      >
                        <span>Open in default email app</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ fullName: '', email: '', subject: '', message: '' });
                        }}
                        className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#222a3d] text-white hover:bg-[#31394d]"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    {/* Full Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-[#908fa0] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#171f33] text-white placeholder-[#908fa0]/60 border border-[#908fa0]/20 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-[#908fa0] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#171f33] text-white placeholder-[#908fa0]/60 border border-[#908fa0]/20 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#908fa0] mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project inquiry, collaboration, or hello"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#171f33] text-white placeholder-[#908fa0]/60 border border-[#908fa0]/20 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-mono text-[#908fa0] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hi Samyuktha, I'd like to get in touch regarding..."
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-[#171f33] text-white placeholder-[#908fa0]/60 border border-[#908fa0]/20 focus:outline-none focus:border-[#4cd7f6] focus:ring-1 focus:ring-[#4cd7f6] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-lg text-xs sm:text-sm font-semibold bg-[#c0c1ff] text-[#1000a9] hover:bg-[#d5d6ff] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c0c1ff]/15 active:scale-[0.99] cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Encrypting &amp; Dispatching...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
