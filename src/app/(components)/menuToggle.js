"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative flex flex-col items-center justify-center w-12 h-12"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-black">
        {/* Top Line */}
        <motion.line
          x1="3" y1="6" x2="21" y2="6"
          strokeWidth="2" strokeLinecap="round"
          animate={{
            y1: isOpen ? 12 : 6,
            y2: isOpen ? 12 : 6,
            rotate: isOpen ? 45 : 0,
          }}
          transform-origin="12 12"
          transition={{ duration: 0.3 }}
        />
        
        {/* Middle Line (Fade Out) */}
        <motion.line
          x1="3" y1="12" x2="21" y2="12"
          strokeWidth="2" strokeLinecap="round"
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Bottom Line */}
        <motion.line
          x1="3" y1="18" x2="21" y2="18"
          strokeWidth="2" strokeLinecap="round"
          animate={{
            y1: isOpen ? 12 : 18,
            y2: isOpen ? 12 : 18,
            rotate: isOpen ? -45 : 0,
          }}
          transform-origin="12 12"
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
