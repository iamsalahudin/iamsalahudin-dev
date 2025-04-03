"use client";

import React from "react";
import { useTheme } from "next-themes";

const Background = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className={`-z-10 fixed top-0 left-0 w-full h-full transition-colors duration-300 sm:overflow-auto overflow-hidden`}
    >
      <div
        className={`absolute inset-0 w-full h-full ${
          resolvedTheme === "dark" ? "bg-neutral-900" : "bg-neutral-600"
        } transition-colors duration-300`}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-2xl opacity-50" />
        <div className="absolute -bottom-80 left-1/5 w-[800px] h-[800px] bg-yellow-800/20 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-2xl opacity-50" />
      </div>
    </div>
  );
};

export default Background;
