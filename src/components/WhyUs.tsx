import { motion } from 'motion/react';
import { Target, Zap, Trophy, MessageCircle } from 'lucide-react';

export function WhyUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-b border-[var(--color-brand-line)]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <div className="section-label mb-8">The Problem</div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[56px] font-serif font-light mb-6 text-[var(--color-brand-fg)] leading-[1.1]"
          >
            Why businesses fail at <br/><em className="font-sans font-extrabold uppercase text-[var(--color-brand-accent)] tracking-tight">digital</em> marketing?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg font-serif text-[var(--color-brand-muted)] mb-12 leading-relaxed"
          >
            Sahi strategy ke bina budget waste hota hai. At Support Center, we focus on 
            <strong className="text-[var(--color-brand-fg)] font-semibold font-sans uppercase text-sm mx-2">AI-era search visibility</strong> and 
            <strong className="text-[var(--color-brand-fg)] font-semibold font-sans uppercase text-sm ml-1">social conversion funnels</strong>. We do not just build, we dominate.
          </motion.p>
          
          <div className="space-y-6">
            {[
              { title: 'Scroll-Based SEO Architecture', icon: Zap },
              { title: 'Psychological CTR Manipulation', icon: Target },
              { title: 'Instagram to WhatsApp Funneling', icon: MessageCircle },
              { title: 'Authority Building Reputation', icon: Trophy },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-5 p-4 border border-[var(--color-brand-line)] bg-[var(--color-brand-bg)] hover:bg-white transition-colors"
              >
                <div className="text-[var(--color-brand-accent)] bg-white p-3 rounded-none border border-[var(--color-brand-line)] shadow-sm">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <span className="font-sans text-sm font-bold tracking-wide uppercase text-[var(--color-brand-fg)]">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content / Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[700px] flex items-center justify-center p-8 bg-[var(--color-brand-bg)] border border-[var(--color-brand-line)] group"
        >
           <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale transition-transform duration-1000 group-hover:scale-105"
              alt="Data Analysis"
           />
           <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
          
          <div className="relative z-10 w-full max-w-sm bg-white p-8 border border-[var(--color-brand-line)] shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--color-brand-muted)]">Organic Growth Rate</span>
              <span className="text-xl font-sans font-extrabold text-[var(--color-brand-fg)]">+340%</span>
            </div>
            <div className="w-full bg-[var(--color-brand-bg)] h-3 overflow-hidden border border-[var(--color-brand-line)]">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-[var(--color-brand-accent)] h-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
