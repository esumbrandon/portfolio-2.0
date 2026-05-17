const skills = [
  { name: 'React / Next.js', level: 90 },
  { name: 'TypeScript / JavaScript', level: 85 },
  { name: 'CSS / Tailwind CSS', level: 88 },
  { name: 'Redux Toolkit', level: 80 },
  { name: 'Node.js / REST APIs', level: 75 },
  { name: 'Testing (Jest)', level: 70 },
];

const Bio = () => {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)', paddingTop: '96px' }}
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
                color: 'var(--accent-light)',
              }}
            >
              About Me
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Passionate about{' '}
              <span className="gradient-text">building</span> great software
            </h1>

            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I&apos;m Brandon, a full-stack developer who loves turning complex problems into
              elegant, user-friendly solutions. With a strong foundation in modern JavaScript
              frameworks and a keen eye for design, I build experiences that are both
              functional and beautiful.
            </p>

            <p
              className="text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              When I&apos;m not coding, you&apos;ll find me exploring new technologies,
              contributing to open source, or leveling up my skills with side projects.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Built' },
              { value: '8+', label: 'Technologies' },
              { value: '100%', label: 'Dedication' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl border text-center card-hover"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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
                <div className="flex justify-between text-sm">
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
                      background: 'linear-gradient(90deg, var(--accent), #06b6d4)',
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
              title: 'Frontend Development',
              description:
                'Building responsive, accessible UIs with React and Next.js. I care deeply about performance, clean markup, and great user experience.',
              icon: '⚡',
            },
            {
              title: 'Backend & APIs',
              description:
                'Designing and integrating RESTful APIs with Node.js. I build scalable, well-structured server-side logic that powers great apps.',
              icon: '🔧',
            },
            {
              title: 'State Management',
              description:
                'Managing complex application state with Redux Toolkit. Predictable data flow, clean architecture, and easy debugging.',
              icon: '🗂️',
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
