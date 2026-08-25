const projects = [
  {
    title: 'ClanWatch',
    subtitle: 'Real-Time Family Safety, Crash Telematics & SOS Platform',
    description:
      'A production-grade family security application combining high-accuracy live GPS location sharing, PostGIS-backed geofencing, accelerometer-powered vehicle crash detection (>4.5G deceleration), offline SMS fallbacks, and real-time STOMP WebSocket emergency broadcasting across a role-based household model. Built with Flutter & Dart on mobile and Java 21 Spring Boot 4.1 with PostgreSQL + PostGIS & Spring Security on the backend.',
    tags: ['Flutter', 'Dart', 'Java 21', 'Spring Boot', 'PostgreSQL', 'PostGIS', 'WebSockets', 'Google Maps'],
    github: 'https://github.com/esumbrandon',
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
    title: 'PSD2 & Open Finance Banking Platform',
    subtitle: 'Berlin Group Specification V2 Implementation',
    description:
      'High-security banking API microservice suite implementing the Berlin Group Specification V2 for PSD2 and Open Finance compliance. Features Keycloak IAM integration, customized FAPI security profiles, OAuth2/OpenID Connect flows, ACID transaction handling, and an Angular management console routed and cached via Nginx reverse proxies.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'Keycloak', 'Angular', 'Nginx', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/esumbrandon',
    demo: 'https://github.com/esumbrandon',
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

const Project = () => {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)', paddingTop: '80px', color: 'var(--text-primary)' }}
    >
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 sm:mb-6 border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            Selected Work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A collection of production platforms, mobile applications, and open-source systems.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border overflow-hidden card-hover flex flex-col"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Accent bar */}
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

                {/* Tags */}
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

                {/* Links */}
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

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-20">
          <p className="text-base sm:text-lg mb-5 sm:mb-6" style={{ color: 'var(--text-secondary)' }}>
            Want to collaborate on a project or discuss an engineering role?
          </p>
          <a
            href="mailto:esumbrandon074@gmail.com"
            className="w-full sm:w-auto inline-flex justify-center px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'var(--accent)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Project;