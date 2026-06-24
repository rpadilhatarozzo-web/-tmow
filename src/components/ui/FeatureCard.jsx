import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const FeatureCard = ({
  iconName,
  title,
  description,
  variant = 'default', // 'default', 'dark', 'accent', 'danger'
  index = 0,
}) => {
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };

  const variants = {
    default: 'bg-white hover:bg-slate-50 border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-slate-300/80 text-primary',
    dark: 'bg-primary text-white border border-primary/20 shadow-md hover:shadow-2xl hover:bg-secondary/90',
    accent: 'bg-gradient-to-br from-secondary to-primary text-white border border-accent/20 shadow-lg hover:shadow-2xl',
    danger: 'bg-white hover:bg-red-50/20 border border-red-100 shadow-sm hover:shadow-xl hover:border-red-200 text-primary',
  };

  const iconContainers = {
    default: 'bg-accent/10 text-primary group-hover:bg-accent/20',
    dark: 'bg-white/10 text-accent group-hover:bg-white/20',
    accent: 'bg-accent/20 text-white group-hover:bg-accent/30',
    danger: 'bg-red-100 text-red-600',
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`group p-8 rounded-2xl flex flex-col items-center h-full text-center transition-all duration-300 ${variants[variant]}`}
    >
      <div className={`p-4 rounded-xl w-fit mb-6 transition-colors duration-300 ${iconContainers[variant]}`}>
        <IconComponent className="w-8 h-8" strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className={`text-sm md:text-base leading-relaxed ${variant === 'default' || variant === 'danger' ? 'text-slate-600' : 'text-slate-200'}`}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
