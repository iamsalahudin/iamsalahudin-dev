import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const ProjectSlider = (theme) => {
  const projectsList = [
    {
      id: 1,
      name: "The Clay Colletion",
      src: "/images/claycollection.jpg",
      link: "https://the-clay-collection-five.vercel.app/",
      complete: true,
    },
    {
      id: 2,
      name: "The Weather App",
      src: "/images/weatherapp.jpg",
      link: "https://the-weather-app-silk-delta.vercel.app/",
      complete: true,
    },
    {
      id: 3,
      name: "Ultimate Todo App",
      src: "/images/todoapp.jpg",
      link: "https://ultimate-todo-app-psi.vercel.app/",
      complete: true,
    },
    {
      id: 4,
      name: "The Clay Colletion",
      src: "/images/claycollection.jpg",
      link: "https://the-clay-collection-five.vercel.app/",
      complete: true,
    },
    {
      id: 5,
      name: "The Weather App",
      src: "/images/weatherapp.jpg",
      link: "https://the-weather-app-silk-delta.vercel.app/",
      complete: true,
    },
    {
      id: 6,
      name: "Ultimate Todo App",
      src: "/images/todoapp.jpg",
      link: "https://ultimate-todo-app-psi.vercel.app/",
      complete: true,
    },
  ];
  return (
    <div className="relative w-full h-full backdrop-blur-xs bg-transparent">
      <div className="absolute z-10 w-full px-3 pt-3 pb-10 backdrop-blur-3xl bg-gradient-to-b from-neutral-400/40 to-transparent text-3xl xl:text-4xl font-bold overflow-hidden">
        <h1>My recent works</h1>
      </div>
      <div className="w-full h-[600px] md:h-[800px] lg:h-full overflow-hidden">
        <motion.div
          className="w-full h-[250%] grid grid-rows-6"
          animate={{ y: [`0%`, "-50%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          whileHover={{ y: "0%" }}
        >
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="w-full pb-2 flex items-center justify-center p-3"
            >
              <a
                className="flex flex-col items-center justify-center w-full h-full border rounded-lg bg-neutral-300/30 border-neutral-500 p-2"
                target="_blank"
                href={project.link}
              >
                <Image
                  src={project.src}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-full rounded-lg"
                />
                <div className="w-full flex justify-between pt-3">
                  <span className="font-bold">{project.name}</span>
                  {project.complete ? (
                    <span className="p-1 rounded-md font-semibold bg-green-400 text-green-900">
                      Done
                    </span>
                  ) : (
                    <span className="p-1 rounded-md font-semibold bg-amber-400 text-amber-900">
                      Progress...
                    </span>
                  )}
                </div>
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
