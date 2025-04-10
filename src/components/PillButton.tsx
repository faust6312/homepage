'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PillButtonProps {
  color: 'red' | 'blue';
  href: string;
  label: string;
}

const PillButton = ({ color, href, label }: PillButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 shadow-lg";
  
  const colorClasses = {
    red: "bg-gradient-to-r from-red-700 to-red-500 text-white hover:from-red-800 hover:to-red-600",
    blue: "bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600"
  };
  
  const glowClasses = {
    red: "absolute -inset-1 rounded-full blur-md bg-red-500/50 z-[-1] opacity-75",
    blue: "absolute -inset-1 rounded-full blur-md bg-blue-500/50 z-[-1] opacity-75"
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Fixed glow effect that stays consistent on hover */}
      <div className={glowClasses[color]}></div>
      <Link 
        href={href}
        className={`${baseClasses} ${colorClasses[color]} z-10`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default PillButton;
