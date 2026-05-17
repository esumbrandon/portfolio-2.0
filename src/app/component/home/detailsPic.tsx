const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Redux Toolkit', category: 'State' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'Jest', category: 'Testing' },
  { name: 'CSS / SCSS', category: 'Styling' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'Git / GitHub', category: 'Tools' },
];

const categoryColors: Record<string, string> = {
  Frontend: '#7c3aed',
  Language: '#0891b2',
  Styling: '#0d9488',
  State: '#9333ea',
  Backend: '#059669',
  Testing: '#dc2626',
  Tools: '#d97706',
};

const Details = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tech{' '}
          <span className="gradient-text">Stack</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Technologies I use to build modern web applications
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-xl border card-hover flex flex-col gap-1"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div
              className="w-2 h-2 rounded-full mb-1"
              style={{ background: categoryColors[skill.category] || 'var(--accent)' }}
            />
            <span
              className="font-semibold text-sm"
              style={{ color: 'var(--text-primary)' }}
            >
              {skill.name}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;