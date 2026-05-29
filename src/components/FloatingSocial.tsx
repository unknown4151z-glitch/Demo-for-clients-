import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
    >
      <div className="bg-white text-slate-950 p-3 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-200">
        <div className="hidden sm:flex flex-col pr-2">
          <span className="text-[10px] font-black text-slate-400 leading-none mb-1 uppercase">WhatsApp Growth</span>
          <span className="text-xs font-bold">Click to Chat</span>
        </div>
        <a
          href="https://wa.me/910000000000" // Replace with real WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative group"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
          {/* Tooltip for mobile where text is hidden */}
          <span className="sm:hidden absolute right-full mr-4 bg-slate-900 border border-slate-800 text-slate-100 text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Instant Consultation
          </span>
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        </a>
      </div>
    </motion.div>
  );
}
