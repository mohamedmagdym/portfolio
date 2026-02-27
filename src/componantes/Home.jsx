import React from "react";
import { motion } from "framer-motion";
import cv from "../assets/cv.pdf";
import me from "../assets/me.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-[90%] md:w-[80%] mx-auto 
      flex flex-col justify-center items-center 
      text-center relative gap-8 py-5"
    >
      {/* Text */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        <motion.h3 variants={fadeUp} className="text-lg md:text-xl font-light">
          Hello I'm
        </motion.h3>

        <motion.div className="overflow-hidden">
          <motion.h1
            className="text-3xl md:text-5xl font-medium"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Mohamed Magdy
          </motion.h1>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-white/60 font-light"
        >
          Frontend Developer ( React JS & Next JS )
        </motion.p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          href={cv}
          download
          className="px-8 py-3 rounded-xl border-2 border-cyan-400 
          text-cyan-400 font-medium transition-all duration-300 
          hover:bg-cyan-400 hover:text-slate-900"
        >
          Download CV
        </motion.a>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="px-8 py-3 rounded-xl 
          bg-cyan-400 text-slate-900 font-medium 
          transition-all duration-300 hover:bg-cyan-300 
          hover:shadow-lg"
        >
          Let's Talk
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="mt-6 
        w-64 sm:w-72 md:w-80
        h-85 sm:h-95 md:h-105
        bg-linear-to-b from-[#4db5ff] to-[#2c2c6c]
        rounded-t-full overflow-hidden
        flex items-end justify-center shadow-2xl"
      >
        <img src={me} alt="profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden md:flex flex-col gap-4 
        absolute left-0 bottom-10 items-center text-xl"
      >
        {[FaLinkedin, FaGithub, FaWhatsapp].map((Icon, i) => (
          <motion.a
            key={i}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            href={
              i === 0
                ? "https://www.linkedin.com/in/mohamed-magdy-4167433b2/"
                : i === 1
                  ? "https://github.com/mohamedmagdym"
                  : "https://wa.me/201211364187"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4db5ff] hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <Icon size={22} />
          </motion.a>
        ))}
        <div className="w-0.5 h-14 bg-[#4db5ff]"></div>
      </motion.div>

      {/* Scroll */}
      <motion.a
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        href="#about"
        className="hidden md:block rotate-90 absolute right-0 bottom-20 
        text-[#4db5ff] hover:text-white transition cursor-pointer"
      >
        scroll down
      </motion.a>
    </section>
  );
}
