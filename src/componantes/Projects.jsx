import React from "react";
import { motion } from "framer-motion";

import IMG1 from "../assets/IMG1.png";
import IMG2 from "../assets/IMG2.png";
import IMG3 from "../assets/IMG3.png";
import IMG4 from "../assets/IMG4.png";
import IMG5 from "../assets/IMG5.png";
import IMG6 from "../assets/IMG6.png";
import IMG7 from "../assets/IMG7.png";
import IMG8 from "../assets/IMG8.png";

export default function Projects() {
  const portfolioData = [
    {
      id: 8,
      image: IMG8,
      title: "Shop Vista",
      github: "https://github.com/mohamedmagdym/shopVista",
      demo: "https://shop-vista-virid.vercel.app/",
    },
    {
      id: 7,
      image: IMG7,
      title: "Brand Aid Gaming Event",
      github: "https://github.com/mohamedmagdym/Brand_Aid",
      demo: "https://brand-aid-lemon.vercel.app/",
    },
    {
      id: 1,
      image: IMG6,
      title: "Connecto",
      github: "https://github.com/mohamedmagdym/connecto-web-site",
      demo: "https://connecto-web-site.vercel.app/",
    },
    {
      id: 2,
      image: IMG1,
      title: "Giving Cycle",
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
      title: "Plants Place",
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
        staggerChildren: 0.15,
      },
    },
  };

  const reveal = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
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
        id="portfolio"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioData.map((project) => (
          <motion.article
            key={project.id}
            variants={reveal}
            whileHover={{ y: -8 }}
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Wrapper */}
            <div className="relative h-[230px] overflow-hidden bg-[#0f172a]">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition duration-300 text-sm font-medium"
                >
                  GitHub
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-yellow-500 text-black hover:bg-yellow-400 transition duration-300 text-sm font-semibold"
                >
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
