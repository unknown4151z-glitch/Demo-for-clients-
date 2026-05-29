import { motion } from 'motion/react';
import { Dumbbell, Target, Users, Calculator, Package, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const catalog = [
  { id: 1, title: 'Pro Treadmill', category: 'Cardio', desc: 'Elite cardio performance.', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Deadlift', category: 'Strength & Posterior Chain', desc: 'Full-body power and functional strength.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Dumbbell Set', category: 'Free Weights', desc: 'Versatile strength training.', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Kettlebell Pro', category: 'Accessories', desc: 'Premium iron kettlebells.', img: 'https://images.unsplash.com/photo-1526506359555-dcf4603ab16a?q=80&w=600&auto=format&fit=crop' },
];

function ImageWithFallback({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`bg-zinc-900 bg-gradient-to-tr from-zinc-950 to-zinc-800 flex items-center justify-center ${className}`}>
        <Dumbbell className="w-12 h-12 text-zinc-600 opacity-50" />
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)}
    />
  );
}

export function GymSection() {
  const [bmi, setBmi] = useState<number | null>(null);

  return (
    <section id="gym" className="py-24 bg-zinc-50 border-t border-[var(--color-brand-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-8">Gym & Fitness Solutions</div>
        <h2 className="text-4xl md:text-5xl font-sans font-black mb-16 text-[var(--color-brand-fg)] uppercase tracking-tight">Premium Fitness Solutions</h2>
        
        {/* Catalog */}
        <div className="mb-24">
            <h3 className="text-2xl font-sans font-bold mb-8">Equipment Catalog</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {catalog.map(item => (
                    <motion.div key={item.id} whileHover={{ y: -5 }} className="bg-white border p-4 group flex flex-col">
                        <ImageWithFallback
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-48 object-cover mb-4" 
                        />
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1 mb-2">{item.category}</p>
                        <p className="text-sm text-zinc-600 mb-6 flex-grow">{item.desc}</p>
                        <button className="text-xs font-mono uppercase bg-black text-white px-4 py-3 hover:bg-[var(--color-brand-accent)] w-full transition-colors mt-auto">Request Quote</button>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Setup */}
        <div className="mb-24 relative overflow-hidden">
            <div className="bg-black text-white p-8 md:p-16 lg:p-20 relative z-10">
                <Target className="mb-6 w-12 h-12 text-[var(--color-brand-accent)]" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight uppercase">Corporate Gym Setups</h3>
                <p className="text-zinc-400 mb-10 text-lg md:text-xl max-w-2xl">We turn empty rooms into high-performance gyms. From layout design to final equipment installation, we handle everything.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                    {['Site Assessment', 'Custom Layout Planning', 'Expert Installation', 'Quarterly Maintenance'].map(step => (
                        <div key={step} className="flex items-center gap-4 text-zinc-200 text-lg">
                            <div className="bg-zinc-800 p-2 rounded-full"><Check className="w-5 h-5 text-[var(--color-brand-accent)]" /></div>
                            {step}
                        </div>
                    ))}
                </div>
            </div>
            {/* Background Accent */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none" />
        </div>

        {/* BMI Calculator */}
        <div className="bg-white border p-8 md:p-16 text-center shadow-sm">
            <Calculator className="w-12 h-12 mx-auto mb-6 text-black" />
            <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-wide">Fitness Planner (BMI)</h3>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto justify-center">
                <input type="number" placeholder="Height (cm)" className="border border-zinc-200 outline-none focus:border-black transition-colors p-4 w-full sm:w-48 bg-zinc-50 text-center text-lg" />
                <input type="number" placeholder="Weight (kg)" className="border border-zinc-200 outline-none focus:border-black transition-colors p-4 w-full sm:w-48 bg-zinc-50 text-center text-lg" />
                <button onClick={() => setBmi(22.5)} className="bg-[var(--color-brand-accent)] hover:bg-black transition-colors text-white px-10 py-4 sm:py-0 w-full sm:w-auto font-bold uppercase tracking-wider shrink-0 text-lg">Calculate</button>
            </div>
            {bmi && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10">
                <p className="font-black text-3xl md:text-4xl text-[var(--color-brand-accent)]">Your estimated BMI: {bmi}</p>
                <p className="text-zinc-500 mt-2">Optimal range: 18.5 - 24.9</p>
              </motion.div>
            )}
        </div>
      </div>
    </section>
  );
}
