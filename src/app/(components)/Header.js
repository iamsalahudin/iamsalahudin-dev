"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Brush, User, MessageSquareDashed } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, sidebar, setIsHeaderOpen }) {
  const navlinks = [
    { id: 0, name: "Home", to: "/", icon: <Home className="w-6 h-6" /> },
    { id: 1, name: "About", to: "/about", icon: <User className="w-6 h-6" /> },
    {
      id: 3,
      name: "Projects",
      to: "/projects",
      icon: <Brush className="w-6 h-6" />,
    },
    {id: 4,
      name: "Contact",
      to: "/contact",
      icon: <MessageSquareDashed className="w-6 h-6" />
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <motion.div
        className="w-16 h-16 md:w-12 md:h-12  xl:w-16 xl:h-16 rounded-full border-4 border-amber-400 overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <Image
            src="/images/profile.jpg"
            width={100}
            height={100}
            alt="Profile"
          />
        </Link>
      </motion.div>
      <nav>
        <ul className="flex flex-col sm:items-center space-y-6">
          {navlinks.map((item) => (
            <motion.li
              key={item.id}
              className="group flex items-center space-x-3"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.to}
                className={`flex items-center hover:space-x-2 xl:p-3 sm:rounded-2xl ${
                  theme === "dark"
                    ? "text-white bg-black"
                    : "text-black bg-white"
                } hover:text-amber-400`}
                onClick={() => {
                  setIsHeaderOpen(false);
                }}
              >
                <motion.span
                  initial={
                    sidebar ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.icon}
                </motion.span>
                <motion.span
                  className="sm:hidden group-hover:inline-block"
                  initial={
                    sidebar ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                  }
                  whileHover={!sidebar && { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ThemeToggle />
      </motion.div>
    </div>
  );
}
