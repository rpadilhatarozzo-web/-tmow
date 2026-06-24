import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center justify-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`flex flex-col mb-12 md:mb-16 ${alignmentClass[align]}`}
    >
      {badge && (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 mb-3 border border-accent/30 ${light ? 'text-white' : 'text-secondary'}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 rounded-full mt-4 ${light ? 'bg-accent' : 'bg-gradient-to-r from-primary to-accent'}`} />
    </motion.div>
  );
};

export default SectionTitle;
