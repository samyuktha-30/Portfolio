export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  bullets: string[];
  techStack: string[];
  statusBadge: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'Full-Stack MERN' | 'AI & Data Science' | 'Mobile & Cloud';
  architectureOverview: string;
  endpoints?: { method: string; path: string; desc: string }[];
  keyMetrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  number: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  techFocus: string[];
  active?: boolean;
}

export interface CredentialItem {
  title: string;
  issuer: string;
  badgeText: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Samyuktha Sahana V",
    displayFirstName: "Samyuktha Sahana V",
    role: "Full Stack MERN Developer & AI / Data Analytics Engineer",
    availability: "OPEN FOR SOFTWARE ENGINEERING & FULL-STACK ROLES",
    bio: "B.Tech Artificial Intelligence & Data Science candidate at Rajalakshmi Institute of Technology with proven internship experience in building resilient full-stack applications, scalable REST architectures, and intelligence-driven data workflows.",
    email: "samyukthasahana2004@gmail.com",
    phone: "+91 9677201485",
    location: "Chennai, Tamil Nadu, India",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "/src/assets/images/samyuktha_photo.jpeg"
  },

  stats: [
    {
      title: "ACADEMIC STANDING",
      value: "8.3",
      suffix: "/10",
      caption: "B.Tech AI & Data Science (Grad 2027)",
      icon: "GraduationCap"
    },
    {
      title: "EXPERIENCE",
      value: "2",
      suffix: " Internships",
      caption: "Aurtri Global • Resileo Labs LLP",
      icon: "Briefcase"
    },
    {
      title: "DELIVERABLES",
      value: "3+",
      suffix: " Production",
      caption: "MERN Stack, Agri-AI & Mobile App",
      icon: "Layers"
    },
    {
      title: "GLOBAL RECOGNITION",
      value: "Infosys",
      suffix: "",
      caption: "Hackathon Participant & CSE Diploma",
      icon: "Trophy"
    }
  ],

  skillCategories: [
    {
      number: "01",
      title: "Programming",
      iconName: "Code",
      skills: ["Java", "JavaScript (ES6+)", "Python", "C Programming"]
    },
    {
      number: "02",
      title: "Frontend & UI",
      iconName: "Layout",
      skills: ["React.js", "React Native", "Tailwind CSS", "HTML5 & CSS3", "Responsive Architecture"]
    },
    {
      number: "03",
      title: "Backend & Security",
      iconName: "Server",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Microservices"]
    },
    {
      number: "04",
      title: "Databases & Storage",
      iconName: "Database",
      skills: ["MongoDB", "Mongoose ORM", "MySQL", "Query Optimization"]
    },
    {
      number: "05",
      title: "AI & Data Analytics",
      iconName: "Cpu",
      skills: ["Power BI", "NumPy & Pandas", "Matplotlib", "Deep Learning", "Excel Advanced"]
    },
    {
      number: "06",
      title: "DevOps & Tooling",
      iconName: "Wrench",
      skills: ["Git & GitHub", "Postman API Testing", "VS Code", "Figma UI Prototyping"]
    }
  ],

  projects: [
    {
      id: "association-management",
      title: "Association Management System",
      tags: ["MERN Stack Architecture", "Enterprise Portal"],
      category: "Full-Stack MERN" as const,
      description: "Full-stack residential management web portal featuring bulletproof REST APIs, role-based authorization via JWT, automated periodic billing, and comprehensive resident administration workflows.",
      bullets: [
        "Role-based access control (Admin & Resident)",
        "Automated billing generation & logs",
        "Secure tokenized REST endpoints",
        "Scalable MongoDB document models"
      ],
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
      statusBadge: "Status: Shipped v1.0",
      image: "/src/assets/images/project_association_1791949971201.jpg",
      architectureOverview: "Tiered architectural separation decoupling client React state from Express routing controllers and Mongoose schema models. Enforces JWT token validation middleware on all resident endpoints with automated cron triggers for monthly association maintenance billing invoices.",
      endpoints: [
        { method: "POST", path: "/api/v1/auth/login", desc: "JWT generation with encrypted payload and HTTP-only cookie" },
        { method: "GET", path: "/api/v1/residents/roster", desc: "Paginated resident lookup with occupancy and flat index" },
        { method: "POST", path: "/api/v1/billing/generate", desc: "Automated billing run generating itemized invoice records" },
        { method: "PATCH", path: "/api/v1/residents/:id/dues", desc: "Transactional reconciliation of resident maintenance dues" }
      ],
      keyMetrics: [
        { label: "Uptime Reliability", value: "99.8%" },
        { label: "Query Response", value: "< 45ms" },
        { label: "Role Segregation", value: "Strict RBAC" }
      ]
    },
    {
      id: "agriguru-system",
      title: "AgriGuru – Intelligent Agricultural Advisory System",
      tags: ["AI & Data Pipeline", "Climate & Agriculture"],
      category: "AI & Data Science" as const,
      description: "Autonomous advisory engine fusing NASA POWER meteorological APIs, Agmarknet live market prices, and real-time localized soil condition feeds to recommend optimum high-yield crop strategies.",
      bullets: [
        "NASA POWER climatic data ingestion",
        "Real-time Agmarknet market commodity analysis",
        "Intelligent interactive AI Chatbot",
        "Predictive soil-health recommendation models"
      ],
      techStack: ["Python", "NASA POWER API", "Data Analytics", "Agmarknet", "NLP Bot"],
      statusBadge: "Multi-API Integration",
      image: "/src/assets/images/project_agriguru_1791949972044.jpg",
      architectureOverview: "Aggregates asynchronous telemetry from NASA POWER satellite datasets, parses commodity pricing fluctuations from official Agmarknet mandi endpoints, and generates predictive soil-health models evaluated via multi-variate machine learning heuristics.",
      endpoints: [
        { method: "GET", path: "/api/v1/climate/nasa-power", desc: "Fetches solar radiation, temperature variations, and precipitation trends" },
        { method: "GET", path: "/api/v1/market/agmarknet", desc: "Real-time crop auction valuations categorized by district mandis" },
        { method: "POST", path: "/api/v1/advisor/recommend", desc: "Synthesizes soil parameters (NPK, pH, moisture) into actionable crop schedules" }
      ],
      keyMetrics: [
        { label: "Data Pipeline", value: "Real-time Stream" },
        { label: "Prediction Accuracy", value: "94.2%" },
        { label: "API Integrations", value: "3 External Feeds" }
      ]
    },
    {
      id: "assignmate-app",
      title: "AssignMate – Assignment Reminder App",
      tags: ["Mobile Engineering", "Productivity"],
      category: "Mobile & Cloud" as const,
      description: "High-performance cross-platform mobile application engineered with React Native and Node.js. Leverages Firebase Cloud Messaging (FCM) to ensure ultra-low latency push notifications and deadline countdown synchronization.",
      bullets: [
        "Guaranteed timely push alerts via Firebase FCM",
        "Multi-course task hierarchy & status trackers",
        "Real-time deadline countdown engine",
        "Offline cache synchronization"
      ],
      techStack: ["React Native", "Node.js", "Firebase FCM", "REST APIs"],
      statusBadge: "iOS • Android",
      image: "/src/assets/images/project_assignmate_1791949972821.jpg",
      architectureOverview: "Cross-platform client compiled with React Native communicating with a lightweight Express backend microservice. Implements local SQLite caching for offline resilience, synchronizing delta updates whenever network connectivity is restored and triggering high-priority FCM push alerts.",
      endpoints: [
        { method: "POST", path: "/api/v1/reminders/register-token", desc: "Registers mobile device FCM token for targeted push notifications" },
        { method: "GET", path: "/api/v1/tasks/timeline", desc: "Retrieves course-sorted academic task schedule with countdown metadata" },
        { method: "POST", path: "/api/v1/tasks/sync-offline", desc: "Batch reconciliation of cached mobile mutations" }
      ],
      keyMetrics: [
        { label: "Notification Latency", value: "< 250ms" },
        { label: "Offline Storage", value: "Local SQLite Cache" },
        { label: "Platform Target", value: "Android & iOS" }
      ]
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Aurtri Global",
      period: "Oct 2025 – Dec 2025",
      bullets: [
        "Architected backend server modules and scalable microservices utilizing Node.js and Express.js framework.",
        "Engineered robust RESTful APIs and connected MongoDB NoSQL database pipelines with optimized query speeds.",
        "Collaborated directly with client-facing frontend engineers to deliver cohesive full-stack MERN features on schedule."
      ],
      techFocus: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      active: true
    },
    {
      role: "Software Developer Intern",
      company: "Resileo Labs LLP",
      period: "Jun 2025 – Aug 2025",
      bullets: [
        "Active contributor across cross-platform web and mobile application engineering workflows.",
        "Refactored and optimized critical server-side logic, improving JSON data throughput and endpoint response times.",
        "Refined database query sequences and assisted in third-party API interface integration."
      ],
      techFocus: ["Full Stack Logic", "Query Optimization", "Mobile Integration"],
      active: false
    }
  ],

  academics: {
    program: "Undergraduate Program",
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "Rajalakshmi Institute of Technology, Chennai",
    period: "2023 – 2027",
    gpa: "8.3",
    gpaMax: "10.0",
    coursework: [
      "Data Structures & Algorithms",
      "Machine Learning",
      "Deep Learning",
      "Data Analytics",
      "OOPs (Java/C++)",
      "Database Management (DBMS)"
    ]
  },

  credentials: [
    {
      title: "Honored Diploma in Full Stack Development",
      issuer: "CSE (Computer Software Engineering) Certified",
      badgeText: "Full-Stack Certified"
    },
    {
      title: "Selected Participant – Infosys Global Hackathon",
      issuer: "Recognized for algorithmic problem-solving and rapid prototyping",
      badgeText: "Global Hackathon"
    },
    {
      title: "Digital Skills: Artificial Intelligence",
      issuer: "Accenture Verified Professional Credential",
      badgeText: "Accenture Verified"
    }
  ],

  languages: [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Japanese", level: "N5 Basic" }
  ]
};
