import Image from 'next/image';
import MeImage from './component/nav/Assets/Logo/me.png';

const skills = [
  // Languages
  { name: 'Java', category: 'Language' },
  { name: 'C', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Dart', category: 'Language' },
  { name: 'Kotlin', category: 'Language' },
  { name: 'Python', category: 'Language' },
  // Frameworks
  { name: 'Spring Boot', category: 'Framework' },
  { name: 'Spring', category: 'Framework' },
  { name: 'Node.js', category: 'Framework' },
  { name: 'React', category: 'Framework' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Angular', category: 'Framework' },
  { name: 'Flutter', category: 'Framework' },
  { name: 'React Native', category: 'Framework' },
  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'Cloud' },
  { name: 'Kubernetes', category: 'Cloud' },
  { name: 'CI/CD', category: 'Cloud' },
  // Databases & Tools
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'SQL', category: 'Database' },
  { name: 'Git / GitHub', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
];

const categoryColors: Record<string, string> = {
  Language: '#0891b2',
  Framework: '#7c3aed',
  Cloud: '#0d9488',
  Database: '#059669',
  Tools: '#d97706',
};

const experience = [
  {
    role: 'Full-Stack Software Engineer — Senior (Backend)',
    company: 'Adorsys GmbH',
    period: 'Current',
    current: true,
    highlights: [
      'Banking APIs with Java, Spring Boot, Spring Security & OAuth2',
      'Implemented PSD2 & Open Finance API (Berlin Group Spec V2) with Keycloak',
      'Customized FAPI security profiles, OAuth2 & OpenID Connect flows',
      'DevOps with Docker, Kubernetes & AWS; AI agent & prompt engineering automation',
    ],
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    role: 'Full-Stack Software Engineer — Ex-Co-Founder',
    company: 'BridgeLabs',
    period: 'Previous',
    current: false,
    highlights: [
      'Led full SDLC for web & mobile solutions — requirement gathering to production',
      'Frontend with React & React Native; migrated mobile apps to Flutter/Dart',
      'Created architectural designs and low/high-fidelity UI/UX designs',
      'Team Lead: mentored developers and coordinated project milestones',
    ],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Bohiko',
    period: 'Previous',
    current: false,
    highlights: [
      'Built and maintained backend systems: databases, servers & REST APIs',
      'Designed & implemented CI/CD build and deployment pipelines',
      'Containerized applications using Docker on Linux environments',
      'Translated Figma UI/UX designs into functional web applications',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const projects = [
  {
    title: 'LilyFit',
    description:
      'A mobile fitness and nutrition app that lets users log their carb intake, monitor macros, and manage their fitness goals. Built with Flutter and Dart, powered by Supabase for real-time data and authentication.',
    tags: ['Flutter', 'Dart', 'Supabase', 'Mobile'],
    github: 'https://github.com/esumbrandon/lilyFit',
    demo: '#',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Portfolio 2.0',
    description:
      'A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme, smooth scroll, and clean component architecture.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    github: 'https://github.com/esumbrandon/portfolio-2.0',
    demo: '#',
    gradient: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Redux Counter App',
    description:
      'A state management demo using Redux Toolkit with React. Showcases slice patterns, actions, and real-time state updates with a clean, minimal UI.',
    tags: ['React', 'Redux Toolkit', 'TypeScript'],
    github: '#',
    demo: '#',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export default function App() {
  return (
    <div style={{ background: 'var(--bg-primary)' }}>

      {/* ─────────────── HERO ─────────────── */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden"
        style={{ paddingTop: '82px' }}
      >
        {/* dot-grid */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(167,139,250,0.7) 1px, transparent 0)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* glow orbs */}
        <div
          className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full opacity-[0.09] blur-[140px] pointer-events-none"
          style={{ background: 'var(--accent)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
          style={{ background: '#06b6d4' }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8 border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--accent-light)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-[1.05] tracking-tight">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Esum Brandon</span>
          </h1>

          <p
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full-Stack Software Engineer
          </p>

          <p
            className="text-lg max-w-2xl mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            6+ years designing, developing, and deploying scalable software solutions and
            microservices. Specialized in Banking APIs, Web &amp; Mobile applications, and
            Cloud-native architectures.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                boxShadow: '0 0 32px var(--accent-glow)',
              }}
            >
              View My Work
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 hover:border-purple-500"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              About Me
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 pointer-events-none">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: 'var(--text-secondary)' }}
          >
            scroll
          </span>
          <div
            className="w-px h-14"
            style={{
              background: 'linear-gradient(to bottom, var(--accent), transparent)',
            }}
          />
        </div>
      </section>

      {/* ─────────────── ABOUT ─────────────── */}
      <section
        id="about"
        className="py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Profile photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-25"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), #06b6d4)',
                  }}
                />
                <div
                  className="relative rounded-3xl overflow-hidden border"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <Image
                    src={MeImage}
                    alt="Brandon"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
                style={{
                  background: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                  color: 'var(--accent-light)',
                }}
              >
                About Me
              </div>

              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Passionate about{' '}
                <span className="gradient-text">building</span> great software
              </h2>

              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                I&apos;m Esum Brandon Oben, a Full-Stack Software Engineer with 6–7 years of
                experience designing, developing, deploying, and maintaining scalable software
                solutions and microservices.
              </p>

              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                Specialized in Banking APIs, PSD2/Open Finance compliance, Web &amp; Mobile
                development, and Cloud-native architectures. Currently a Senior Engineer at
                Adorsys GmbH, working on open banking infrastructure used across Europe.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '6+', label: 'Years Experience' },
                  { value: '3', label: 'Companies' },
                  { value: '15+', label: 'Technologies' },
                  { value: '100%', label: 'Dedication' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border card-hover"
                    style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
                  >
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
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
        className="py-32 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--accent-light)',
              }}
            >
              What I Use
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Technologies I use to build modern web applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl border card-hover flex flex-col gap-2"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: categoryColors[skill.category] || 'var(--accent)' }}
                />
                <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </span>
                <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── EXPERIENCE ─────────────── */}
      <section
        id="experience"
        className="py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--accent-light)',
              }}
            >
              Work History
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Companies I&apos;ve built products and grown with
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {experience.map((job) => (
              <div
                key={job.company}
                className="rounded-2xl border overflow-hidden card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${job.gradient}`} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {job.role}
                      </h3>
                      <p className="font-semibold" style={{ color: 'var(--accent-light)' }}>
                        {job.company}
                      </p>
                    </div>
                    {job.current && (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{
                          background: 'rgba(16,185,129,0.1)',
                          borderColor: 'rgba(16,185,129,0.3)',
                          color: '#34d399',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                    {job.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        {point}
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
        className="py-32 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--accent-light)',
              }}
            >
              My Work
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A collection of projects I&apos;ve built to solve real problems and explore new
              technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl border overflow-hidden card-hover flex flex-col"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium border"
                        style={{
                          background: 'var(--bg-secondary)',
                          color: 'var(--accent-light)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg text-sm font-medium text-center text-slate-400 border transition-all duration-200 hover:border-purple-500 hover:text-purple-400"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 py-2 rounded-lg text-sm font-medium text-center text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                      style={{ background: 'var(--accent)' }}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CONTACT ─────────────── */}
      <section
        id="contact"
        className="py-32 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--accent-light)',
            }}
          >
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work{' '}
            <span className="gradient-text">Together</span>
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Whether you have a project in mind, want to collaborate, or just want to say
            hello — my inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:esumbrandon074@gmail.com"
              className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
              style={{
                background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
                boxShadow: '0 0 32px var(--accent-glow)',
              }}
            >
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/esum-brandon-o-1ba3401b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 hover:border-purple-500"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/esumbrandon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 hover:border-purple-500"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                background: 'var(--bg-card)',
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="py-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Esum Brandon Oben. all rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/esumbrandon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/esum-brandon-o-1ba3401b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:esumbrandon074@gmail.com"
              className="text-sm text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
