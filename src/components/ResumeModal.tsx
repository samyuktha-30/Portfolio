import { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
SAMYUKTHA SAHANA V
${PORTFOLIO_DATA.profile.role}
Email: ${PORTFOLIO_DATA.profile.email} | Phone: ${PORTFOLIO_DATA.profile.phone}
Location: ${PORTFOLIO_DATA.profile.location}

EDUCATION
B.Tech in Artificial Intelligence & Data Science (2023 - 2027)
Rajalakshmi Institute of Technology, Chennai
Cumulative GPA: 8.3 / 10.0
Key Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Data Analytics, OOPs (Java/C++), DBMS

TECHNICAL SKILLS
- Programming: Java, JavaScript (ES6+), Python, C Programming
- Frontend & UI: React.js, React Native, Tailwind CSS, HTML5 & CSS3, Responsive Architecture
- Backend & Security: Node.js, Express.js, RESTful APIs, JWT Authentication, Microservices
- Databases & Storage: MongoDB, Mongoose ORM, MySQL, Query Optimization
- AI & Analytics: Power BI, NumPy & Pandas, Matplotlib, Deep Learning, Excel Advanced
- DevOps & Tooling: Git & GitHub, Postman API Testing, VS Code, Figma

PROFESSIONAL EXPERIENCE
1. Full Stack Developer Intern | Aurtri Global (Oct 2025 – Dec 2025)
- Architected backend server modules and scalable microservices utilizing Node.js and Express.js framework.
- Engineered robust RESTful APIs and connected MongoDB NoSQL database pipelines with optimized query speeds.
- Collaborated directly with client-facing frontend engineers to deliver cohesive full-stack MERN features on schedule.

2. Software Developer Intern | Resileo Labs LLP (Jun 2025 – Aug 2025)
- Active contributor across cross-platform web and mobile application engineering workflows.
- Refactored and optimized critical server-side logic, improving JSON data throughput and endpoint response times.
- Refined database query sequences and assisted in third-party API interface integration.

FEATURED PROJECTS
- Association Management System (MERN Stack Architecture, Enterprise Portal)
- AgriGuru – Intelligent Agricultural Advisory System (NASA POWER APIs, Agmarknet, Python, Machine Learning)
- AssignMate – Assignment Reminder App (React Native, Node.js, Firebase Cloud Messaging)

HONORS & CREDENTIALS
- Honored Diploma in Full Stack Development (CSE Certified)
- Selected Participant – Infosys Global Hackathon
- Digital Skills: Artificial Intelligence (Accenture Verified Credential)
Languages: English (Fluent), Tamil (Native), Japanese (N5 Basic)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#131b2e] border border-[#908fa0]/25 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#dae2fd]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="px-6 py-4 bg-[#0e1629] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#4cd7f6]/10 text-[#4cd7f6] border border-[#4cd7f6]/20">
              ATS-Optimized Resume
            </span>
            <span className="text-sm font-semibold text-white hidden sm:inline">
              Samyuktha Sahana V
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#222a3d] text-white hover:bg-[#31394d] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#4edea3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4cd7f6] text-[#003640] hover:bg-[#6ee7f7] transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#908fa0] hover:text-white hover:bg-[#222a3d] transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b1326] text-[#dae2fd] text-xs sm:text-sm font-body print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight mb-1">
              Samyuktha Sahana V
            </h1>
            <p className="text-sm sm:text-base font-semibold text-[#4cd7f6] print:text-blue-700 mb-3">
              Full Stack MERN Developer &amp; AI / Data Analytics Engineer
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#94a3b8] print:text-gray-700 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.profile.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.profile.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {PORTFOLIO_DATA.profile.location}
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#4cd7f6] uppercase border-b border-white/10 pb-1 print:text-blue-800">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-white print:text-black">
                  Rajalakshmi Institute of Technology, Chennai
                </h3>
                <p className="text-xs text-[#94a3b8] print:text-gray-700">
                  Bachelor of Technology (B.Tech) – Artificial Intelligence &amp; Data Science
                </p>
                <p className="text-xs text-[#dae2fd] print:text-gray-800 mt-1">
                  <strong>Cumulative GPA:</strong> 8.3 / 10.0
                </p>
                <p className="text-xs text-[#94a3b8] print:text-gray-600 mt-1">
                  <strong>Coursework:</strong> Data Structures &amp; Algorithms, Machine Learning, Deep Learning, Data Analytics, OOPs (Java/C++), DBMS
                </p>
              </div>
              <span className="text-xs font-mono text-[#908fa0] print:text-gray-600 shrink-0">
                2023 – 2027
              </span>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#4cd7f6] uppercase border-b border-white/10 pb-1 print:text-blue-800">
              Work Experience
            </h2>

            {PORTFOLIO_DATA.experience.slice(0, 2).map((exp, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-white print:text-black">
                      {exp.role}
                    </span>{' '}
                    —{' '}
                    <span className="text-[#4cd7f6] print:text-blue-700 font-semibold">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#908fa0] print:text-gray-600 shrink-0">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#94a3b8] print:text-gray-700">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#4cd7f6] uppercase border-b border-white/10 pb-1 print:text-blue-800">
              Technical Projects
            </h2>

            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-white print:text-black">
                    {proj.title}
                  </h3>
                  <span className="text-xs font-mono text-[#908fa0] print:text-gray-600">
                    {proj.techStack.join(' • ')}
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] print:text-gray-700">
                  {proj.description}
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-[#94a3b8] print:text-gray-700">
                  {proj.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Technical Fluency */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#4cd7f6] uppercase border-b border-white/10 pb-1 print:text-blue-800">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong>Languages:</strong> Java, JavaScript (ES6+), Python, C Programming
              </div>
              <div>
                <strong>Frontend:</strong> React.js, React Native, Tailwind CSS, HTML5, CSS3
              </div>
              <div>
                <strong>Backend &amp; DB:</strong> Node.js, Express.js, MongoDB, Mongoose, MySQL, REST APIs, JWT
              </div>
              <div>
                <strong>AI &amp; Data:</strong> Power BI, NumPy, Pandas, Matplotlib, Deep Learning, Excel
              </div>
            </div>
          </div>

          {/* Honors & Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-wider text-[#4cd7f6] uppercase border-b border-white/10 pb-1 print:text-blue-800">
              Honors, Certifications &amp; Languages
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-[#94a3b8] print:text-gray-700">
              <li>Honored Diploma in Full Stack Development – CSE Certified</li>
              <li>Selected Participant – Infosys Global Hackathon</li>
              <li>Digital Skills: Artificial Intelligence – Accenture Verified Credential</li>
              <li>Languages: English (Fluent), Tamil (Native), Japanese (N5 Basic)</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0e1629] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#908fa0]">
          <span>Ready for Software Engineering &amp; MERN Stack roles</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#4cd7f6] underline cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
