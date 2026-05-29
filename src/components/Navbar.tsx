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
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/50 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
          <span className="text-slate-100">DEMO</span>
          <span className="text-amber-500">SITE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-amber-500 transition-colors uppercase tracking-widest text-[11px] font-mono">
                  #{link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-full hover:bg-amber-600 transition-all text-sm shadow-[0_4px_15px_rgba(245,158,11,0.3)]"
          >
            GET AUDIT
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-slate-100"
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
          className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col gap-6"
        >
          <ul className="flex flex-col gap-6 text-lg font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-amber-500 transition-colors uppercase tracking-widest font-mono text-sm"
                >
                  #{link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-full shadow-[0_4px_15px_rgba(245,158,11,0.3)]"
          >
            Get Free Strategy Setup
          </a>
        </motion.div>
      )}
    </nav>
  );
}
