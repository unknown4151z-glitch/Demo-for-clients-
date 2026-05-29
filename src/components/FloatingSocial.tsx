import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 mix-blend-multiply"
    >
      <div className="bg-white text-[var(--color-brand-fg)] p-3 rounded-none shadow-xl flex items-center gap-4 border border-[var(--color-brand-line)] hover-target">
        <div className="hidden sm:flex flex-col pr-2 font-mono text-right">
          <span className="text-[9px] font-bold text-[var(--color-brand-muted)] leading-none mb-1 uppercase tracking-widest">WhatsApp Funnel</span>
          <span className="text-xs font-sans font-extrabold uppercase tracking-tight">Click to Chat</span>
        </div>
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={22} strokeWidth={2} />
          {/* Tooltip for mobile where text is hidden */}
          <span className="sm:hidden absolute right-full mr-4 bg-white border border-[var(--color-brand-line)] font-mono text-[var(--color-brand-fg)] text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Instant Chat
          </span>
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-black opacity-10 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </a>
      </div>
    </motion.div>
  );
}
