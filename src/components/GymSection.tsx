import { motion } from 'motion/react';
import { Dumbbell, Target, Users, Calculator, Package, Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const catalog = [
  { id: 1, title: 'Pro Treadmill', category: 'Cardio', img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Power Rack', category: 'Strength', img: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Dumbbell Set', category: 'Free Weights', img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Elastic Band Kit', category: 'Accessories', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop' },
];

export function GymSection() {
  const [bmi, setBmi] = useState<number | null>(null);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1517838277536-f5f98be5b123?q=80&w=600&auto=format&fit=crop';
  };

  return (
    <section id="gym" className="py-24 bg-zinc-50 border-t border-[var(--color-brand-line)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-label mb-8">Gym & Fitness Solutions</div>
        <h2 className="text-4xl md:text-5xl font-sans font-black mb-16 text-[var(--color-brand-fg)] uppercase tracking-tight">Premium Fitness Solutions</h2>
        
        {/* Catalog */}
        <div className="mb-24">
            <h3 className="text-2xl font-sans font-bold mb-8">Equipment Catalog</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {catalog.map(item => (
                    <motion.div key={item.id} whileHover={{ y: -5 }} className="bg-white border p-4 group">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-40 object-cover mb-4" 
                          onError={handleImageError}
                        />
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-xs text-zinc-500 mb-4">{item.category}</p>
                        <button className="text-xs font-mono uppercase bg-black text-white px-4 py-2 hover:bg-[var(--color-brand-accent)] w-full">Request Quote</button>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Setup */}
        <div className="mb-24">
            <div className="bg-black text-white p-6 md:p-12">
                <Target className="mb-6 w-10 h-10 text-[var(--color-brand-accent)]" />
                <h3 className="text-2xl md:text-3xl font-black mb-6">Corporate Gym Setups</h3>
                <p className="text-zinc-400 mb-8 max-w-xl">We turn empty rooms into high-performance gyms. From layout design to final equipment installation, we handle everything.</p>
                <div className="space-y-4">
                    {['Site Assessment', 'Custom Layout Planning', 'Expert Installation', 'Maintenance'].map(step => (
                        <div key={step} className="flex items-center gap-3"><Check className="w-4 h-4 text-[var(--color-brand-accent)]" /> {step}</div>
                    ))}
                </div>
            </div>
        </div>

        {/* BMI Calculator */}
        <div className="bg-white border p-6 md:p-12 text-center">
            <Calculator className="w-10 h-10 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-8">Fitness Planner (BMI)</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="number" placeholder="Height (cm)" className="border p-4 w-full sm:w-40" />
                <input type="number" placeholder="Weight (kg)" className="border p-4 w-full sm:w-40" />
                <button onClick={() => setBmi(22.5)} className="bg-[var(--color-brand-accent)] text-white px-8 py-4 sm:py-0">Calculate</button>
            </div>
            {bmi && <p className="mt-8 font-black text-2xl">Your estimated BMI: {bmi}</p>}
        </div>
      </div>
    </section>
  );
}
