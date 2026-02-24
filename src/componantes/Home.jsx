import React from "react";
import cv from "../assets/cv.pdf";
import me from "../assets/me.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <section id="home"
      className="min-h-screen w-[90%] md:w-[80%] mx-auto 
                        flex flex-col justify-center items-center 
                        text-center relative gap-8  py-5"
    >
      {/* Text */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-light">Hello I'm</h3>

        <h1 className="text-3xl md:text-5xl font-medium">Mohamed Magdy</h1>

        <p className="text-base md:text-lg text-white/60 font-light">
          Frontend Developer ( React JS & Next JS )
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={cv}
          download
          className="px-8 py-3 rounded-xl border-2 border-cyan-400 
                     text-cyan-400 font-medium transition-all duration-300 
                     hover:bg-cyan-400 hover:text-slate-900"
        >
          Download CV
        </a>

        <button
          className="px-8 py-3 rounded-xl 
                           bg-cyan-400 text-slate-900 font-medium 
                           transition-all duration-300 hover:bg-cyan-300 
                           hover:shadow-lg"
        >
          Let's Talk
        </button>
      </div>

      {/* Image */}
      <div
        className="mt-6 
             w-64 sm:w-72 md:w-80
             h-85 sm:h-95 md:h-105
             bg-linear-to-b from-[#4db5ff] to-[#2c2c6c]
             rounded-t-full overflow-hidden
             flex items-end justify-center shadow-2xl"
      >
        <img src={me} alt="profile" className="w-full h-full object-cover" />
      </div>

      {/* Social */}
      <div
        className="hidden md:flex flex-col gap-4 
                      absolute left-0 bottom-10 items-center text-xl"
      >
        <a
          href="https://www.linkedin.com/in/mohamed-magdy-4167433b2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4db5ff] hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/mohamedmagdym"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4db5ff] hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://wa.me/201211364187"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4db5ff] hover:text-white hover:-translate-y-1 transition-all duration-300"
        >
          <FaWhatsapp size={22} />
        </a>
        <div className="w-0.5 h-14 bg-[#4db5ff]"></div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="hidden md:block rotate-90 absolute right-0 bottom-20 
                      text-[#4db5ff] hover:text-white transition cursor-pointer"
      >
        scroll down
      </a>
    </section>
  );
}
