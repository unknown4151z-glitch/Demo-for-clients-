import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden border-b border-[var(--color-brand-line)] bg-white">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 flex items-center justify-center opacity-30 md:opacity-100 md:bg-[var(--color-brand-bg)] border-l border-[var(--color-brand-line)]">
         <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-50" 
              alt="Digital Marketing AI Strategy" />
         <div className="absolute right-8 bottom-8 bg-[var(--color-brand-accent)] text-white text-[10px] font-mono tracking-widest uppercase py-3 px-5">
            AI-POWERED PERFORMANCE
         </div>
      </div>
      
      <div className="w-full md:w-1/2 px-6 md:pl-20 md:pr-12 relative z-10 py-20 flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="eyebrow mb-8"
        >
          Growth Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-6xl md:text-7xl lg:text-[90px] font-serif font-light leading-[0.95] tracking-tight mb-2 text-[var(--color-brand-fg)]"
        >
          <em>Dominate</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="text-5xl md:text-6xl lg:text-[76px] font-sans font-extrabold uppercase leading-[0.95] tracking-tighter text-[var(--color-brand-accent)] mb-10"
        >
          Digital Search
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-lg md:text-xl font-serif text-[var(--color-brand-muted)] max-w-md leading-relaxed mb-12"
        >
          Growth stalling? Transform your business with <strong>cinematic branding</strong>, AI marketing, and futuristic solid-state SEO strategies designed for modern momentum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <a
            href="https://wa.me/910000000000" // Placeholder phone
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-[11px] font-mono tracking-widest uppercase text-white bg-[var(--color-brand-accent)] py-4 px-8 border border-[var(--color-brand-accent)] hover:bg-transparent hover:text-[var(--color-brand-accent)] transition-all"
          >
            Claim Free Audit <span>→</span>
          </a>
          <a
            href="#portfolio"
            className="text-[11px] font-mono tracking-widest uppercase text-[var(--color-brand-muted)] border border-[var(--color-brand-line)] py-4 px-8 hover:border-[var(--color-brand-fg)] hover:text-[var(--color-brand-fg)] transition-all"
          >
            Our Work
          </a>
        </motion.div>
      </div>

      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="absolute left-[50%] md:left-[25%] bottom-10 -translate-x-[50%] flex gap-12 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-brand-muted)]"
      >
         <div className="flex flex-col items-center">
            <span className="text-[var(--color-brand-accent)] font-sans font-bold text-3xl mb-1">98%</span>
            SEO Domination
         </div>
         <div className="flex flex-col items-center">
            <span className="text-[var(--color-brand-accent)] font-sans font-bold text-3xl mb-1">10x</span>
            Lead AI Funnels
         </div>
      </motion.div>
    </section>
  );
}
