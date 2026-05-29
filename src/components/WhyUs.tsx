import { motion } from 'motion/react';
import { Target, Zap, Trophy, MessageCircle } from 'lucide-react';

export function WhyUs() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-100 leading-tight tracking-tight"
          >
            Why businesses fail at digital marketing?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 mb-8"
          >
            Sahi strategy ke bina budget waste hota hai. At DEMO SITE, we focus on <strong className="text-slate-200">AI-era search visibility</strong> and <strong className="text-slate-200">social-media-driven conversions</strong>.
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
                className="flex items-center gap-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800"
              >
                <div className="text-amber-500">
                  <item.icon size={24} />
                </div>
                <span className="font-semibold text-slate-300">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content / Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-3xl overflow-hidden border border-slate-800 group bg-slate-900/20"
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Futuristic data and AI marketing dashboard showcase"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-slate-950/80 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Organic Growth Rate</span>
              <span className="text-sm font-bold text-slate-100">+340%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '85%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="bg-amber-500 h-full rounded-full"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
