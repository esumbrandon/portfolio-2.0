import Link from 'next/link';

const Information = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, var(--text-primary) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] h-[320px] sm:w-[800px] sm:h-[800px] rounded-full opacity-15 blur-[100px] sm:blur-[160px] pointer-events-none"
        style={{ background: 'var(--accent-light)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            color: 'var(--text-primary)',
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: 'var(--text-primary)' }} />
          Available for Senior &amp; Full-Stack Opportunities
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight break-words">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Esum Brandon Oben</span>
        </h1>

        <h2
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          Full-Stack Software Engineer &amp; Backend Specialist
        </h2>

        <p
          className="text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          7 years of experience engineering secure web applications, banking platforms, PSD2 Open Finance APIs,
          distributed microservices, and cross-platform mobile apps.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link
            href="/#projects"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            style={{
              background: 'var(--accent)',
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              boxShadow: '0 0 32px var(--accent-glow)',
            }}
          >
            Explore My Work
          </Link>
          <Link
            href="/#about"
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
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