const projects = [
  {
    title: 'Portfolio 2.0',
    description:
      'A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a dark theme, smooth layout, and clean component architecture.',
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
  {
    title: 'Weather Dashboard',
    description:
      'A weather web app displaying real-time data. Built with Next.js and integrating a third-party weather API to provide live forecasts and city search.',
    tags: ['Next.js', 'API', 'JavaScript', 'CSS'],
    github: '#',
    demo: '#',
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const Project = () => {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)', paddingTop: '96px' }}
    >
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            A collection of projects I&apos;ve built to solve problems and explore new
            technologies.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border overflow-hidden card-hover flex flex-col"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              {/* Gradient top accent bar */}
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

                {/* Tags */}
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

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-center border transition-all duration-200 hover:border-purple-500"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 py-2 rounded-lg text-sm font-medium text-center text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                    style={{ background: 'var(--accent)' }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Want to see more or collaborate on something?
          </p>
          <a
            href="mailto:brandon@example.com"
            className="inline-flex px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
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
