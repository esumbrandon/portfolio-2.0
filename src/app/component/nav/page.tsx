"use client";

import { useState } from 'react';
import Image from 'next/image';
import LogoTrans from './Assets/Logo/logoTransp.png';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="/#home" className="flex items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-80">
          <Image src={LogoTrans} alt="Logo" width={40} height={40} className="rounded-full object-cover sm:w-12 sm:h-12" />
          <span className="font-bold text-sm tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Esum Brandon
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map(({ label, href }) => {
            if (label === 'Contact') {
              return (
                <a
                  key={label}
                  href={href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:opacity-90"
                  style={{ background: 'var(--accent)', color: 'var(--text-primary)' }}
                >
                  {label}
                </a>
              );
            }
            return (
              <a
                key={label}
                href={href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-lg border transition-all active:scale-95"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg-card)',
            color: 'var(--text-primary)',
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-4 sm:px-6 py-4 border-t glass flex flex-col gap-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-all flex items-center justify-between ${
                label === 'Contact' ? 'font-semibold' : ''
              }`}
              style={{
                color: 'var(--text-primary)',
                background: label === 'Contact' ? 'var(--accent)' : 'var(--bg-primary)',
                borderColor: 'var(--border)',
              }}
            >
              <span>{label}</span>
              <span className="text-xs opacity-60">→</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;