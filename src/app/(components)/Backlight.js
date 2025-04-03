import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Backlight = ({ className, lightColor = "bg-amber-400/30", children }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const { left, top } = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={divRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className={`absolute w-40 h-40 ${lightColor} rounded-full blur-3xl opacity-50 pointer-events-none`}
        animate={{
          top: position.y - 80,
          left: position.x - 80,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />
      {children}
    </div>
  );
};

export default Backlight;
