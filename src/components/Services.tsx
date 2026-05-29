import { motion } from 'motion/react';
import { Package, Smartphone, Laptop, Zap, Users, PenTool, Bike, Car, Shirt, ShoppingBasket } from 'lucide-react';

const services = [
  { icon: Shirt, title: 'Clothes', desc: 'Fashion Showroom', keywords: 'Fashion, Apparels', img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop' },
  { icon: ShoppingBasket, title: 'Grocery', desc: 'Fresh Essentials', keywords: 'Food, Daily', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop' },
  { icon: Zap, title: 'AC & Appliances', desc: 'Home Comfort Systems', keywords: 'Cooling, Home', img: 'https://images.unsplash.com/photo-1582192730841-2a622925d7c9?q=80&w=2070&auto=format&fit=crop' },
  { icon: Smartphone, title: 'Mobiles', desc: 'Smartphones & Gadgets', keywords: 'Phones, Tech', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop' },
  { icon: Laptop, title: 'Laptops', desc: 'Pro Computing', keywords: 'Tech, Work', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop' },
  { icon: Package, title: 'PC & Gaming', desc: 'Custom Gaming Rigs', keywords: 'Gaming, PCs', img: 'https://images.unsplash.com/photo-1587202372572-882292f75e0c?q=80&w=2070&auto=format&fit=crop' },
  { icon: Users, title: 'Coaching Classes', desc: 'Professional Education', keywords: 'Education, Skills', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop' },
  { icon: PenTool, title: 'Brand/Web Agency', desc: 'Premium Digital Studio', keywords: 'Design, Marketing', img: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop' },
  { icon: Bike, title: 'Cycle Showroom', desc: 'Mountain & Road Bikes', keywords: 'Fitness, Bikes', img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc4?q=80&w=2070&auto=format&fit=crop' },
  { icon: Car, title: 'Car Showroom', desc: 'Luxury Automobiles', keywords: 'Cars, Auto', img: 'https://images.unsplash.com/photo-1492144534655-ae79c963c9d4?q=80&w=2083&auto=format&fit=crop' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-brand-bg)] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
             <div className="section-label mb-6">Our Portfolio</div>
             <h3 className="text-4xl md:text-5xl lg:text-7xl font-sans font-extrabold uppercase text-[var(--color-brand-fg)] tracking-tighter leading-[0.95]">
               Industries <span className="font-serif font-light italic lowercase text-5xl md:text-6xl lg:text-[80px]">we serve</span>
             </h3>
           </div>
           <p className="text-[var(--color-brand-muted)] font-serif text-lg max-w-xs leading-relaxed">
              We design premium, performance-oriented experiences for diverse industries.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.a 
              href="#"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative overflow-hidden border border-[var(--color-brand-line)] bg-white transition-all hover:-translate-y-1 hover:shadow-lg group block"
            >
              <div className="h-40 relative overflow-hidden bg-[var(--color-brand-bg)]">
                 <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="p-6 flex flex-col justify-between h-[200px]">
                <div>
                   <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-[var(--color-brand-muted)] mb-2">0{index + 1}</div>
                   <h4 className="text-lg font-sans font-extrabold uppercase tracking-tight text-[var(--color-brand-fg)] mb-2">{service.title}</h4>
                   <p className="font-serif text-sm leading-[1.5] text-[var(--color-brand-muted)]">
                     {service.desc}
                   </p>
                </div>
                <div className="flex justify-between items-center border-t border-[var(--color-brand-line)] pt-3 mt-4">
                   <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-brand-muted)] truncate">
                     {service.keywords}
                   </span>
                   <span className="text-xs uppercase font-mono tracking-widest font-bold text-[var(--color-brand-fg)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                     View →
                   </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
