"use client";

import { useTheme } from "next-themes";
import React from "react";

const Page = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div
        className={`w-full min-h-full p-3 rounded-2xl flex flex-col space-y-7 ${
          resolvedTheme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="w-full bg-neutral-500 flex items-center justify-center">
          
        </div>
      </div>
    </div>
  );
};

export default Page;
