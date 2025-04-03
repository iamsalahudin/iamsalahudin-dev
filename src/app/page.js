"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Background from "./(components)/Background";
import Header from "./(components)/Header";
import Backlight from "./(components)/Backlight";
import Link from "next/link";
import Image from "next/image";
import { delay, motion, useAnimation } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Quote,
  TextQuote,
  Twitter,
} from "lucide-react";
import {
  CanvaOriginal,
  DiscordjsOriginal,
  FigmaOriginal,
  FramermotionOriginal,
  GithubOriginal,
  NetlifyOriginal,
  NextjsOriginal,
  NpmOriginalWordmark,
  ReactOriginal,
  TailwindcssOriginal,
  VercelOriginal,
} from "devicons-react";

const Home = () => {
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
  // useEffect(() => {
  //   if (isHovered) {
  //     controls.stop(); // Stop the animation in place
  //   } else {
  //     controls.start({
  //       y: ["0%", "-100%"], // Continue moving up
  //       transition: {
  //         repeat: Infinity,
  //         repeatType: "loop",
  //         duration: 10,
  //         ease: "linear",
  //       },
  //     });
  //   }
  // }, [isHovered, controls]);

  if (!mounted) return null;

  const frontendTools = [
    { id: 1, name: "React", icon: <ReactOriginal size={50} /> },
    { id: 2, name: "Next.js", icon: <NextjsOriginal size={50} /> },
    { id: 3, name: "Tailwind CSS", icon: <TailwindcssOriginal size={50} /> },
    { id: 4, name: "Framer Motion", icon: <FramermotionOriginal size={50} /> },
    { id: 5, name: "Figma", icon: <FigmaOriginal size={50} /> },
    { id: 6, name: "Canva", icon: <CanvaOriginal size={50} /> },
    { id: 7, name: "Vercel", icon: <VercelOriginal size={50} /> },
  ];

  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/salahudinskt",
      icon: <Facebook className="rounded-xl bg-amber-300 p-1 h-10 w-10" />,
    },
    {
      id: 2,
      link: "https://www.instagram.com/salahudin9091/",
      icon: <Instagram className="rounded-xl bg-amber-300 p-1 h-10 w-10" />,
    },
    {
      id: 3,
      link: "https://discord.com/users/iamsalahudin123",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="rounded-xl bg-amber-300 p-1 h-10 w-10"
        >
          <path
            fill="currentColor"
            d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/salahuddin-nusrat-9375392b1/",
      icon: <Linkedin className="rounded-xl bg-amber-300 p-1 h-10 w-10" />,
    },
    {
      id: 5,
      link: "https://github.com/iamsalahudin",
      icon: <Github className="rounded-xl bg-amber-300 p-1 h-10 w-10" />,
    },
  ];

  const projectsList = [
    {
      id: 1,
      name: "The Clay Colletion",
      src: "/images/claycollection.jpg",
      complete: true,
    },
    {
      id: 2,
      name: "The Weather App",
      src: "/images/weatherapp.jpg",
      complete: true,
    },
    {
      id: 3,
      name: "Ultimate Todo App",
      src: "/images/todoapp.jpg",
      complete: true,
    },
    {
      id: 4,
      name: "The Clay Colletion",
      src: "/images/claycollection.jpg",
      complete: true,
    },
    {
      id: 5,
      name: "The Weather App",
      src: "/images/weatherapp.jpg",
      complete: true,
    },
    {
      id: 6,
      name: "Ultimate Todo App",
      src: "/images/todoapp.jpg",
      complete: true,
    },
  ];

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
          <Header theme={resolvedTheme} sidebar={true} />
        </motion.div>
      )}
      <div
        className={`grid sm:grid-cols-12 grid-cols-1 sm:grid-rows-6 gap-7 w-screen sm:h-screen sm:py-10 py-5 sm:px-24 px-10`}
      >
        <div
          className={`rounded-2xl sm:row-span-6 ${
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
                    className="stroke-black"
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
        <Backlight
          className={`cursor-grab overflow-hidden w-full h-full rounded-2xl sm:col-span-7 sm:row-span-4 ${
            resolvedTheme === "dark"
              ? "text-white bg-black"
              : "text-black bg-white"
          }`}
        >
          <div className="grid grid-cols-5 gap-3 grid-rows-7 w-full h-full p-3 backdrop-blur-xs bg-transparent">
            <Image
              className=" w-full h-full flex items-center justify-center overflow-hidden border-4 border-amber-400 rounded-2xl row-span-5 col-span-2"
              src="/images/profile.jpg"
              width={600}
              height={600}
              alt="Profile"
            />
            <div className="flex flex-col justify-center space-y-2 row-span-2 col-span-2 row-start-6">
              <h1 className=" text-4xl font-bold">Hi, I'm Salahudin</h1>
              <h1 className=" text-xl opacity-80">
                Next.js Frontend Developer
              </h1>
            </div>
            <div className="row-span-6 col-span-3 col-start-3">
              <h1 className=" text-lg text-justify opacity-80 p-5 tracking-widest">
                <Quote className="relative inline -top-2 -left-2 rotate-180 text-amber-400" />
                I am a dedicated web developer focused on creating user-friendly
                and responsive websites. I enjoy building clean, modern
                interfaces and solving challenges through code. With a keen
                interest in learning, I continuously work on improving my skills
                and bringing creative ideas to life.
                <Quote className="relative top-2 left-2 inline text-amber-400" />
              </h1>
            </div>
            <div
              className={`flex items-center justify-end space-x-3 font-extralight ${
                resolvedTheme === "dark" ? "text-black" : "text-white"
              } row-span-1 col-span-3 col-start-3 row-start-7`}
            >
              {socialLinks.map((each) => {
                return (
                  <a href={each.link} key={each.id}>
                    {each.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </Backlight>
        <Backlight
          className={`cursor-grab rounded-2xl sm:col-span-7 sm:row-span-2 sm:col-start-2 sm:row-start-5 ${
            resolvedTheme === "dark"
              ? "text-white bg-black"
              : "text-black bg-white"
          }`}
        >
          <div className="w-full h-full backdrop-blur-xs bg-transparent">
            <div className="absolute w-full px-3 pt-3 pb-8 backdrop-blur-xs bg-gradient-to-b from-white/10 to-transparent text-4xl font-bold overflow-hidden">
              <h1>I'm working with tools like</h1>
            </div>
            <div className="pt-16 w-full h-full flex justify-center flex-wrap space-x-5">
              {frontendTools.map((tool) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={tool.id}
                  >
                    <div className="p-3 bg-neutral-400/20 rounded-2xl">
                      {tool.icon}
                    </div>
                    <div>{tool.name}</div>
                  </div>
                );
              })}
              {/* <NpmOriginalWordmark size={50} /> */}
              {/* <NetlifyOriginal size={50} /> */}
              {/* <GithubOriginal size={50} /> */}
            </div>
          </div>
        </Backlight>
        <Backlight
          className={`cursor-grab rounded-2xl sm:col-span-4 sm:row-span-6 sm:col-start-9 sm:row-start-1 ${
            resolvedTheme === "dark"
              ? "text-white bg-black"
              : "text-black bg-white"
          }`}
        >
          <div className="relative w-full h-full backdrop-blur-xs bg-transparent">
            <div className="absolute z-10 w-full px-3 pt-3 pb-10 backdrop-blur-3xl bg-gradient-to-b from-neutral-400/40 to-transparent text-4xl font-bold overflow-hidden">
              <h1>My recent works</h1>
            </div>
            <div className="w-full h-full overflow-hidden">
              <motion.div
                className="w-full h-[250%] grid grid-rows-6"
                animate={{ y: [`0%`, "-50%"] }} // Moves halfway, not full jump
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                whileHover={{ y: "0%" }} // Stops on hover
              >
                {/* Duplicate content for seamless looping */}
                {projectsList.map((num) => (
                  <div
                    key={num.id}
                    className="w-full pb-2 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full p-3">
                      <Image
                        src={num.src}
                        alt={num.name}
                        width={500}
                        height={300}
                        className="w-full h-full rounded-2xl"
                      />
                      <div className="w-full flex justify-between pt-3">
                        <span className="font-bold">{num.name}</span>
                        {(num.complete ? <span className="p-1 rounded-md font-semibold bg-green-400 text-green-900">Done</span> : <span className="p-1 rounded-md font-semibold bg-amber-400 text-amber-900">Progress...</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Backlight>
      </div>
    </div>
  );
};

export default Home;
