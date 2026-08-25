const skills = [
  { name: 'Java / Spring Boot', level: 95 },
  { name: 'PSD2 / Open Finance APIs & Keycloak', level: 92 },
  { name: 'TypeScript / Angular / Next.js / React', level: 90 },
  { name: 'Flutter / Dart / Cross-Platform Mobile', level: 88 },
  { name: 'Docker / Kubernetes / AWS / CI-CD', level: 85 },
  { name: 'PostgreSQL / SQL / MariaDB / Supabase', level: 88 },
];

const Bio = () => {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)', paddingTop: '96px', color: 'var(--text-primary)' }}
    >
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
              }}
            >
              About Me
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passionate about <span className="gradient-text">engineering resilient</span> software
            </h1>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I&apos;m Esum Brandon Oben, a Full-Stack Software Engineer with 7 years of experience designing,
              developing, deploying, and maintaining scalable banking platforms, microservices, and cross-platform
              mobile solutions.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Specialized in Banking, bet and other APIs, PSD2 / Berlin Group Spec V2 compliance, Keycloak IAM, and cloud DevOps on AWS with Docker and Kubernetes.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '7+', label: 'Years Experience' },
              { value: '3+', label: 'Companies/Ventures' },
              { value: '20+', label: 'Technologies' },
              { value: '3.60', label: 'B.Eng GPA (1st Class)' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border text-center card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        className="py-20 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{skill.level}%</span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      background: 'var(--accent)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What I <span className="gradient-text">Do</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Banking & Microservices',
              description:
                'Implementing PSD2 & Open Finance compliance (Berlin Group Spec V2), Keycloak IAM, FAPI profiles, and high-throughput transactional APIs.',
              icon: '🏦',
            },
            {
              title: 'Full-Stack Web Engineering',
              description:
                'Building enterprise web applications with Java/Spring Boot, TypeScript, Angular, React, and Next.js with robust TDD and Nginx routing.',
              icon: '⚡',
            },
            {
              title: 'Cross-Platform Mobile',
              description:
                'Designing production-ready iOS and Android mobile applications using Flutter and Dart with native Kotlin/Swift platform channels.',
              icon: '📱',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border card-hover"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bio;