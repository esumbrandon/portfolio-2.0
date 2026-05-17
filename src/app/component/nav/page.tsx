import Image from 'next/image';
import LogoTrans from './Assets/Logo/logoTransp.png';

const NavBar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/#home">
          <Image src={LogoTrans} alt="Logo" width={56} height={56} className="rounded-full" />
        </a>

        <div className="flex items-center gap-8">
          {[
            { label: 'Home', href: '/#home' },
            { label: 'About', href: '/#about' },
            { label: 'Skills', href: '/#skills' },
            { label: 'Experience', href: '/#experience' },
            { label: 'Projects', href: '/#projects' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <a
            href="/#contact"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{ background: 'var(--accent)' }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
