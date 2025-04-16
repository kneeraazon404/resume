'use client';

import Image from 'next/image';

export default function Page() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-16 py-2 bg-white text-gray-900 shadow-lg rounded-xl space-y-[2px] print:space-y-[2px] print:py-0 print:px-[6px] print:shadow-none print:rounded-none print:bg-white print:text-black text-[12pt] font-normal leading-snug">
      <div className="flex justify-end print:hidden mt-8">
        <button
          onClick={handlePrint}
          className="mb-3 px-4 py-1 border border-gray-300 rounded text-sm font-semibold hover:bg-gray-100"
        >
          Print as PDF
        </button>
      </div>

      <header className="flex flex-col sm:flex-row items-end gap-2 sm:gap-4 py-4 ">
        <div className="flex justify-center items-center">
          <Image
        src="/profile.jpg"
        alt="Nirajan Karki"
        width={150}
        height={150}
        className="rounded-full border-4 border-blue-900 object-cover"
          />
        </div>
        <div className="text-left text-sm sm:text-base">
          <h1 className="text-3xl font-bold text-blue-900">Nirajan Karki</h1>
          <h2 className="text-xl text-blue-600 opacity-70">Senior Python Developer · Full-Stack Engineer</h2>
          
          <div className="text-sm">
        <p className="mt-2">
        📍 Kathmandu, Nepal · 📧 <a className="text-blue-700 hover:underline" href="mailto:kneeraazon@gmail.com" target='_blank'>kneeraazon@gmail.com</a> · 📞 9844395719
        </p>
        <p >
          🌐 <a className="text-blue-700 hover:underline" target='_blank' href="http://kneeraazon.com/">kneeraazon.com</a> · 💻 <a className="text-blue-700 hover:underline" target='_blank' href="https://github.com/kneeraazon404">GitHub</a> · 🔗 <a className="text-blue-700 hover:underline" target='_blank' href="https://linkedin.com/in/kneeraazon">LinkedIn</a>
        </p></div>
        </div>
      </header>

  

      <section>
        <h2 className="text-xl font-semibold text-blue-900 py-2 border-b">Professional Summary</h2>
        <p className="text-sm leading-relaxed py-2">Ready to turn your wildest software dreams into a code-slinging reality? <br /> Look no further, your search for the ultimate developer ends here! ✨ <br /> <br /> With a knack for crafting elegant solutions and a passion for pushing the boundaries of technology, I thrive on challenges that require innovative thinking and technical prowess. Whether it’s building robust APIs, automating complex workflows, or creating seamless user experiences, I’m all about delivering top-notch results that exceed expectations.</p>

        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>End-to-End Web Development</li>
          <li>Scalable API Architecture</li>
          <li>Automation & Data Pipelines</li>
          <li>Cloud Infrastructure (AWS)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-900 border-b py-2">Key Projects</h2>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">CMEDAI – Real-time Speech Transcriber</h3>
          <p className="text-sm italic">FastAPI + WebSocket for low-latency voice processing</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Live transcription with sub-second delay</li>
            <li>Custom backend with Whisper integration</li>
            <li>Secure, scalable architecture</li>
          </ul>
        </div>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">Feedback Generator – AI Career Assistant</h3>
          <p className="text-sm italic">GPT-4 & LangChain-powered resume analysis</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Delivered contextual insights on user profiles</li>
            <li>Integrated LangChain agents for prompt refinement</li>
            <li>Improved job shortlist rate by 30% for users</li>
          </ul>
        </div>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">Stock & Options Scanner</h3>
          <p className="text-sm italic">AWS-powered financial data pipeline</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Asynchronous stock scanning with polygon.io</li>
            <li>Built dashboard for real-time analytics</li>
            <li>Used Docker, Lambda & S3 for infrastructure</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-900 border-b py-2 mt-2">Experience</h2>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">Freelance Python Developer · Upwork</h3>
          <p className="text-sm italic">Feb 2021 – Present</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Completed 80+ projects with consistent 5-star ratings</li>
            <li>Specialized in backend systems and automation</li>
            <li>Maintained 100% client retention</li>
          </ul>
        </div>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">Python Developer · Pathway Technologies</h3>
          <p className="text-sm italic">Jun 2021 – May 2022</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Developed RESTful APIs with Django</li>
            <li>Integrated frontend with React and backend services</li>
            <li>Optimized performance and improved CI/CD processes</li>
          </ul>
        </div>

        <div className="space-y-1 mt-6">
          <h3 className="text-md font-semibold text-blue-900">Full-Stack Developer · Merohealth</h3>
          <p className="text-sm italic">Feb 2019 – Feb 2021</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Built a healthcare dashboard for 10K+ users</li>
            <li>Ensured data privacy and security compliance</li>
            <li>Used React, Tailwind CSS, Django stack</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-900 border-b py-1">Technical Skills</h2>
        <div className="grid sm:grid-cols-2 gap-4  text-sm py-2 ">
          <div className="bg-blue-50 rounded-lg py-4 shadow-emerald-800 px-8">
            <h3 className="font-semibold text-blue-900 mb-1">Languages</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg  py-4 shadow-emerald-800 px-8">
            <h3 className="font-semibold text-blue-900 mb-1">Frameworks</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Django / DRF</li>
              <li>FastAPI</li>
              <li>React / Next.js</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg  py-4 shadow-emerald-800 px-8">
            <h3 className="font-semibold text-blue-900 mb-1">Databases</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg  py-4 shadow-emerald-800 px-8">
            <h3 className="font-semibold text-blue-900 mb-1">Cloud & DevOps</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>AWS (EC2, S3, Lambda)</li>
              <li>Docker, Nginx</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-900 border-b py-2">Education</h2>
        <div className=" space-y-4 text-sm py-2">
          <div>
            <h3 className="font-semibold text-blue-900">Bachelor of Engineering (BE)</h3>
            <p>Paschimanchal Campus, Tribhuvan University · Pokhara · 2016 – 2021</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Higher Secondary – Science</h3>
            <p>Einstein Academy · Lalitpur · 2014 – 2016</p>
          </div>
        </div>
      </section>
    </div>
  );
}
