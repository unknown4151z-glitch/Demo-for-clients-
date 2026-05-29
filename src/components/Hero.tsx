import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden">
      {/* Background optical flare/gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-amber-500/20 bg-amber-500/10 text-amber-500 text-[10px] uppercase font-bold tracking-widest mb-4"
        >
          <Sparkles size={14} />
          AI-Era Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-[80px] font-display font-black leading-[1.05] tracking-tighter text-slate-100"
        >
          YOUR BRAND<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 italic uppercase">
            Dominate
          </span><br />
          EVERY SEARCH.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-400 mt-2 max-w-2xl leading-relaxed mx-auto"
        >
          Growth ruk gayi hai? Transform your business with premium AI-powered marketing, cinematic branding, and futuristic SEO strategies designed for high-growth modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-6"
        >
          <a
            href="https://wa.me/910000000000" // Placeholder phone
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 group"
          >
            BOOK STRATEGY CALL
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center uppercase tracking-wider text-sm"
          >
            View Our Portfolio
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col items-center w-full"
        >
          <p className="text-[10px] text-slate-500 mb-6 uppercase tracking-widest font-bold">
            Trusted By High-Growth Brands In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Visual Social Proof placeholders */}
            <span className="text-xl font-display font-bold">Delhi</span>
            <span className="text-xl font-display font-bold">Mumbai</span>
            <span className="text-xl font-display font-bold">Bangalore</span>
            <span className="text-xl font-display font-bold">Patna</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
