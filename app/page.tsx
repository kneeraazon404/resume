'use client';

import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { useRef } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => (
  <section className={`mb-6 print:mb-4 ${className}`}>
    <h2 className="text-xl font-bold text-slate-900 uppercase tracking-wide border-b border-slate-900 pb-1 mb-4 print:text-lg print:mb-2 print:pb-0">
      {title}
    </h2>
    {children}
  </section>
);

interface EntryProps {
  title: string;
  subtitle: string;
  details?: string[];
  period?: string;
}

const Entry: React.FC<EntryProps> = ({ title, subtitle, details }) => (
  <div className="mb-4 break-inside-avoid print:mb-2 text-justify">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
      <h3 className="text-xl font-bold text-slate-900 leading-tight print:text-base">{title}</h3>
    </div>
    <div className="text-lg font-medium text-blue-700 mb-2 print:text-sm print:mb-1 print:text-black">
      {subtitle}
    </div>
    {details && details.length > 0 && (
      <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700 text-base print:text-xs">
        {details.map((detail, index) => (
          <li key={index} className="leading-relaxed pl-1">{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

const professionalSummary = "Senior Python Developer and Full-Stack Engineer with 7+ years of experience architecting scalable web applications and AI-powered solutions. Expert in Python, Django, FastAPI, and modern JavaScript frameworks like React and Next.js. Proven track record of delivering 80+ projects, optimizing database performance, and integrating advanced AI technologies.";

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript"] },
  { category: "Backend", items: ["Django", "FastAPI", "Celery"] },
  { category: "Frontend", items: ["React", "Next.js", "TailwindCSS"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "VectorDB"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda)", "Docker", "CI/CD"] },
  { category: "AI/ML", items: ["GenAI", "LangChain", "RAG"] },
  { category: "Others", items: ["RESTful APIs", "Microservices", "Async Programming"] },
];

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Python/Django Developer",
    company: "Upwork (Top-Rated Freelancer)",
    location: "Remote",
    period: "Nov 2021 – Present",
    details: [
      "Architected and delivered 80+ full-stack applications for global clients, maintaining a 100% Job Success Score.",
      "Built scalable REST APIs using Django, FastAPI, and Flask, handling 10K+ daily requests with 99.9% uptime.",
      "Implemented AI-powered solutions using GenAI and LangChain, reducing manual processing by 60%.",
      "Optimized PostgreSQL/MongoDB queries and deployed containerized apps on AWS with automated CI/CD.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Pathway Technologies and Services",
    location: "Kathmandu, Nepal",
    period: "Aug 2020 – Sep 2022",
    details: [
      "Led development of enterprise Django applications serving 5,000+ active users.",
      "Designed RESTful APIs with DRF, reducing frontend-backend integration time by 35%.",
      "Optimized MySQL and MongoDB schemas, improving query performance by 50%.",
      "Mentored junior developers and conducted code reviews to maintain code quality standards.",
    ],
  },
  {
    title: "Full-Stack Developer (Part-Time)",
    company: "Merohealth",
    location: "Kathmandu, Nepal",
    period: "Jan 2019 – May 2021",
    details: [
      "Built a healthcare dashboard serving 10,000+ users with HIPAA-compliant data handling.",
      "Developed full-stack features using Django, React, and Next.js with TailwindCSS.",
      "Implemented secure authentication and role-based access control systems.",
    ],
  },
  {
    title: "Web Developer",
    company: "Food & Beverage Nepal",
    location: "Kathmandu, Nepal",
    period: "Feb 2018 – Feb 2019",
    details: [
      "Sole developer responsible for end-to-end development of the company's web platform.",
      "Built responsive web applications serving 2,000+ monthly visitors using Django and React.",
      "Implemented RESTful APIs and optimized database performance for scalability.",
    ],
  },
];

interface ProjectData {
  title: string;
  tech: string;
  description: string;
}

const projects: ProjectData[] = [
  {
    title: "Real-time Speech Transcription System",
    tech: "FastAPI, WebSockets, Whisper AI",
    description: "Built secure, low-latency voice processing with sub-second transcription delay using custom backend integration.",
  },
  {
    title: "AI-Powered Career Assistant",
    tech: "GenAI, LangChain, RAG",
    description: "Developed resume analysis tool improving user job shortlist rates by 30% through contextual insights.",
  },
  {
    title: "Stock & Options Analytics Platform",
    tech: "AWS Lambda, Docker, Polygon.io API",
    description: "Engineered real-time financial data pipeline with async processing and live analytics dashboard.",
  },
];

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

const education: Education[] = [
  {
    degree: "Bachelor of Engineering (BE), Electronics and Communications",
    institution: "Tribhuvan University, IOE, Western Regional Campus",
    location: "Pokhara, Nepal",
    period: "2016 – 2021",
  },
  {
    degree: "Higher Secondary – Science",
    institution: "Einstein Academy",
    location: "Lalitpur, Nepal",
    period: "2014 – 2016",
  },
];

interface Certification {
  name: string;
  issuer: string;
}

const certifications: Certification[] = [
  { name: "React - The Complete Guide 2024 (incl. Next.js, Redux)", issuer: "Udemy, August 2024" },
  { name: "Build a Backend REST API with Python & Django - Advanced", issuer: "Udemy, July 2023" },
  { name: "REST APIs with Flask and Python in 2024", issuer: "Udemy, March 2023" },
];

interface Training {
  name: string;
  description: string;
  issuer: string;
}

const training: Training[] = [
  {
    name: "Full Stack Development Bootcamp",
    description: "Intensive six-month program focusing on Django, Django REST Framework, and ReactJS.",
    issuer: "IWA Workshop",
  },
];

export default function Page() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = (): void => {
    window.print();
  };

  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 print:bg-white flex justify-center items-start overflow-auto">
      <div
        ref={contentRef}
        className="w-full max-w-7xl bg-white shadow-2xl print:shadow-none print:w-[210mm] print:max-w-none mx-auto p-[15mm_18mm] text-slate-800 leading-normal"
        style={{ minHeight: '297mm' }}
      >
        <div className="flex justify-end print:hidden mb-6">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span>Print or Save PDF</span>
          </button>
        </div>

        <header className="pb-6 mb-8 print:pb-4 print:mb-6">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight print:text-3xl">Nirajan Karki</h1>
          <h2 className="text-xl font-medium text-blue-700 print:text-lg mb-6">Senior Python Developer · Full-Stack Engineer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-slate-600 print:text-sm">
            <div className="space-y-1.5 flex flex-col items-start justify-end">
              <div className="flex items-center gap-2 h-6">
                <MapPin size={16} className="text-blue-600" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 h-6">
                <Mail size={16} className="text-blue-600" />
                <a href="mailto:kneeraazon@gmail.com" className="hover:text-blue-700 transition-colors">kneeraazon@gmail.com</a>
              </div>
              <div className="flex items-center gap-2 h-6">
                <Phone size={16} className="text-blue-600" />
                <span>+977-9844395719</span>
              </div>
            </div>

            <div className="space-y-1.5 flex flex-col items-start md:items-end justify-end">
              <div className="flex items-center gap-2 h-6">
                <a href="https://kneeraazon.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700">
                  <Globe size={16} className="text-blue-600" />
                  <span>kneeraazon.com</span>
                </a>
              </div>
              <div className="flex items-center gap-2 h-6">
                <a href="https://github.com/kneeraazon404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700">
                  <Github size={16} className="text-blue-600" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="flex items-center gap-2 h-6">
                <a href="https://linkedin.com/in/kneeraazon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700">
                  <Linkedin size={16} className="text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <Section title="Professional Summary">
          <p className="text-base leading-7 text-slate-700 text-justify print:text-xs">
            {professionalSummary}
          </p>
        </Section>

        <Section title="Selected Projects">
          <div className="grid grid-cols-1 gap-4 print:gap-2">
            {projects.map((project, index) => (
              <div key={index} className="break-inside-avoid mb-2 text-justify">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>
                  <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded print:bg-transparent print:p-0 print:text-slate-600">{project.tech}</span>
                </div>
                <p className="text-base text-slate-700 print:text-xs">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Professional Experience">
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Entry
                key={index}
                title={exp.title}
                subtitle={`${exp.company} | ${exp.location} | ${exp.period}`}
                details={exp.details}
              />
            ))}
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 text-base print:text-xs">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="break-inside-avoid">
                <h3 className="font-bold text-slate-900 mb-1">{skillSet.category}</h3>
                <ul className="text-slate-600 space-y-0.5">
                  {skillSet.items.map((item) => (
                    <li key={item} className="before:content-['•'] before:mr-1.5 before:text-blue-400">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          {education.map((edu, index) => (
            <div key={index} className="mb-2 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-slate-900 text-lg">{edu.degree}</h3>
                <span className="text-base text-slate-600 italic">{edu.period}</span>
              </div>
              <div className="text-base text-slate-700">{edu.institution}, {edu.location}</div>
            </div>
          ))}
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
          <Section title="Certifications">
            <ul className="list-none space-y-2 text-base text-slate-700 print:text-xs">
              {certifications.map((cert, index) => (
                <li key={index} className="break-inside-avoid">
                  <span className="font-semibold block text-slate-900">{cert.name}</span>
                  <span className="text-slate-500 text-sm">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Additional Training">
            <ul className="list-none space-y-2 text-base text-slate-700 print:text-xs">
              {training.map((train, index) => (
                <li key={index} className="break-inside-avoid">
                  <div className="font-bold text-slate-900">{train.name}</div>
                  <div className="text-sm text-slate-500">{train.issuer}</div>
                  <div className="text-sm mt-0.5">{train.description}</div>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}
