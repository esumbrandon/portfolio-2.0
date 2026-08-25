import Image from 'next/image';
import MeImage from './component/nav/Assets/Logo/me.png';
import TestUsersSection from './component/test-users/page';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'TypeScript', 'JavaScript', 'Dart', 'Python', 'Kotlin', 'Swift', 'C', 'C++'],
  },
  {
    category: 'Backend & Security',
    skills: [
      'Spring Boot',
      'Spring Security',
      'Keycloak',
      'OAuth2 / OIDC',
      'REST APIs',
      'Microservices',
      'Node.js',
      'Express',
      'Django',
      'FAPI Security Profiles',
    ],
  },
  {
    category: 'Frontend & Mobile',
    skills: ['React', 'Next.js', 'Angular', 'Flutter', 'React Native', 'SwiftUI', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'SQL', 'MariaDB', 'MySQL', 'Oracle', 'MongoDB', 'Supabase'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux', 'Nginx', 'GitLab CI'],
  },
  {
    category: 'Architecture, AI & Tools',
    skills: [
      'Microservices Architecture',
      'System Design',
      'PSD2 / Open Finance APIs',
      'AI Agents & Prompt Engineering',
      'TDD (JUnit, Mockito, Karma)',
      'Postman & OpenAPI',
      'Git & GitHub',
      'Figma & Adobe XD',
      'Agile / Scrum',
    ],
  },
];

const experience = [
  {
    role: 'Senior Software Engineer / Senior Backend Engineer',
    company: 'adorsys GmbH',
    period: '03/2024 — 04/2026',
    location: 'Remote',
    current: false,
    highlights: [
      'Developed and maintained secure banking APIs using Java, Spring Boot, Spring Security, OAuth2, and OpenID Connect for PSD2 & Open Finance solutions.',
      'Played a key role in implementing the Berlin Group Specification V2 APIs, serving as second-in-command to the Technical Lead for compliance & architecture.',
      'Integrated Keycloak Identity & Access Management (IAM) for authentication workflows in xs2a V2, customizing FAPI security profiles and OAuth2 authorization flows.',
      'Built and maintained frontend banking interface using TypeScript and Angular, configuring Nginx for microservices reverse proxying, API routing, and caching.',
      'Engineered financial transaction workflows, payment systems, and banking simulations adhering strictly to ACID principles.',
      'Designed scalable backend microservices architectures and maintained DevOps workflows with Docker, Kubernetes, AWS, and GitLab CI/CD.',
      'Enforced Test-Driven Development (TDD) using Spring Boot Starter Test, JUnit, Mockito, Karma, and Jasmine; validated APIs with Postman & OpenAPI collections.',
      'Mentored engineering team members on software engineering best practices, code reviews, and Agile Scrum delivery.',
    ],
  },
  {
    role: 'Co-Founder & Full-Stack Software Engineer',
    company: 'BridgeLabs',
    period: '02/2022 — 10/2023',
    location: 'Remote',
    current: false,
    highlights: [
      'Co-founded a software venture delivering scalable web and mobile applications across the complete SDLC from requirement gathering to cloud deployment.',
      'Designed and developed full-stack web applications using React, JavaScript, TypeScript, and Node.js with responsive Material UI and Tailwind CSS interfaces.',
      'Migrated client mobile applications from React Native to Flutter & Dart, boosting runtime performance, reducing APK size, and improving cross-platform maintainability.',
      'Architected system blueprints and designed low/high-fidelity UI/UX prototypes with Adobe XD and Figma.',
      'Modernized legacy codebases through microservices refactoring and containerized deployments using Docker on AWS cloud infrastructure.',
      'Led engineering teams, conducted code reviews, managed GitHub repositories, and coordinated software delivery milestones.',
    ],
  },
  {
    role: 'Mobile Application Developer / Full-Stack Engineer (Intern)',
    company: 'Bohiko (Bohikor)',
    period: '02/2021 — 11/2021',
    location: 'Buea, Cameroon',
    current: false,
    highlights: [
      'Developed and maintained fintech mobile application for personal finance and budget management connected to Spring Boot backend services.',
      'Built cross-platform mobile applications using React Native and migrated core modules to Flutter for superior performance and smaller bundle size.',
      'Implemented CI/CD pipelines and automated containerized deployment workflows using Docker on Linux environments.',
      'Optimized application performance through debugging, unit testing, and rigorous code quality improvements.',
      'Collaborated closely with UI/UX designers using Figma to deliver responsive, accessible user interfaces.',
    ],
  },
];

