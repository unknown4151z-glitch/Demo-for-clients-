import { motion } from 'motion/react';

export function FloatingSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-28 right-8 z-50 flex flex-col gap-4 mix-blend-multiply"
    >
      <div className="bg-white text-[var(--color-brand-fg)] p-3 rounded-none shadow-xl flex items-center gap-4 border border-[var(--color-brand-line)] hover-target">
        <div className="hidden sm:flex flex-col pr-2 font-mono text-right">
          <span className="text-[9px] font-bold text-[var(--color-brand-muted)] leading-none mb-1 uppercase tracking-widest">WhatsApp Funnel</span>
          <span className="text-xs font-sans font-extrabold uppercase tracking-tight">Click to Chat</span>
        </div>
        <a
          href="https://wa.me/919693768406"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
          aria-label="Chat with us on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
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
