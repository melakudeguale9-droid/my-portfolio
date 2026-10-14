"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const { innerWidth, innerHeight } = window;
      const xOffset = (e.clientX / innerWidth - 0.5) * 16;
      const yOffset = (e.clientY / innerHeight - 0.5) * 16;
      setTilt({ x: xOffset, y: yOffset });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070b19] text-slate-200 font-sans selection:bg-blue-600 selection:text-white overflow-x-clip">
      
      {/* 1. Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed -inset-px z-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.05), transparent 70%)`,
        }}
      />

      {/* 2. Floating Animated Background Ambient Shapes */}
      <div
        className="fixed inset-0 pointer-events-none overflow-clip transition-transform duration-700 ease-out z-0"
        style={{
          transform: `translate(${tilt.x * 1.5}px, ${tilt.y * 1.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-32 h-32 border border-blue-500/10 rotate-45 rounded-2xl" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 border border-indigo-500/10 rotate-12 rounded-2xl" />
      </div>

      {/* 3. Sticky Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#070b19]/85 border-b border-slate-800/80 px-6 py-4">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-blue-500 tracking-wide hover:text-blue-400 transition">
           Melaku
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Training</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <a
            href="mailto:melakudeguale9@gmail.com"
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-sm font-semibold transition shadow-md shadow-blue-600/30"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* 4. Full Dynamic Interface Container */}
      <div
        className="relative z-10 transition-transform duration-500 ease-out"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x * 0}deg) rotateX(${-tilt.y * 0}deg)`,
        }}
      >
        <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 pt-40 md:pt-48 pb-14 space-y-28">
          
          {/* Hero Section */}
          <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Melaku Deguale</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200">
                Information Science and Technology Student
              </p>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                Information Science and Technology student at Debre Berhan University with a strong interest in cybersecurity, Linux, networking, and web application security. Developing practical skills through cybersecurity training and the EthioVuln project.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm transition shadow-lg shadow-blue-500/25"
                >
                  View My Projects
                </a>
                <a
                  href="mailto:melakudeguale9@gmail.com"
                  className="px-6 py-3.5 rounded-xl bg-[#0f172a] hover:bg-[#1e293b] text-slate-200 border border-slate-800 font-semibold text-sm transition"
                >
                  Download CV
                </a>
              </div>

              <div className="flex items-center gap-6 pt-3 text-sm text-slate-400">
                <a href="https://github.com/melakudeguale9-droid" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">github</a>
                <a href="https://linkedin.com/in/melaku-deguale-7803ba416" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">linkedin</a>
                <a href="mailto:melakudeguale9@gmail.com" className="hover:text-blue-400 transition">email</a>
              </div>
            </div>

            {/* Glowing Avatar Frame with Floating Badges */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 shadow-2xl shadow-blue-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-[#070b19] flex items-center justify-center text-5xl font-black text-blue-400">
                  MD
                </div>
              </div>
              {/* Floating Orbit Badges */}
              <div className="absolute top-2 right-4 sm:right-10 w-12 h-12 rounded-full bg-[#0f172a] border border-slate-700 shadow-xl flex items-center justify-center text-lg animate-bounce">
                🚀
              </div>
              <div className="absolute bottom-4 left-4 sm:left-10 w-12 h-12 rounded-full bg-[#0f172a] border border-slate-700 shadow-xl flex items-center justify-center text-lg animate-pulse">
                💡
              </div>
            </div>
          </section>

          {/* About Me Section */}
          <section id="about" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                About <span className="text-blue-500">Me</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Summary, education background, and career objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* My Story Card */}
              <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-5">
                <h3 className="text-2xl font-bold text-white">My Story</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I'm <strong>Melaku Deguale</strong>, an <strong>Information Science and Technology student at Debre Berhan University</strong> with a strong interest in cybersecurity, Linux, networking, and web application security.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Developing practical skills through cybersecurity training and the <strong>EthioVuln</strong> web vulnerability assessment project. Seeking an internship to learn from experienced professionals, strengthen technical skills, and contribute to a security team.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Actively practicing Linux administration, security monitoring, defensive security, and capture-the-flag (CTF) exercises.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/80 text-sm">
                  <div>
                    <span className="text-blue-400 block font-semibold">University:</span>
                    <span className="text-slate-300">Debre Berhan University</span>
                  </div>
                  <div>
                    <span className="text-blue-400 block font-semibold">Education:</span>
                    <span className="text-slate-300">Information Science & Technology</span>
                  </div>
                  <div>
                    <span className="text-blue-400 block font-semibold">Phone:</span>
                    <span className="text-slate-300">+251 929 222 356</span>
                  </div>
                  <div>
                    <span className="text-blue-400 block font-semibold">Status:</span>
                    <span className="text-slate-300">Currently Enrolled</span>
                  </div>
                </div>
              </div>

              {/* Interests & Goals Card */}
              <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
                <h3 className="text-2xl font-bold text-white">Career Objective</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To gain practical experience through a cybersecurity internship, contribute responsibly to authorized security work, and continue developing skills in vulnerability assessment, network security, and web application security.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Web application security fundamentals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Vulnerability assessment concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Linux fundamentals & Kali Linux
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Security monitoring & defensive security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Capture-the-flag (CTF) exercises
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    Python & FastAPI backend development
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section id="skills" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Technical <span className="text-blue-500">Skills</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Technologies, programming languages, operating systems, and platforms .
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Programming, Web & Frameworks Card */}
              <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>💻</span> Programming & Development
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Python",
                    "FastAPI",
                    "C",
                    "C++",
                    "JavaScript",
                    "TypeScript",
                    "HTML",
                    "CSS",
                    "Next.js",
                  ].map((skill) => (
                    <div key={skill} className="p-3.5 rounded-xl bg-[#131c31] border border-slate-800 text-center font-medium text-xs sm:text-sm text-slate-200 hover:border-blue-500 transition">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cybersecurity, OS & Tools Card */}
              <div className="p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>🛡️</span> Cybersecurity & Tools
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "Kali Linux",
                    "Linux",
                    "Windows",
                    "Web Security",
                    "Vulnerability Assessment",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "TryHackMe",
                  ].map((skill) => (
                    <div key={skill} className="p-3.5 rounded-xl bg-[#131c31] border border-slate-800 text-center font-medium text-xs sm:text-sm text-slate-200 hover:border-blue-500 transition">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="experience" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Cybersecurity <span className="text-blue-500">Training</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Hands-on cybersecurity training and practical learning activities.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* Training Item 1 */}
              <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">INSA Cybersecurity Bootcamp</h3>
                    <p className="text-sm text-blue-400 font-medium">Information Network Security Administration</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30">Bootcamp Training</span>
                    <span className="text-xs text-slate-500">5th Batch (2026)</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Cybersecurity training with practical learning activities in Linux, security monitoring, defensive security, and capture-the-flag (CTF) exercises.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Linux", "Security Monitoring", "Defensive Security", "CTF Exercises", "TryHackMe"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-[#131c31] text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Debre Berhan University</h3>
                    <p className="text-sm text-blue-400 font-medium">Information Science and Technology</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/30">Debre Berhan</span>
                    <span className="text-xs text-slate-500">Currently Enrolled</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Academic coursework covering computer science foundations, networking fundamentals, programming languages, and web application architectures.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Information Science", "Networking", "Linux Fundamentals", "Web Development"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-md bg-[#131c31] text-slate-300 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

         {/* Featured Projects Section */}
          <section id="projects" className="space-y-10 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Featured <span className="text-blue-500">Projects</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                A showcase of vulnerability assessment and software platforms I've developed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {/* Project 1: EthioVuln */}
              <div className="rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Banner Header Image */}
                <div className="h-48 w-full bg-gradient-to-br from-blue-900/40 via-slate-900 to-[#0d1424] border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center relative">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-2xl mb-2">
                    🛡️
                  </div>
                  <span className="text-lg font-black text-white tracking-wide">EthioVuln Platform</span>
                  <span className="text-[11px] font-mono text-blue-400 mt-1">Web Vulnerability Assessment</span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">EthioVuln Platform</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      A platform supporting web application vulnerability assessment, organizing scan results, and generating findings into structured security reports[cite: 16].
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Python[cite: 16]", "FastAPI[cite: 16]", "Next.js[cite: 16]", "TypeScript[cite: 16]"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Feature Bullets with Dots */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Vulnerability Assessment Workflow
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Automated Finding Reports
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        FastAPI & Celery Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Responsive Next.js Interface
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    <a
                      href="#home"
                      className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold transition shadow-md shadow-blue-500/25"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/melakudeguale9-droid/ethiovuln"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-2.5 rounded-xl bg-[#172138] hover:bg-[#1e2a47] text-slate-200 border border-slate-700 text-xs font-semibold transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: Defensive Security Labs */}
              <div className="rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Banner Header Image */}
                <div className="h-48 w-full bg-gradient-to-br from-indigo-900/40 via-slate-900 to-[#0d1424] border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center relative">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-2xl mb-2">
                    🔒
                  </div>
                  <span className="text-lg font-black text-white tracking-wide">Defensive Security Labs</span>
                  <span className="text-[11px] font-mono text-indigo-400 mt-1">Linux & Security Monitoring</span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Defensive Security Labs</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Hands-on practical security monitoring, defensive security investigations, and capture-the-flag (CTF) exercises on Kali Linux and TryHackMe.
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Kali Linux", "TryHackMe", "CTF", "Monitoring"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Feature Bullets with Dots */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Security Event Monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Defensive Security Practice
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        CTF Solving Methodologies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Linux Terminal Hardening
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    <a
                      href="#home"
                      className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold transition shadow-md shadow-blue-500/25"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/melakudeguale9-droid"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-2.5 rounded-xl bg-[#172138] hover:bg-[#1e2a47] text-slate-200 border border-slate-700 text-xs font-semibold transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3: Software & Web Development */}
              <div className="rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl">
                {/* Banner Header Image */}
                <div className="h-48 w-full bg-gradient-to-br from-cyan-900/40 via-slate-900 to-[#0d1424] border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl mb-2">
                    💻
                  </div>
                  <span className="text-lg font-black text-white tracking-wide">Developer Portfolio</span>
                  <span className="text-[11px] font-mono text-cyan-400 mt-1">Full-Stack Application</span>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Portfolio & Web Apps</h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      Personal web projects showcasing security credentials, developer workflows, responsive interfaces, and interactive 3D UI architecture.
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["Next.js[cite: 16]", "React", "Tailwind CSS", "Git[cite: 16]"].map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Feature Bullets with Dots */}
                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Modern Responsive UI
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Interactive Cursor Lighting
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Version Control (Git & GitHub)[cite: 16]
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Component Architecture
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-6">
                    <a
                      href="#home"
                      className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold transition shadow-md shadow-blue-500/25"
                    >
                      View Demo
                    </a>
                    <a
                      href="https://github.com/melakudeguale9-droid"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center py-2.5 rounded-xl bg-[#172138] hover:bg-[#1e2a47] text-slate-200 border border-slate-700 text-xs font-semibold transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Certifications & Achievements Section */}
          <section id="achievements" className="space-y-10 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Certifications & <span className="text-blue-500">Achievements</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Verified Nanodegree programs, academic credentials, and specialized tech certifications.
              </p>
            </div>

            {/* Sub-section Header */}
            <div className="flex items-center gap-2 pt-4">
              <span className="text-2xl text-amber-400">🏆</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                Professional Credentials
              </h3>
            </div>

            {/* 3-Column Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              
              {/* Card 1: INSA Cybersecurity Bootcamp */}
              <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-5 shadow-lg">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">
                    INSA Cyber Security Bootcamp
                  </h4>
                  <p className="text-xs font-semibold text-blue-400">
                    July - October 2026 • 5th Batch
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Completed practical training in Linux, security monitoring, defensive security, and CTF. Developed the EthioVuln platform as a capstone project.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Linux", "Defensive Security", "CTF", "OWASP ZAP"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-auto">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    Graduate
                  </span>
                  <a
                    href="/certificates/insa-bootcamp.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131c31] hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </div>

              {/* Card 2: Udacity 4 Nanodegree Programs */}
              <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-5 shadow-lg">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">
                    Udacity Nanodegree Programs
                  </h4>
                  <p className="text-xs font-semibold text-blue-400">
                    Nov 2025 • Verified Certificates
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Successfully completed 4 Nanodegree programs from Udacity, focusing on software engineering, data analysis, artificial intelligence, and mobile app development.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Android Developer", "Data Analysis", "AI Fundamentals", "Programming"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-auto">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    Verified (4x)
                  </span>
                  <a
                    href="/certificates/udacity-certificates.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131c31] hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                  >
                    View Certificates ↗
                  </a>
                </div>
              </div>

              {/* Card 3: 12 e-SHE Ministry of Education Certs */}
              <div className="p-7 rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between space-y-5 shadow-lg">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">
                    e-SHE Academic Credentials
                  </h4>
                  <p className="text-xs font-semibold text-blue-400">
                    Nov 2025 • Ministry of Education
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Received passing grades in 12 e-SHE courses offered by the Ministry of Education in partnership with Mastercard Foundation and Arizona State University.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {[
                      "AI Essentials", 
                      "Online Safety", 
                      "Academic Integrity", 
                      "2FA Security",
                      "MS Word",
                      "Time Mgmt",
                      "Study Skills",
                      "Evaluate Resources"
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1a253c] text-blue-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 mt-auto">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Verified (12x)
                  </span>
                  <a
                    href="/certificates/eshe-certificates.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-[#131c31] hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                  >
                    View Certificates ↗
                  </a>
                </div>
              </div>
              
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-8 scroll-mt-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
                Get In <span className="text-blue-500">Touch</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base">
                Seeking an internship to learn from experienced professionals and contribute to a security team.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Connect Links Card */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl font-bold text-white">Let's Connect</h3>
                
                <a
                  href="https://github.com/melakudeguale9-droid"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                    GH
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">GitHub</h4>
                    <p className="text-xs text-slate-400">github.com/melakudeguale9-droid</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/melaku-deguale-7803ba416"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                    IN
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">LinkedIn</h4>
                    <p className="text-xs text-slate-400">linkedin.com/in/melaku-deguale-7803ba416</p>
                  </div>
                </a>

                <a
                  href="mailto:melakudeguale9@gmail.com"
                  className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 hover:border-blue-500/40 transition flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Email</h4>
                    <p className="text-xs text-slate-400">melakudeguale9@gmail.com</p>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Phone</h4>
                    <p className="text-xs text-slate-400">+251 929 222 356</p>
                  </div>
                </div>
              </div>

              {/* Message Input Form Card */}
              <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-4">
                <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 rounded-xl bg-[#131c31] border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-xl bg-[#131c31] border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject *"
                    className="w-full px-4 py-3 rounded-xl bg-[#131c31] border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                  <textarea
                    rows={4}
                    placeholder="Message *"
                    className="w-full px-4 py-3 rounded-xl bg-[#131c31] border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition shadow-lg shadow-blue-600/30"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="text-center py-12 px-6 rounded-2xl bg-gradient-to-b from-[#0d1424] to-[#070b19] border border-slate-800/80 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Collaborate?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Seeking an internship to learn from experienced professionals, strengthen technical skills, and contribute to a security team.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/melakudeguale9-droid"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-[#131c31] hover:bg-slate-800 text-slate-300 border border-slate-700 text-sm font-semibold transition"
              >
                View My GitHub
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} Melaku Deguale. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://github.com/melakudeguale9-droid" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">GitHub</a>
              <a href="https://linkedin.com/in/melaku-deguale-7803ba416" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
              <a href="mailto:melakudeguale9@gmail.com" className="hover:text-blue-400 transition">Email</a>
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}