"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Background from "./Background";
import Header from "./Header";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Structure = ({children}) => {
    const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!mounted) return null;
  return (
    <div className="font-sans overflow-hidden">
      <Background />
      {isHeaderOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsHeaderOpen(!isHeaderOpen)}
        />
      )}
      {isHeaderOpen && (
        <motion.div
          className={`fixed left-0 top-0 h-screen w-3/4 ${
            resolvedTheme === "dark"
              ? "text-white bg-black"
              : "text-black bg-white"
          } z-30 py-10 shadow-lg`}
          initial={{ x: isHeaderOpen ? "-100%" : 0 }}
          animate={{ x: isHeaderOpen ? 0 : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Header
            theme={resolvedTheme}
            sidebar={true}
            setIsHeaderOpen={setIsHeaderOpen}
          />
        </motion.div>
      )}
      <div
        className={`grid md:grid-cols-10 lg:grid-cols-12 grid-cols-1 md:grid-rows-6 gap-7 w-screen md:h-screen lg:py-10 py-5 lg:px-14 xl:px-24 px-8`}
      >
        <div
          className={`rounded-2xl col-span-1 md:col-span-2 lg:col-span-1 md:row-span-6 ${
            resolvedTheme === "dark"
              ? "text-white bg-black"
              : "text-black bg-white"
          }`}
        >
          <div className={`w-full h-full sm:p-5 p-3`}>
            {isMobile ? (
              <div className="w-full h-full flex items-center justify-between">
                <div className="w-12 h-12 rounded-full border-3 border-amber-400 overflow-hidden flex items-center justify-center">
                  <Link href="/">
                    <Image
                      src="/images/profile.jpg"
                      width={100}
                      height={100}
                      alt="Profile"
                    />
                  </Link>
                </div>
                <button
                  className="relative h-6 w-6 flex items-center justify-center"
                  onClick={() => setIsHeaderOpen(!isHeaderOpen)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={`${
                      resolvedTheme === "dark" ? "stroke-white" : "stroke-black"
                    }`}
                  >
                    <motion.line
                      x1="3"
                      y1="6"
                      x2="21"
                      y2="6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        y1: isHeaderOpen ? 18 : 6,
                        y2: isHeaderOpen ? 3 : 6,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.line
                      x1="3"
                      y1="12"
                      x2="21"
                      y2="12"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        x1: isHeaderOpen ? 0 : 3,
                        x2: isHeaderOpen ? 0 : 21,
                        opacity: isHeaderOpen ? 0 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.line
                      x1="3"
                      y1="18"
                      x2="21"
                      y2="18"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        y1: isHeaderOpen ? 3 : 18,
                        y2: isHeaderOpen ? 18 : 18,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <Header theme={resolvedTheme} sidebar={false} />
            )}
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-11 md:row-span-6 w-full h-full lg:overflow-hidden overflow-scroll">
            {children}
        </div>
      </div>
    </div>
  );
};
