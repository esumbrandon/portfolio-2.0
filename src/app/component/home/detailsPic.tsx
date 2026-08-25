const skills = [
  { name: 'Java / Spring Boot', category: 'Backend' },
  { name: 'Keycloak & PSD2 APIs', category: 'Security' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Flutter & Dart', category: 'Mobile' },
  { name: 'React & Next.js', category: 'Frontend' },
  { name: 'Angular & Nginx', category: 'Frontend' },
  { name: 'Docker & Kubernetes', category: 'DevOps' },
  { name: 'PostgreSQL & SQL', category: 'Database' },
  { name: 'AWS Cloud & CI/CD', category: 'DevOps' },
  { name: 'Microservices & TDD', category: 'Architecture' },
  { name: 'Python & Django', category: 'Backend' },
  { name: 'Git & GitHub / GitLab', category: 'Tools' },
];

const Details = () => {
  return (
    <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          My Tech{' '}
          <span className="gradient-text">Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base max-w-2xl mx-auto">
          A curated collection of the battle-tested tools and technologies I use to architect robust solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 sm:p-5 rounded-xl border card-hover flex flex-col gap-1.5 sm:gap-2"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full mb-1"
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className="font-semibold text-sm sm:text-base"
              style={{ color: 'var(--text-primary)' }}
            >
              {skill.name}
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;