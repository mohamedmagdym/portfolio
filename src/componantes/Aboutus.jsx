import React from "react";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import me from "../assets/me.png";

export default function Aboutus() {
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="min-h-screen w-[90%] md:w-[80%] mx-auto 
             capitalize py-24 md:py-26"
      id="about"
    >
      {/* Title */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mx-auto w-full space-y-4"
      >
        <p className="text-base text-white/60 font-light">get you know</p>
        <h1 className="text-3xl font-medium text-[#4db5ff]">About me</h1>
      </motion.div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 my-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative w-full sm:w-2/3 lg:w-1/3 
                    transition-transform duration-500 hover:scale-105"
        >
          <div
            className="absolute inset-0 
                      bg-linear-to-b from-[#4db5ff] to-[#2c2c6c] 
                      rounded-3xl"
          ></div>

          <div
            className="relative 
                      bg-linear-to-b from-[#4db5ff] to-[#2c2c6c] 
                      rounded-3xl overflow-hidden 
                      rotate-6 shadow-2xl 
                      hover:rotate-1 transition"
          >
            <img
              src={me}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right */}
        <div className="flex flex-col gap-8 w-full lg:w-3/4">
          {/* Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {[FaAward, FiUsers, VscFolderLibrary].map((Icon, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#2c2c6c] rounded-3xl p-8 
                        w-full sm:w-1/3 text-center 
                        transition duration-300 
                        hover:bg-[#34348a] hover:-translate-y-2"
              >
                <Icon className="text-[#4db5ff] text-3xl mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  {index === 0
                    ? "Experience"
                    : index === 1
                      ? "Clintes"
                      : "projects"}
                </h3>
                <p className="text-white/60 text-sm">
                  {index === 0
                    ? "2+ years working"
                    : index === 1
                      ? "20+ workwide"
                      : "10+ completed"}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/60 text-md font-light"
          >
            Front-End Developer specializing in React.js and Next.js,
            experienced in SSR, SSG, dynamic routing, API integration, and
            performance optimization. I build responsive, scalable interfaces
            using Tailwind CSS with a strong focus on clean architecture and
            user experience.
          </motion.p>

          {/* Button */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="px-8 py-3 rounded-xl 
                   bg-cyan-400 text-slate-900 font-medium 
                   transition-all duration-300 hover:bg-cyan-300 
                   hover:shadow-lg w-fit"
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </div>
  );
}
