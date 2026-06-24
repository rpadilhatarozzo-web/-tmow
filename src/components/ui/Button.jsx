import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none px-6 py-3 text-sm md:text-base';

  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary border border-primary hover:border-secondary shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20',
    secondary: 'bg-accent text-primary hover:bg-white border border-accent hover:border-white shadow-md shadow-accent/10 hover:shadow-lg hover:shadow-accent/20 font-semibold',
    outline: 'bg-transparent text-primary hover:text-white border border-primary hover:bg-primary',
    ghost: 'bg-transparent text-primary hover:bg-primary/5 hover:text-primary',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={!disabled && !loading ? { scale: 1.02, y: -1 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processando...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
