import React from "react";

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 print:py-0 print:bg-white text-slate-900 font-sans selection:bg-blue-200">
      {/* A4 Paper Container */}
      <div className="max-w-[21cm] min-h-[29.7cm] mx-auto bg-white p-10 sm:p-12 shadow-2xl print:shadow-none print:p-0">
        
        {/* Header */}
        <header className="border-b-2 border-slate-800 pb-4 mb-6">
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">
            Melaku Deguale
          </h1>
          <p className="text-lg font-bold text-blue-700 mt-1">
            Cybersecurity Specialist | Full-Stack Developer
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm font-medium text-slate-600">
            <a href="mailto:melakudeguale9@gmail.com" className="hover:text-blue-600">
              📧 melakudeguale9@gmail.com
            </a>
            <span>|</span>
            <span>📱 +251 929 222 356</span>
            <span>|</span>
            <a href="https://linkedin.com/in/melaku-deguale-7803ba416" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              🔗 linkedin.com/in/melaku-deguale
            </a>
            <span>|</span>
            <a href="https://github.com/melakudeguale9-droid" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              🐙 github.com/melakudeguale9-droid
            </a>
            <span>|</span>
            <a href="https://my-portfolio-g37b.vercel.app" target="_blank" rel="noreferrer" className="hover:text-blue-600 font-bold text-blue-700">
              🌐 my-portfolio-g37b.vercel.app
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 text-justify">
            Information Science and Technology student at Debre Berhan University with a strong interest in cybersecurity, Linux, networking, and web application security. Developing practical skills through intensive cybersecurity training and the engineering of the EthioVuln web vulnerability assessment project. Seeking professional opportunities to learn from experienced industry experts, strengthen technical capabilities, and contribute responsibly to a security team.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-sm text-slate-700">
            <div className="font-bold text-slate-900">Cybersecurity:</div>
            <div className="sm:col-span-3">Web App Security Fundamentals, Vulnerability Assessment, Defensive Security, CTF</div>
            
            <div className="font-bold text-slate-900">Operating Systems:</div>
            <div className="sm:col-span-3">Kali Linux, Linux Administration, Windows</div>
            
            <div className="font-bold text-slate-900">Programming:</div>
            <div className="sm:col-span-3">Python, C, C++, JavaScript/TypeScript</div>
            
            <div className="font-bold text-slate-900">Web & Frameworks:</div>
            <div className="sm:col-span-3">FastAPI, Next.js, React, Tailwind CSS, HTML, CSS</div>

            <div className="font-bold text-slate-900">Tools & Platforms:</div>
            <div className="sm:col-span-3">OWASP ZAP, Git, GitHub, GitLab, Docker, TryHackMe</div>
          </div>
        </section>

        {/* Cybersecurity Training & Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Cybersecurity Training & Experience
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-slate-900">INSA Cybersecurity Bootcamp</h3>
              <span className="text-sm font-semibold text-blue-700">Jul 2026 – Oct 2026</span>
            </div>
            <p className="text-sm italic text-slate-600 mb-1">Information Network Security Administration — 5th Batch</p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-1">
              <li>Completed intensive training with practical learning activities in Linux, security monitoring, and defensive security.</li>
              <li>Engaged in rigorous Capture-The-Flag (CTF) exercises to apply theoretical concepts to real-world scenarios.</li>
              <li>Developed and documented the <span className="font-semibold">EthioVuln</span> capstone project under Option A.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Featured Projects
          </h2>
          
          <div className="mb-4">
            <div className="flex justify-between items-baseline">
              <h3 className="text-base font-bold text-slate-900">EthioVuln — Web Vulnerability Assessment Platform</h3>
              <a href="https://github.com/melakudeguale9-droid/ethiovuln" target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-700 hover:underline">View GitHub ↗</a>
            </div>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-1 mt-1">
              <li>Developed an automated platform to support comprehensive web application vulnerability assessments.</li>
              <li>Engineered the backend using <strong>Python and FastAPI</strong>, ensuring rapid and asynchronous API processing.</li>
              <li>Built a responsive and interactive frontend dashboard utilizing <strong>Next.js and TypeScript</strong>.</li>
              <li>Implemented automated reporting logic to organize scan results and security findings into executive reports.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Education
          </h2>
          <div className="flex justify-between items-baseline">
            <h3 className="text-base font-bold text-slate-900">Debre Berhan University</h3>
            <span className="text-sm font-semibold text-slate-600">Currently Enrolled</span>
          </div>
          <p className="text-sm text-slate-700 mt-1">BSc in Information Science and Technology</p>
        </section>

        {/* Certifications */}
        <section className="mb-6">
          <h2 className="text-lg font-black text-slate-900 uppercase border-b border-slate-300 pb-1 mb-3">
            Certifications & Credentials
          </h2>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1 ml-1">
            <li><strong>Udacity Nanodegree Programs (Nov 2025):</strong> Android Developer Fundamentals, Data Analysis Fundamentals, AI Fundamentals, Programming Fundamentals.</li>
            <li><strong>e-SHE Ministry of Education (Nov 2025):</strong> 12 Verified Certificates including AI Essentials, Online Safety, Academic Integrity, 2FA, and Resource Evaluation (in partnership with Mastercard Foundation & Arizona State University).</li>
          </ul>
        </section>

      </div>
    </div>
  );
}