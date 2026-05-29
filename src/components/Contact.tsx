import { motion } from 'motion/react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#020617] relative border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black text-slate-100 mb-6 tracking-tighter"
        >
          Ready to <span className="text-amber-500 italic uppercase">Dominate?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Stop relying on hope. Start generating predictable, high-ticket leads using our AI marketing systems and modern portfolio landing pages.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://wa.me/910000000000" // Replace with real WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-lg hover:scale-105 transition-all shadow-[0_4px_20px_rgba(245,158,11,0.4)] uppercase tracking-wide"
          >
            Start WhatsApp Chat Now
          </a>
        </motion.div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 text-slate-500 text-sm font-mono uppercase tracking-widest text-[11px]">
          <p>© {new Date().getFullYear()} DEMO SITE.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