const projects = [
  {
    title: 'ClanWatch',
    subtitle: 'Real-Time Family Safety, Crash Telematics & SOS Platform',
    description:
      'A production-grade family security application combining high-accuracy live GPS location sharing, PostGIS-backed geofencing, accelerometer-powered vehicle crash detection (>4.5G deceleration), offline SMS fallbacks, and real-time STOMP WebSocket emergency broadcasting across a role-based household model. Built with Flutter & Dart on mobile and Java 21 Spring Boot 4.1 with PostgreSQL + PostGIS & Spring Security on the backend.',
    tags: ['Flutter', 'Dart', 'Java 21', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'WebSockets', 'Google Maps'],
    github: 'https://github.com/esumbrandon/clan-watch',
    demo: 'https://github.com/esumbrandon',
  },
  {
    title: 'LilyFit',
    subtitle: 'Advanced Fitness & Nutrition Tracking Application',
    description:
      'Independently designed and architected a production-ready iOS and Android application using Flutter and Dart. Incorporates native platform channels (Kotlin/Java on Android, Swift/Objective-C on iOS) for low-level OS/device access, automated BMI tracking, hydration monitoring, weight analytics, and a dynamic macro/calorie goal calculation engine. Powered by Supabase and PostgreSQL for secure relational user logs and analytics.',
    tags: ['Flutter', 'Dart', 'Kotlin', 'Swift', 'Supabase', 'PostgreSQL', 'PlantUML'],
    github: 'https://github.com/esumbrandon/lilyFit',
    demo: 'https://github.com/esumbrandon/lilyFit',
  },
  {
    title: 'Portfolio 2.0',
    subtitle: 'High-Performance Developer Portfolio & Beta Portal',
    description:
      'A modern, fully responsive personal portfolio and beta testing platform built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features custom monochrome design tokens, glassmorphism UI, client-side test-user management with CSV export capability, and clean SEO architecture.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React', 'Jest'],
    github: 'https://github.com/esumbrandon/portfolio-2.0',
    demo: 'https://github.com/esumbrandon/portfolio-2.0',
  },
];

const education = [
  {
    institution: 'University of Buea, Cameroon',
    degree: 'Bachelor of Engineering (B.Eng) in Computer Software Engineering',
    period: 'Graduated 2022',
    detail: 'Graduated with First Class Upper honours (GPA: 3.60 / 4.0). Focused on software architecture, algorithms, database systems, distributed computing, and systems programming.',
  },
  {
    institution: 'Summerset Bilingual College, Buea',
    degree: 'Advance Level Certificate (A/L) in Science',
    period: 'Secondary Education',
    detail: 'Studies in Mathematics, Physics, Chemistry, Biology, and Computer Science.',
  },
  {
    institution: 'Nabesk Comprehensive College, Buea',
    degree: 'Ordinary Level Certificate (O/L) in Science',
    period: 'Secondary Education',
    detail: 'Comprehensive curriculum in Mathematics, Physics, Chemistry, Computer Science, Biology, and languages.',
  },
  {
    institution: "ST Mary's Primary School, Tiko, Cameroon",
    degree: 'First School Leaving Certificate (FSLC)',
    period: 'Primary Education',
    detail: 'Class 1 through 6 with First School Leaving Certificate & Common Entrance.',
  },
];

const languages = [
  { name: 'English', level: 'Native / Fluent' },
  { name: 'French', level: 'Professional Working Proficiency' },
];

