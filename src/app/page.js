"use client";
import { useTheme } from "next-themes";
import Backlight from "./(components)/Backlight";
import { ProjectSlider } from "./(components)/ProjectSlider";
import { MainProfile } from "./(components)/MainProfile";
import { MainTools } from "./(components)/MainTools";

export const Home = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="grid lg:grid-cols-11 grid-cols-1 lg:grid-rows-6 gap-7 w-full lg:h-full overflow-scroll md:overflow-hidden">
      <Backlight
        className={`cursor-grab overflow-hidden w-full h-full rounded-2xl lg:col-span-7 lg:row-span-4 ${
          resolvedTheme === "dark"
            ? "text-white bg-black"
            : "text-black bg-white"
        }`}
      >
        <MainProfile theme={resolvedTheme} />
      </Backlight>
      <Backlight
        className={`cursor-grab rounded-2xl lg:col-span-7 lg:row-span-2 lg:col-start-1 lg:row-start-5 ${
          resolvedTheme === "dark"
            ? "text-white bg-black"
            : "text-black bg-white"
        }`}
      >
        <MainTools theme={resolvedTheme} />
      </Backlight>
      <Backlight
        className={`cursor-grab rounded-2xl lg:col-span-4 lg:row-span-6 lg:col-start-8 lg:row-start-1 ${
          resolvedTheme === "dark"
            ? "text-white bg-black"
            : "text-black bg-white"
        }`}
      >
        <ProjectSlider theme={resolvedTheme} />
      </Backlight>
    </div>
  );
};

export default Home;