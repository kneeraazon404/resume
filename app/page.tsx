'use client';


// Helper component for sections to maintain consistency
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "" }) => (
  <section className={`py-3 ${className}`}>
    <h2 className="text-xl font-semibold text-blue-900 border-b-2 border-blue-200 pb-2 mb-4">{title}</h2>
    {children}
  </section>
);

// Helper component for individual entries within sections (like jobs, projects)
interface EntryProps {
  title: string;
  subtitle?: string;
  details?: string[];
  children?: React.ReactNode;
}

const Entry: React.FC<EntryProps> = ({ title, subtitle, details, children }) => (
  <div className="mb-5">
    <h3 className="text-md font-semibold text-blue-800">{title}</h3>
    {subtitle && <p className="text-sm italic text-gray-600 mb-1">{subtitle}</p>}
    {details && Array.isArray(details) && (
      <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
        {details.map((detail, index) => <li key={index}>{detail}</li>)}
      </ul>
    )}
    {children}
  </div>
);

export default function Page() {
  const handlePrint = (): void => {
    window.print();
  };

  const professionalSummary: string = "As a seasoned Senior Python Developer and Full-Stack Engineer with over 7 years of professional experience, I specialize in transforming complex ideas into powerful, scalable applications. My expertise spans designing, developing, and deploying web applications, backend systems, and automation solutions. Proficient in Python, Django, FastAPI, RESTful APIs, PostgreSQL, MongoDB, React, Next.js, and AWS. Proven ability in developing real-time financial data applications, implementing asynchronous programming, and integrating AI/ML technologies (OpenAI GPT-4, LangChain, RAG). Adept at leading code reviews, optimizing database performance, and delivering tailored software solutions for a diverse clientele, including 80+ successful projects on Upwork. I am a versatile and reliable partner for your next big project.";

  interface SkillSet {
    category: string;
    items: string[];
  }

  const skills: SkillSet[] = [
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Backend Frameworks & Libraries", items: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "Celery"] },
    { category: "Frontend Frameworks & Libraries", items: ["React", "Next.js", "TailwindCSS"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Database Design & Management"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda)", "Docker", "Nginx", "Apache", "GitHub Actions", "Cloud Deployment"] },
    { category: "AI/ML & Data Science", items: ["OpenAI GPT-4", "LangChain", "RAG", "NLP", "Pandas", "NumPy", "Matplotlib"] },
    { category: "Other", items: ["RESTful API Development", "Data Structures & Algorithms", "Asynchronous Programming", "Web Scraping", "Code Optimization & Debugging", "Unit & Integration Testing", "Agile Methodologies"] },
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
      company: "Upwork (Freelance)",
      location: "Nepal",
      period: "November 2021 – Present",
      details: [
        "Developed scalable backend APIs using Python (Django, DRF), FastAPI, and Flask.",
        "Led the architectural design of robust full-stack applications for over 80+ clients.",
        "Designed and implemented efficient database schemas with PostgreSQL; optimized MongoDB performance.",
        "Built RESTful APIs for seamless frontend (React, Next.js) integration.",
        "Developed intelligent chatbots and search engines using OpenAI; implemented NLP-powered features with LangChain and RAG systems.",
        "Designed and maintained secure authentication and authorization systems.",
        "Built and deployed applications on various cloud platforms, primarily AWS.",
        "Conducted code reviews, established best practices, and ensured code quality through unit and integration tests.",
      ],
    },
    {
      title: "Full-stack Developer",
      company: "Pathway Technologies and Services",
      location: "", // Location can be added if available
      period: "August 2021 – September 2022",
      details: [
        "Proficient in Python with a strong focus on Django and Django REST Framework (DRF).",
        "Played a key role in developing innovative solutions using Django and DRF, leveraging expertise in backend development.",
        "Built and maintained scalable web applications using Django, ensuring high performance and responsiveness.",
        "Implemented RESTful APIs with Django REST Framework, streamlining data retrieval and manipulation.",
        "Designed and optimized database schemas in Django with MySQL and MongoDB to support complex queries and transactions.",
        "Collaborated with cross-functional teams to ensure seamless integration of new features and improvements in Django-based applications.",
      ],
    },
    {
      title: "Web Developer",
      company: "Merohealth",
      location: "",
      period: "January 2020 – May 2021",
      details: [
        "Developed full-stack solutions using Django, DRF, React, and Next.js, with TailwindCSS for styling.",
        "Built and maintained scalable web applications, ensuring high performance and responsiveness.",
        "Implemented RESTful APIs with DRF and integrated them with React/Next.js frontends.",
        "Designed and optimized database schemas (MySQL, MongoDB).",
        "Collaborated with cross-functional teams on Django-based full-stack applications.",
        "Contributed to building a healthcare dashboard for 10K+ users, ensuring data privacy and security compliance.",
      ],
    },
    {
      title: "Web Developer",
      company: "Food & Beverage Nepal",
      location: "",
      period: "February 2018 – February 2020",
      details: [
        "Operated as a solo developer for a startup, responsible for full front-end and backend development.",
        "Developed full-stack solutions using Django, DRF, React, and Next.js with TailwindCSS. This included the \"FoodandBeverage\" website showcasing options in Nepal.",
        "Built and maintained scalable web applications, ensuring high performance, responsiveness, and scalability.",
        "Implemented RESTful APIs with DRF and integrated them with React/Next.js frontends.",
        "Designed and optimized database schemas (MySQL, MongoDB).",
      ],
    },
  ];

  interface Project {
    title: string;
    description: string;
  }

  const projects: Project[] = [
    {
      title: "CMEDAI – Real-time Speech Transcriber",
      description: "Developed a low-latency voice processing system using FastAPI and WebSockets, featuring live transcription with sub-second delay via custom backend Whisper integration. Ensured a secure and scalable architecture.",
    },
    {
      title: "Feedback Generator – AI Career Assistant",
      description: "Created an AI tool powered by GPT-4 and LangChain for resume analysis. Delivered contextual insights on user profiles and integrated LangChain agents for prompt refinement, improving job shortlist rates for users by 30%.",
    },
    {
      title: "Stock & Options Scanner",
      description: "Engineered an AWS-powered financial data pipeline for real-time stock and options scanning using polygon.io API. Implemented asynchronous processing and built a dashboard for real-time analytics. Utilized Docker, AWS Lambda, and S3 for infrastructure.",
    },
    {
      title: "Delta Hedging Platform (GitHub)",
      description: "Developed a platform for Delta Hedge Trading on IG.com, showcasing financial technology application development. (Python)",
    },
    {
      title: "OpenAI Assistant API Chatbot (GitHub)",
      description: "Built a virtual text assistant powered by OpenAI APIs, Python Flask, and Large Language Models (LLM), demonstrating expertise in conversational AI. (Python)",
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
      degree: "Bachelor of Engineering (BE), Electronics and Communications Engineering",
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
    { name: "REST APIs with Flask and Python in 2024", issuer: "" }, // Issuer can be added if known
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


  return (
    <div className="bg-gray-100 min-h-screen py-8 print:bg-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 py-6 bg-white text-gray-800 shadow-xl rounded-lg print:shadow-none print:rounded-none print:p-0 text-[11pt] sm:text-[12pt] leading-normal print:text-black">
        <div className="flex justify-end print:hidden my-4">
          <button
            onClick={handlePrint}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Print / Save as PDF
          </button>
        </div>

        <header className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 py-6 border-b border-gray-200">

          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Nirajan Karki</h1>
            <h2 className="text-lg sm:text-xl text-blue-600">Senior Python Developer · Full-Stack Engineer</h2>

            <div className="text-xs sm:text-sm text-gray-600 mt-2 space-y-1">
              <p>
                📍 Kathmandu, Nepal
              </p>
              <p>
                📧 <a className="text-blue-700 hover:underline" href="mailto:kneeraazon@gmail.com" target='_blank' rel="noopener noreferrer">kneeraazon@gmail.com</a>
                <span className="mx-1 print:hidden">|</span> <span className="sm:hidden"><br/></span>📞 +977-9844395719
              </p>
              <p >
                🌐 <a className="text-blue-700 hover:underline" target='_blank' rel="noopener noreferrer" href="https://kneeraazon.com">kneeraazon.com</a>
                <span className="mx-1 print:hidden">|</span> <span className="sm:hidden"><br/></span>💻 <a className="text-blue-700 hover:underline" target='_blank' rel="noopener noreferrer" href="https://github.com/kneeraazon404">GitHub</a>
                <span className="mx-1 print:hidden">|</span> <span className="sm:hidden"><br/></span>🔗 <a className="text-blue-700 hover:underline" target='_blank' rel="noopener noreferrer" href="https://linkedin.com/in/kneeraazon">LinkedIn</a>
              </p>
            </div>
          </div>
        </header>

        <Section title="📋 Professional Summary">
          <p className="text-sm leading-relaxed text-gray-700">{professionalSummary}</p>
        </Section>

        <Section title="🔧 Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="bg-blue-50 p-3 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700 mb-1">{skillSet.category}</h3>
                <ul className="list-disc list-inside space-y-0.5 text-gray-700">
                  {skillSet.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="💼 Professional Experience">
          {experiences.map((exp, index) => (
            <Entry key={index} title={`${exp.title} `} subtitle={`${exp.company} ${exp.location ? `(${exp.location})` : ''} | ${exp.period}`} details={exp.details} />
          ))}
        </Section>

        <Section title="🚀 Selected Projects">
          {projects.map((project, index) => (
             <div key={index} className="mb-4"> {/* Use div instead of Entry if no bullet points needed directly */}
                <h3 className="text-md font-semibold text-blue-800">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          ))}
        </Section>


        <Section title="🎓 Education">
          {education.map((edu, index) => (
            <Entry key={index} title={edu.degree} subtitle={`${edu.institution}, ${edu.location} | ${edu.period}`} />
          ))}
        </Section>

        <Section title="📜 Certifications">
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2 text-sm">
                <p className="font-medium text-gray-700">{cert.name} {cert.issuer && <span className="text-gray-600 italic"> – {cert.issuer}</span>}</p>
            </div>
          ))}
        </Section>

        <Section title="👨‍💻 Additional Training">
          {training.map((train, index) => (
             <div key={index} className="mb-2 text-sm">
                <h3 className="font-semibold text-blue-800">{train.name}</h3>
                <p className="text-gray-700">{train.description} – <span className="italic">{train.issuer}</span></p>
            </div>
          ))}
        </Section>
      </div>
    </div>
  );
}
