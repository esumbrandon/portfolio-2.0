import Link from 'next/link';

const Information = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{ paddingTop: '96px' }}
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(167,139,250,0.6) 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[140px] pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Status badge */}
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

        <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight tracking-tight">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Brandon</span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          Full-Stack Developer
        </h2>

        <p
          className="text-lg max-w-2xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          I craft modern, performant web applications with clean code and thoughtful design.
          Passionate about React, Next.js, and building things that actually matter.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/component/project"
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: 'linear-gradient(135deg, var(--accent), #4f46e5)',
              boxShadow: '0 0 30px var(--accent-glow)',
            }}
          >
            View My Work
          </Link>
          <Link
            href="/component/bio"
            className="px-8 py-3.5 rounded-xl font-semibold border transition-all duration-200 hover:scale-105"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
            }}
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Information;