/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { FloatingSocial } from './components/FloatingSocial';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className={`cursor ${isHovered ? 'cursor-hovered' : ''}`} 
        style={{ left: position.x, top: position.y }} 
      />
      <div 
        className={`cursor-ring ${isHovered ? 'ring-hovered' : ''}`} 
        style={{ left: position.x, top: position.y, transition: 'left 0.15s ease-out, top 0.15s ease-out' }} 
      />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] text-[var(--color-brand-fg)] selection:bg-[var(--color-brand-accent)] selection:text-white">
      <div className="noise"></div>
      <CustomCursor />
      
      {/* Scroll-based SEO Architecture & Single Page Navigation */}
      <Navbar />
      
      <main>
        <Hero />
        <WhyUs />
        <Services />
        
        {/* Placeholder for Portfolio / Social Proof sections that could be expanded further */}
        <section id="portfolio" className="py-24 bg-white border-t border-[var(--color-brand-line)]">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <div className="section-label justify-center mb-8">Case Studies</div>
             <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-[var(--color-brand-fg)] uppercase tracking-tight">Visual Authority Showcase</h2>
             <p className="font-serif text-lg text-[var(--color-brand-muted)] max-w-2xl mx-auto mb-12">
               A glimpse into luxury branding, cinematic website design, and high-conversion landing page pipelines.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
               <div className="aspect-video bg-[var(--color-brand-bg)] hover-target group rounded-none border border-[var(--color-brand-line)] flex items-center justify-center text-[var(--color-brand-muted)] font-mono text-sm relative overflow-hidden transition-transform hover:-translate-y-1">
                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 mix-blend-multiply" alt="Case Study 1" />
                 <div className="absolute inset-0 bg-white/20"></div>
                 <span className="relative z-10 bg-white px-4 py-2 text-xs uppercase tracking-widest font-bold">E-commerce Scaling</span>
               </div>
               <div className="aspect-video bg-[var(--color-brand-bg)] hover-target group rounded-none border border-[var(--color-brand-line)] flex items-center justify-center text-[var(--color-brand-muted)] font-mono text-sm relative overflow-hidden transition-transform hover:-translate-y-1">
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 mix-blend-multiply" alt="Case Study 2" />
                 <div className="absolute inset-0 bg-white/20"></div>
                 <span className="relative z-10 bg-white px-4 py-2 text-xs uppercase tracking-widest font-bold">B2B Lead Gen SaaS</span>
               </div>
             </div>
          </div>
        </section>

        <Contact />
      </main>

      <FloatingSocial />
    </div>
  );
}
