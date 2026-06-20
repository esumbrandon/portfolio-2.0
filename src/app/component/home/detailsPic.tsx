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
  Frontend: '#000000',
  Language: '#333333',
  Styling: '#555555',
  State: '#000000',
  Backend: '#333333',
  Testing: '#555555',
  Tools: '#000000',
};

const Details = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My Tech{' '}
          <span className="gradient-text">Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)' }} className="text-lg max-w-2xl mx-auto">
          A curated collection of the tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-5 rounded-xl border card-hover flex flex-col gap-2"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div
              className="w-3 h-3 rounded-full mb-1"
              style={{ background: categoryColors[skill.category] || 'var(--accent)' }}
            />
            <span
              className="font-semibold text-md"
              style={{ color: 'var(--text-primary)' }}
            >
              {skill.name}
            </span>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;