/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { FloatingSocial } from './components/FloatingSocial';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Scroll-based SEO Architecture & Single Page Navigation */}
      <Navbar />
      
      <main>
        <Hero />
        <WhyUs />
        <Services />
        
        {/* Placeholder for Portfolio / Social Proof sections that could be expanded further */}
        <section id="portfolio" className="py-24 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="text-4xl font-display font-bold mb-6 text-slate-100">Visual Authority Showcase</h2>
             <p className="text-slate-400 max-w-2xl mx-auto mb-12">
               A glimpse into luxury branding, cinematic website design, and high-conversion landing page pipelines.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
               <div className="aspect-video bg-slate-900/40 rounded-3xl border border-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm">Case Study: E-commerce Scaling</div>
               <div className="aspect-video bg-slate-900/40 rounded-3xl border border-slate-800 flex items-center justify-center text-slate-500 font-mono text-sm">Case Study: B2B Lead Gen SaaS</div>
             </div>
          </div>
        </section>

        <Contact />
      </main>

      <FloatingSocial />
    </div>
  );
}
