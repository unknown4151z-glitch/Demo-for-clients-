import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative border-t border-[var(--color-brand-line)] overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-brand-bg)] translate-y-1/2 rounded-t-[100%] scale-150 opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="section-label justify-center mb-6">Contact</div>
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-7xl lg:text-[90px] font-sans font-extrabold uppercase text-[var(--color-brand-fg)] mb-6 tracking-tighter leading-[0.95]"
        >
          Ready to <br/><span className="text-[var(--color-brand-accent)] font-serif italic lowercase font-light">dominate?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl font-serif text-[var(--color-brand-muted)] mb-12 max-w-xl mx-auto"
        >
          Stop relying on hope. Start generating predictable, high-ticket leads using our AI marketing systems.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="max-w-md mx-auto space-y-4 mb-16"
        >
           <form className="flex flex-col gap-4 text-left font-serif">
              <div className="flex flex-col gap-2">
                 <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-brand-muted)]">Your Name</label>
                 <input type="text" placeholder="Enter name" className="bg-transparent border-b border-[var(--color-brand-muted)] text-[var(--color-brand-fg)] py-3 outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-[var(--color-brand-line)]" />
              </div>
              <div className="flex flex-col gap-2">
                 <label className="font-mono text-[10px] tracking-widest uppercase text-[var(--color-brand-muted)]">Service Needed</label>
                 <input type="text" placeholder="SEO / Branding / Web" className="bg-transparent border-b border-[var(--color-brand-muted)] text-[var(--color-brand-fg)] py-3 outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-[var(--color-brand-line)]" />
              </div>
              <button className="mt-8 font-mono text-[11px] tracking-widest uppercase text-white bg-[var(--color-brand-accent)] py-5 px-8 border border-[var(--color-brand-accent)] hover:bg-transparent hover:text-[var(--color-brand-accent)] transition-all w-fit mx-auto self-center block cursor-none">
                 REQUEST AUDIT
              </button>
           </form>
        </motion.div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-brand-line)] font-mono uppercase tracking-[0.2em] text-[8px] sm:text-[10px] text-[var(--color-brand-muted)]">
          <div className="font-sans font-bold text-sm text-[var(--color-brand-fg)] tracking-[0.25em]">DEMO<em className="text-[var(--color-brand-accent)] not-italic font-normal">SITE</em></div>
          <p className="my-4 md:my-0">© {new Date().getFullYear()} DEMO SITE · MARKETING AGENCY</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors line-through decoration-[var(--color-brand-accent)]">Instagram</a>
            <a href="#" className="hover:text-[var(--color-brand-accent)] transition-colors line-through decoration-[var(--color-brand-accent)]">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
