import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Quote } from "lucide-react";

export const MainProfile = ({ theme }) => {
  const socialLinks = [
    {
      id: 1,
      link: "https://www.facebook.com/salahudinskt",
      icon: (
        <Facebook className="rounded-xl bg-amber-300 p-1 xl:h-10 xl:w-10 h-7 w-7" />
      ),
    },
    {
      id: 2,
      link: "https://www.instagram.com/salahudin9091/",
      icon: (
        <Instagram className="rounded-xl bg-amber-300 p-1 xl:h-10 xl:w-10 h-7 w-7" />
      ),
    },
    {
      id: 3,
      link: "https://discord.com/users/iamsalahudin123",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="rounded-xl bg-amber-300 p-1 xl:h-10 xl:w-10 h-7 w-7"
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
        <Linkedin className="rounded-xl bg-amber-300 p-1 xl:h-10 xl:w-10 h-7 w-7" />
      ),
    },
    {
      id: 5,
      link: "https://github.com/iamsalahudin",
      icon: (
        <Github className="rounded-xl bg-amber-300 p-1 xl:h-10 xl:w-10 h-7 w-7" />
      ),
    },
  ];
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 md:gap-3 gap-5 md:grid-rows-7 w-full h-full p-3 backdrop-blur-xs bg-transparent">
      <Image
        className=" w-full h-full flex items-center justify-center overflow-hidden border-4 border-amber-400 rounded-2xl md:row-span-5 md:col-span-3 lg:col-span-2"
        src="/images/profile.jpg"
        width={600}
        height={600}
        alt="Profile"
      />
      <div className="flex flex-col justify-center space-y-2 md:row-span-2 md:col-span-3 lg:col-span-2 md:row-start-6">
        <h1 className="text-3xl lg:text-2xl lg:tracking-tighter xl:tracking-wide xl:text-4xl font-bold">
          Hi, I'm Salahudin
        </h1>
        <h1 className="text-md lg:tracking-tighter xl:tracking-wide xl:text-xl opacity-80">
          Next.js Frontend Developer
        </h1>
      </div>
      <div className="md:inline hidden md:row-span-6 md:col-span-2 lg:col-span-3 md:col-start-4 lg:col-start-3">
        <h1 className="text-sm xl:text-lg lg:text-justify opacity-80 p-5 tracking-widest">
          <Quote className="relative inline -top-2 -left-2 rotate-180 text-amber-400" />
          I am a dedicated web developer focused on creating user-friendly and
          responsive websites. I enjoy building clean, modern interfaces and
          solving challenges through code. With a keen interest in learning, I
          continuously work on improving my skills and bringing creative ideas
          to life.
          <Quote className="relative top-2 left-2 inline text-amber-400" />
        </h1>
      </div>
      <div
        className={`flex items-center md:justify-end justify-center space-x-3 ${
          theme === "dark" ? "text-black" : "text-white"
        } md:row-span-1 md:col-span-2 lg:col-span-3 md:col-start-4 lg:col-start-3 md:row-start-7`}
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
  );
};
