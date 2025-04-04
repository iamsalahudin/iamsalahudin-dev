import {
  CanvaOriginal,
  FigmaOriginal,
  FramermotionOriginal,
  NextjsOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  VercelOriginal,
} from "devicons-react";

export const MainTools = (theme) => {
  const frontendTools = [
    { id: 1, name: "React", icon: <ReactOriginal size={50} /> },
    { id: 2, name: "Next.js", icon: <NextjsOriginal size={50} /> },
    { id: 3, name: "Tailwind CSS", icon: <TailwindcssOriginal size={50} /> },
    { id: 4, name: "Framer Motion", icon: <FramermotionOriginal size={50} /> },
    { id: 5, name: "Figma", icon: <FigmaOriginal size={50} /> },
    { id: 6, name: "Canva", icon: <CanvaOriginal size={50} /> },
    { id: 7, name: "Vercel", icon: <VercelOriginal size={50} /> },
  ];
  return (
    <div className="w-full h-full backdrop-blur-xs bg-transparent pb-5 md:pb-0">
      <div className="absolute w-full px-3 pt-3 pb-8 backdrop-blur-xs bg-gradient-to-b from-white/10 to-transparent text-3xl xl:text-4xl font-bold overflow-hidden">
        <h1>I'm working with tools like</h1>
      </div>
      <div className="xl:pt-20 lg:pt-14 pt-28 w-full h-full grid md:grid-cols-4 grid-cols-2 gap-5 lg:gap-0 lg:flex lg:justify-center lg:flex-nowrap lg:space-x-5 overflow-y-hidden lg:overflow-x-scroll xl:overflow-hidden">
        {frontendTools.map((tool) => (
          <div
            className="flex flex-col items-center justify-center"
            key={tool.id}
          >
            <div className="p-1 xl:p-3 bg-neutral-400/20 rounded-2xl">
              {tool.icon}
            </div>
            <div className="xl:inline lg:hidden md:inline">{tool.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
