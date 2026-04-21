import { motion } from "framer-motion";
import Css from "../assets/css3.svg";
import Figma from "../assets/figma.svg";
import Javascript from "../assets/javascript.svg";
import ReactJS from "../assets/react.svg";
import Tailwind from "../assets/tailwindcss.svg";
import Nodejs from "../assets/nodejs.svg";

import { FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Skills() {
  const SkillsData = [
    { id: 1, image: Css, title: "CSS", disc: "User Interface", isIcon: false },
    {
      id: 2,
      image: Javascript,
      title: "JavaScript",
      disc: "Interaction",
      isIcon: false,
    },
    {
      id: 3,
      image: <SiTypescript />,
      title: "TypeScript",
      disc: "Type Safety",
      isIcon: true,
    },
    {
      id: 4,
      image: ReactJS,
      title: "React",
      disc: "Framework",
      isIcon: false,
    },
    {
      id: 5,
      image: <SiNextdotjs />,
      title: "Next.js",
      disc: "Frontend Framework",
      isIcon: true,
    },
    {
      id: 6,
      image: <SiRedux />,
      title: "Redux Toolkit",
      disc: "State Management",
      isIcon: true,
    },
    {
      id: 7,
      image: Tailwind,
      title: "TailwindCSS",
      disc: "User Interface",
      isIcon: false,
    },
    {
      id: 8,
      image: Figma,
      title: "Figma",
      disc: "Design Tool",
      isIcon: false,
    },
    {
      id: 9,
      image: <FaGitAlt />,
      title: "Git",
      disc: "Version Control",
      isIcon: true,
    },
    {
      id: 10,
      image: <FaGithub />,
      title: "GitHub",
      disc: "Repository Hosting",
      isIcon: true,
    },
    {
      id: 11,
      image: Nodejs,
      title: "NodeJS",
      disc: "Web Server",
      isIcon: false,
    },
    {
      id: 12,
      image: <SiExpress />,
      title: "Express.js",
      disc: "Backend Basics",
      isIcon: true,
    },
    {
      id: 13,
      image: <SiMongodb />,
      title: "MongoDB",
      disc: "Database",
      isIcon: true,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div
      className="w-[90%] md:w-[80%] mx-auto py-24 min-h-[50vh]"
      id="experience"
    >
      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center space-y-4 capitalize mb-12"
      >
        <p className="text-base text-white/60 font-light">what skills i have</p>
        <h1 className="text-3xl font-medium text-[#4db5ff]">my experience</h1>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {SkillsData.map(({ id, image, title, disc, isIcon }) => (
          <motion.div
            key={id}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="flex items-center gap-4 bg-[#2c2c6c] p-4 rounded-2xl hover:bg-[#34348a] transition"
          >
            <div className="bg-[#1f1f38] p-3 rounded-full shrink-0 flex items-center justify-center">
              {isIcon ? (
                <div className="text-[#4db5ff] text-3xl">{image}</div>
              ) : (
                <img src={image} alt={title} className="w-10 h-10" />
              )}
            </div>

            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-white/60 text-sm">{disc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
