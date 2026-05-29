import { motion } from 'motion/react';
import { BrainCircuit, Search, Code2, PenTool, Share2, Video, TrendingUp, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Traffic Domination (SEO)',
    desc: 'Local SEO, Programmatic semantic SEO, and conversational keyword optimization to rank #1 in India. Don\'t just rank, dominate.',
    keywords: 'SEO services India, Local SEO, AI Search SEO'
  },
  {
    icon: Code2,
    title: 'Futuristic Website Development',
    desc: 'High-converting, cinematic single-page portfolios and dynamic websites. Fast, mobile-first, and optimized for Core Web Vitals.',
    keywords: 'premium website design company, WebGL website agency'
  },
  {
    icon: BrainCircuit,
    title: 'AI Marketing & Automation',
    desc: 'Automate lead generation via WhatsApp and Instagram DMs using advanced AI conversational funnels that convert instantly.',
    keywords: 'AI marketing agency, WhatsApp automation services'
  },
  {
    icon: Share2,
    title: 'Social Media Growth Systems',
    desc: 'Psychologically optimized content that drives engagement and turns followers into loyal customers via Facebook & Instagram Ads.',
    keywords: 'social media marketing agency, Meta Ads expert'
  },
  {
    icon: PenTool,
    title: 'Luxury Branding Strategy',
    desc: 'Why premium branding increases trust? We create visually authoritative brand identities that command high-ticket pricing.',
    keywords: 'luxury branding agency India, branding psychology'
  },
  {
    icon: Video,
    title: 'Cinematic Video Editing',
    desc: 'Short-form reels and long-form YouTube content edited for maximizing watch time, audience retention, and viral reach.',
    keywords: 'video editing services in India'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase text-[10px] mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-100 mb-6 tracking-tight">
            Next-Generation Digital Marketing
          </h3>
          <p className="text-slate-400 text-lg">
            Traditional marketing is dead. We use conversational search optimization, psychological CTR manipulation, and AI tools to outsmart your competitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/50 transition-colors group cursor-pointer flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-300 mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold font-display text-slate-100 mb-3">{service.title}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">
                {service.desc}
              </p>
              <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase border-t border-slate-800/50 pt-3 mt-auto">
                Keywords: {service.keywords}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
