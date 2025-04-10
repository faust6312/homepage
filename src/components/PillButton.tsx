'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface PillButtonProps {
  color: 'red' | 'blue';
  href: string;
  label: string;
}

const PillButton = ({ color, href, label }: PillButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl";
  
  const colorClasses = {
    red: "bg-gradient-to-r from-red-700 to-red-500 text-white hover:from-red-800 hover:to-red-600",
    blue: "bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600"
  };
  
  const glowClasses = {
    red: "absolute inset-0 rounded-full blur opacity-30 bg-red-500 group-hover:opacity-40",
    blue: "absolute inset-0 rounded-full blur opacity-30 bg-blue-500 group-hover:opacity-40"
  };

  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={glowClasses[color]}></div>
      <Link 
        href={href}
        className={`${baseClasses} ${colorClasses[color]}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default PillButton;
