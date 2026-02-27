import React from "react";
import { motion } from "framer-motion";

import IMG1 from "../assets/IMG1.png";
import IMG2 from "../assets/IMG2.png";
import IMG3 from "../assets/IMG3.png";
import IMG4 from "../assets/IMG4.png";
import IMG5 from "../assets/IMG5.png";
import IMG6 from "../assets/IMG6.png";

export default function Projects() {
  const portfolioData = [
    {
      id: 1,
      image: IMG6,
      title: "Connnecto",
      github: "https://github.com/mohamedmagdym/connecto-web-site",
      demo: "https://connecto-web-site.vercel.app/",
    },
    {
      id: 2,
      image: IMG1,
      title: "Giving cycle",
      github: "https://github.com/mohamedmagdym/sample-donation-web-site-",
      demo: "https://sample-donation-web-site.vercel.app/",
    },
    {
      id: 3,
      image: IMG2,
      title: "Blue Card",
      github: "https://github.com/mohamedmagdym/BlueCart",
      demo: "https://blue-cart-nine.vercel.app/",
    },
    {
      id: 4,
      image: IMG3,
      title: "plants place",
      github: "https://github.com/mohamedmagdym/Plantes-Web-Site",
      demo: "https://plantes-web-site.vercel.app/",
    },
    {
      id: 5,
      image: IMG4,
      title: "Dewi",
      github: "https://github.com/mohamedmagdym/Dewi-project-page",
      demo: "https://mohamedmagdym.github.io/Dewi-project-page/",
    },
    {
      id: 6,
      image: IMG5,
      title: "Growth",
      github: "https://github.com/mohamedmagdym/growth",
      demo: "https://mohamedmagdym.github.io/growth/",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const reveal = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="w-[90%] md:w-[80%] mx-auto py-24 min-h-[50vh]"
    >
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 space-y-3"
      >
        <p className="text-white/60">Portfolio</p>
        <h2 className="text-3xl md:text-5xl font-medium text-[#4db5ff]">
          My Projects
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        id="portfolio"
      >
        {portfolioData.map((project) => (
          <motion.div
            key={project.id}
            variants={reveal}
            className="relative h-95 rounded-3xl overflow-hidden 
                       group cursor-pointer"
          >
            {/* Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              whileHover={{ scale: 1.08 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500" />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="relative z-10 h-full flex flex-col justify-end p-6 text-white"
            >
              <h3 className="text-2xl font-semibold mb-4 tracking-wide">
                {project.title || "Coming Soon"}
              </h3>

              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg backdrop-blur-md 
                             bg-white/20 border border-white/30
                             hover:bg-white hover:text-black
                             transition duration-300 text-sm font-medium"
                >
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-yellow-500 
                             hover:bg-yellow-600 
                             transition duration-300 
                             text-sm font-medium"
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
