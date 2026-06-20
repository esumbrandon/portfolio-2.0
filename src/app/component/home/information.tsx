import Link from 'next/link';

const Information = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--text-secondary) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[160px] pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 border"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            color: 'var(--accent-light)',
          }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tighter">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Brandon</span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-medium mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Full-Stack Developer & Designer
        </h2>

        <p
          className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          I build beautiful, performant, and accessible web experiences with a focus on modern
          frontend technologies. Let&apos;s create something amazing together.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/component/project"
            className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-125"
            style={{
              background: 'var(--accent)',
              boxShadow: '0 0 40px var(--accent-glow)',
            }}
          >
            Explore My Work
          </Link>
          <Link
            href="/component/bio"
            className="px-8 py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 hover:bg-gray-300"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-secondary)',
            }}
          >
            Get to Know Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Information;