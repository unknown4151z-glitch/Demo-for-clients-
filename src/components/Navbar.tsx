import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-[var(--color-brand-line)] py-4' : 'bg-transparent border-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-lg md:text-xl font-sans font-extrabold tracking-[0.25em] uppercase flex items-center gap-2">
          <span className="text-[var(--color-brand-fg)]">AGENCY</span>
          <span className="text-[var(--color-brand-accent)] font-normal italic font-serif -ml-1 lowercase text-2xl">showcase</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-[11px] font-mono uppercase tracking-[0.15em]">
          <ul className="flex items-center gap-10 text-[var(--color-brand-muted)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[var(--color-brand-accent)] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="flex items-center gap-2 hover:text-[var(--color-brand-accent)] transition-all font-bold text-[var(--color-brand-fg)]"
          >
            Start Dominating →
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-[var(--color-brand-fg)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-[var(--color-brand-line)] p-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest text-[var(--color-brand-muted)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-[var(--color-brand-accent)] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center px-6 py-3 bg-[var(--color-brand-accent)] text-white text-xs uppercase tracking-widest font-bold font-mono"
          >
            Get Free Strategy Setup
          </a>
        </motion.div>
      )}
    </nav>
  );
}