export default function App() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

      {/* ─────────────── HERO ─────────────── */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: '80px' }}
      >
        {/* dot-grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* glow orbs */}
        <div
          className="absolute top-1/4 right-0 sm:right-1/4 w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] rounded-full opacity-20 blur-[100px] sm:blur-[140px] pointer-events-none"
          style={{ background: 'var(--accent-light)' }}
        />
        <div
          className="absolute bottom-1/4 left-0 sm:left-1/4 w-[240px] h-[240px] sm:w-[450px] sm:h-[450px] rounded-full opacity-15 blur-[90px] sm:blur-[120px] pointer-events-none"
          style={{ background: 'var(--accent-cyan)' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 sm:mb-8 border max-w-full text-left sm:text-center"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background: 'var(--text-primary)' }}
            />
            <span className="truncate sm:overflow-visible">Available for Senior &amp; Full-Stack Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-4 leading-[1.1] tracking-tight break-words">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Esum Brandon Oben</span>
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 leading-snug"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full-Stack Software Engineer &amp; Backend Specialist
          </p>

          <p
            className="text-base sm:text-lg max-w-3xl mb-8 sm:mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            7 years of experience designing, developing, deploying, and maintaining scalable banking platforms,
            APIs, microservices, and cross-platform mobile apps. Strong expertise in Java/Spring Boot, PSD2 &amp;
            Open Finance compliance (Berlin Group Spec V2), Keycloak IAM, Angular, React, Next.js, and Flutter.
          </p>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'var(--accent)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                boxShadow: '0 0 32px var(--accent-glow)',
              }}
            >
              View Featured Work
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              About Me
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-secondary)',
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40 pointer-events-none">
          <span
            className="text-xs tracking-[0.2em] uppercase font-semibold"
            style={{ color: 'var(--text-secondary)' }}
          >
            scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, var(--text-primary), transparent)',
            }}
          />
        </div>
      </section>

      {/* ─────────────── ABOUT ─────────────── */}
      <section
        id="about"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Profile photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 sm:-inset-4 rounded-3xl blur-xl sm:blur-2xl opacity-40"
                  style={{
                    background: 'var(--accent-glow)',
                  }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden border shadow-xl w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
                  style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
                >
                  <Image
                    src={MeImage}
                    alt="Esum Brandon Oben"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)',
                }}
              >
                Professional Background
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Architecting <span className="gradient-text">resilient systems</span> &amp; modern apps
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                I&apos;m Esum Brandon Oben, a Full-Stack Software Engineer with 7 years of experience
                building high-throughput banking systems, microservices, cloud infrastructure, and responsive web &amp; mobile
                applications.
              </p>

              <p
                className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                At <strong>adorsys GmbH</strong>, I contributed to European Open Banking infrastructure,
                implementing the Berlin Group Specification V2, Keycloak IAM integration, FAPI security profiles,
                and transactional ACID systems. Previously, as Co-Founder at <strong>BridgeLabs</strong>, I led full-stack web
                and cross-platform mobile products for multiple clients from architecture to production.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {[
                  { value: '7+', label: 'Years Exp.' },
                  { value: '3+', label: 'Companies/Ventures' },
                  { value: '20+', label: 'Technologies' },
                  { value: '3.60', label: 'B.Eng GPA (1st Class)' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3.5 sm:p-4 rounded-xl border card-hover text-center"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  >
                    <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs mt-1 font-medium leading-tight" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SKILLS ─────────────── */}
      <section
        id="skills"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Comprehensive <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Battle-tested technologies, frameworks, and architecture paradigms utilized across 7 years of engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((group) => (
              <div
                key={group.category}
                className="p-5 sm:p-6 rounded-2xl border card-hover flex flex-col"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b" style={{ borderColor: 'var(--border)' }}>
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: 'var(--text-primary)' }} />
                  <h3 className="font-bold text-base sm:text-lg" style={{ color: 'var(--text-primary)' }}>
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium border"
                      style={{
                        background: 'var(--bg-primary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── EXPERIENCE ─────────────── */}
      <section
        id="experience"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Career History
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Track record of building mission-critical platforms, leading engineering initiatives, and delivering scalable solutions.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-2xl border overflow-hidden card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="h-1.5" style={{ background: 'var(--accent)' }} />
                <div className="p-5 sm:p-7 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
                        <span style={{ color: 'var(--text-primary)' }}>{job.company}</span>
                        <span style={{ color: 'var(--border)' }}>•</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{job.location}</span>
                      </div>
                    </div>
                    <div
                      className="self-start px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{
                        background: 'var(--bg-secondary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {job.period}
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 sm:gap-y-3">
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--text-primary)' }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── PROJECTS ─────────────── */}
      <section
        id="projects"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Selected Engineering Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Architectural designs, mobile applications, and open-source contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border overflow-hidden card-hover flex flex-col"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="h-1.5" style={{ background: 'var(--accent)' }} />
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3
                    className="text-lg sm:text-xl font-bold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>
                    {project.subtitle}
                  </p>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium border"
                        style={{
                          background: 'var(--bg-primary)',
                          color: 'var(--text-primary)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-center border transition-all duration-200 hover:scale-[1.02] active:scale-95"
                      style={{
                        background: 'var(--bg-primary)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-center border transition-all duration-200 hover:scale-[1.02] active:scale-95"
                      style={{
                        background: 'var(--accent)',
                        borderColor: 'var(--border)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      Project Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── EDUCATION & CREDENTIALS ─────────────── */}
      <section
        id="education"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              Academic Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Education &amp; <span className="gradient-text">Qualifications</span>
            </h2>
            <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Formal engineering degree and academic credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="p-5 sm:p-6 rounded-2xl border card-hover flex flex-col justify-between"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-4 mb-2">
                    <h3 className="text-base sm:text-lg font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </h3>
                    <span
                      className="self-start text-xs px-2.5 py-1 rounded-full border flex-shrink-0 font-medium"
                      style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="font-semibold text-xs sm:text-sm mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {edu.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div
            className="rounded-2xl border p-5 sm:p-6 max-w-xl mx-auto text-center"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <h3 className="font-bold text-base sm:text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              Languages
            </h3>
            <div className="flex justify-around sm:justify-center gap-6 sm:gap-12">
              {languages.map((lang) => (
                <div key={lang.name} className="flex flex-col items-center">
                  <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                    {lang.name}
                  </span>
                  <span className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── TEST USERS ─────────────── */}
      <TestUsersSection />

      {/* ─────────────── CONTACT ─────────────── */}
      <section
        id="contact"
        className="py-20 sm:py-28 md:py-32 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>

          <p
            className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            Whether you are looking for a Senior Full-Stack Engineer, want to discuss Open Banking and banking API integrations, or explore engineering collaboration — my inbox is open.
          </p>

          <div
            className="p-5 sm:p-6 rounded-2xl border mb-8 sm:mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold block mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                Email
              </span>
              <a
                href="mailto:esumbrandon074@gmail.com"
                className="font-bold text-sm sm:text-base hover:underline break-all"
                style={{ color: 'var(--text-primary)' }}
              >
                esumbrandon074@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-px h-8" style={{ background: 'var(--border)' }} />
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold block mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                Phone
              </span>
              <a
                href="tel:+237673452821"
                className="font-bold text-sm sm:text-base hover:underline"
                style={{ color: 'var(--text-primary)' }}
              >
                +237 673-452-821
              </a>
            </div>
            <div className="hidden sm:block w-px h-8" style={{ background: 'var(--border)' }} />
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-semibold block mb-0.5" style={{ color: 'var(--text-secondary)' }}>
                Location
              </span>
              <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
                Douala, Cameroon / Remote
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-3 sm:gap-4">
            <a
              href="mailto:esumbrandon074@gmail.com"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: 'var(--accent)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                boxShadow: '0 0 32px var(--accent-glow)',
              }}
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/esum-brandon-o-1ba3401b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/esumbrandon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="py-6 sm:py-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Esum Brandon Oben. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href="https://github.com/esumbrandon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium transition-colors hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/esum-brandon-o-1ba3401b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium transition-colors hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:esumbrandon074@gmail.com"
              className="text-xs sm:text-sm font-medium transition-colors hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}