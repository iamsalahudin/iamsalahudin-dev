"use client";

import { useTheme } from "next-themes";
import React from "react";
import Image from "next/image";
import { Code, Database, Facebook, Github, Instagram, Linkedin, Quote } from "lucide-react";
import MyJourneyTimeline from "./(components)/Timeline";
import {
  CanvaOriginal,
  Css3Original,
  FigmaOriginal,
  FramermotionOriginal,
  GitOriginal,
  Html5Original,
  JavascriptOriginal,
  NextjsOriginal,
  NodejsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  VercelOriginal,
  VisualstudioOriginal,
  VscodeOriginal,
  ExpressOriginal,
  MongodbOriginal,
  CookieOriginal,
  JwtOriginal,
  BcryptOriginal,
  MulterOriginal,
} from "devicons-react";

const Page = () => {
  const { resolvedTheme } = useTheme();
  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/salahudinskt",
      icon: (
        <Facebook className="rounded-xl bg-amber-300 p-1 h-10 w-10" />
      ),
    },
    {
      id: 2,
      link: "https://www.instagram.com/salahudin9091/",
      icon: (
        <Instagram className="rounded-xl bg-amber-300 p-1 h-10 w-10" />
      ),
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
      icon: (
        <Linkedin className="rounded-xl bg-amber-300 p-1 h-10 w-10" />
      ),
    },
    {
      id: 5,
      link: "https://github.com/iamsalahudin",
      icon: (
        <Github className="rounded-xl bg-amber-300 p-1 h-10 w-10" />
      ),
    },
  ];
  const myJourney = [
    {
      id: 1,
      year: "2020",
      highlight:
        "First exposure to web development through HTML & CSS one-shot videos",
    },
    {
      id: 2,
      year: "2021",
      highlight: "Took a break from coding and explored other interests",
    },
    {
      id: 3,
      year: "2022",
      highlight:
        "Restarted with fresh focus, built mini projects using HTML, CSS, JavaScript",
    },
    {
      id: 4,
      year: "2023",
      highlight:
        "Continued hands-on learning, made small tools, UI practice, improved basics",
    },
    {
      id: 5,
      year: "2024",
      highlight:
        "Jumped into React, created solid apps, deployed real projects",
    },
    {
      id: 6,
      year: "Now",
      highlight:
        "Exploring advanced tools, working on portfolio, and diving into backend fundamentals",
    },
  ];

  const allFrontendTools = [
    { id: 1, name: "React", icon: <ReactOriginal size={50} />, doneAt: "2024" },
    {
      id: 2,
      name: "Next.js",
      icon: <NextjsOriginal size={50} />,
      doneAt: "2024",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      icon: <TailwindcssOriginal size={50} />,
      doneAt: "2024",
    },
    {
      id: 4,
      name: "Framer Motion",
      icon: <FramermotionOriginal size={50} />,
      doneAt: "2024 (Exploring)",
    },
    {
      id: 5,
      name: "Figma",
      icon: <FigmaOriginal size={50} />,
      doneAt: "2023 (UI Practice)",
    },
    {
      id: 6,
      name: "Canva",
      icon: <CanvaOriginal size={50} />,
      doneAt: "2023 (Basic Design)",
    },
    {
      id: 7,
      name: "Vercel",
      icon: <VercelOriginal size={50} />,
      doneAt: "2024 (Deployments)",
    },
    { id: 8, name: "HTML", icon: <Html5Original size={50} />, doneAt: "2020" },
    { id: 9, name: "CSS", icon: <Css3Original size={50} />, doneAt: "2020" },
    {
      id: 10,
      name: "JavaScript",
      icon: <JavascriptOriginal size={50} />,
      doneAt: "2022",
    },
    {
      id: 11,
      name: "Git & GitHub",
      icon: <GitOriginal size={50} />,
      doneAt: "2023",
    },
    {
      id: 12,
      name: "APIs",
      icon: <NodejsOriginal size={50} />,
      doneAt: "2024 (Exploring)",
    },
    {
      id: 13,
      name: "VS Code",
      icon: <VscodeOriginal size={50} />,
      doneAt: "2024",
    },
  ];
  const allBackendTools = [
    {
      id: 1,
      name: "Express",
      icon: <ExpressOriginal size={50} />,
      doneAt: "2024",
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <MongodbOriginal size={50} />,
      doneAt: "2024 (Exploring)",
    },
    {
      id: 3,
      name: "Node.js",
      icon: <NodejsOriginal size={50} />,
      doneAt: "2024",
    },
    {
      id: 4,
      name: "EJS",
      icon: <Code size={50} />,
      doneAt: "2024 (UI)",
    },
    {
      id: 5,
      name: "Cookies",
      icon: <Code size={50} />,
      doneAt: "2024",
    },
    { id: 6, name: "JWT", icon: <Code size={50} />, doneAt: "2024" },
    {
      id: 7,
      name: "Bcrypt",
      icon: <Code size={50} />,
      doneAt: "2025",
    },
    {
      id: 8,
      name: "Multer",
      icon: <Database size={50} />,
      doneAt: "2025 (Exploring)",
    },
  ];

  return (
    <div className="w-full h-full overflow-y-auto backdrop-blur-xs bg-transparent [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div
        className={`w-full min-h-full p-7 rounded-2xl flex flex-col space-y-7 ${
          resolvedTheme === "dark"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col w-full h-full p-3 space-y-5">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Image
              className="flex items-center justify-center overflow-hidden border-4 border-amber-400 rounded-2xl"
              src="/images/profile.jpg"
              width={300}
              height={300}
              alt="Profile"
            />
            <div className="w-full flex-col sm:flex-row flex justify-between sm:space-y-0 space-y-5">
              <div className="flex flex-col justify-center space-y-2">
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Hi, I'm Salahudin
                </h1>
                <h1 className="text-md lg:text-xl opacity-80">
                  Next.js Frontend Developer
                </h1>
              </div>
              <div
                className={`flex md:justify-end justify-center gap-3 ${
                  resolvedTheme === "dark" ? "text-black" : "text-white"
                }`}
              >
                {socialLinks.map((each) => {
                  return (
                    <a href={each.link} key={each.id} target="_blank">
                      {each.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:inline hidden md:row-span-6 md:col-span-2 lg:col-span-3 md:col-start-4 lg:col-start-3">
            <p className="text-sm lg:text-lg lg:text-justify opacity-80 tracking-widest">
              <Quote className="relative inline -top-2 -left-2 rotate-180 text-amber-400" />
              I am a dedicated web developer focused on creating user-friendly
              and responsive websites. I enjoy building clean, modern interfaces
              and solving challenges through code. With a keen interest in
              learning, I continuously work on improving my skills and bringing
              creative ideas to life.
              <Quote className="relative top-2 left-2 inline text-amber-400" />
            </p>
          </div>
        </div>
        <MyJourneyTimeline myJourney={myJourney} />
        <div className="w-full flex flex-col items-start justify-start">
          <h1 className="flex items-center text-3xl lg:text-4xl font-bold">
            <span className="w-2 h-10 mr-2 mt-1.5 rounded-2xl bg-amber-400"></span>{" "}
            What I've learned
          </h1>
          <p className="py-5 text-sm lg:text-lg lg:text-justify tracking-widest">
            Over time, I’ve built a strong foundation in front-end development.
            Starting with HTML and CSS, I moved to JavaScript and built multiple
            small apps and tools to practice logic and interactivity. In 2024, I
            picked up React and began working on more structured, real-world
            projects. Along the way, I also explored tools like Tailwind CSS,
            Git, and deployment platforms like Vercel.
            <br /> My learning style is hands-on — I prefer building things and
            figuring out solutions as I go. With every project, I discover
            something new, and that’s what keeps me moving forward.
          </p>
          <div className="my-8 w-full h-2 rounded-2xl bg-amber-400 flex items-center justify-center"><p className='p-2 bg-amber-400 border-8 border-neutral-50 w-fit rounded-3xl font-bold'>Frontend Tools</p></div>
          <div id="tools" className="w-full flex flex-wrap items-center justify-center gap-7">
            {allFrontendTools.map((tool) => (
              <div
                className="flex flex-col items-center justify-center"
                key={tool.id}
              >
                <div className="p-1 xl:p-3 bg-neutral-400/20 rounded-2xl">
                  {tool.icon}
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="font-bold">{tool.name}</p>
                  <p>{tool.doneAt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="my-8 w-full h-2 rounded-2xl bg-amber-400 flex items-center justify-center"><p className='p-2 bg-amber-400 border-8 border-neutral-50 w-fit rounded-3xl font-bold'>Backend Tools</p></div>
          <div className="w-full italic mb-8">* Currently exploring backend and starting to practice — will dive deeper soon</div>
          <div id="tools" className="w-full flex flex-wrap gap-7 items-center justify-center">
            {allBackendTools.map((tool) => (
              <div
                className="flex flex-col items-center justify-center"
                key={tool.id}
              >
                <div className="p-1 xl:p-3 bg-neutral-400/20 rounded-2xl">
                  {tool.icon}
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="font-bold">{tool.name}</p>
                  <p>{tool.doneAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
