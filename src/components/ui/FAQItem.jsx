import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border border-slate-200/60 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-primary text-base md:text-lg focus:outline-none cursor-pointer select-none"
      >
        <span className="leading-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 shrink-0"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
