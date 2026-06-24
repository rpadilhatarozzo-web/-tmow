import React from 'react';
import { motion } from 'framer-motion';

const ProcessCard = ({
  step,
  title,
  description,
  index = 0,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.03 }}
      className="relative bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group text-center"
    >
      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-full transition-all duration-500 group-hover:scale-150" />
      
      <div className="flex items-center justify-between mb-6">
        <span className="text-4xl md:text-5xl font-black text-accent/30 tracking-wider font-mono group-hover:text-accent transition-colors duration-300">
          {step}
        </span>
        <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-all duration-300" />
      </div>

      <h3 className="text-lg md:text-xl font-bold text-primary mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessCard;
