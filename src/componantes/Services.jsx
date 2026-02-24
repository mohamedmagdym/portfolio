import React from "react";
import { FaPaintBrush, FaRocket, FaCode } from "react-icons/fa";

export default function ServicesCards() {
  const cards = [
    {
      id: 1,
      icon: <FaPaintBrush />,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: "Fast Performance",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
    },
    {
      id: 3,
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id quam placeat natus, at fugiat?",
    },
  ];

  return (
    <section className="py-16" id="services">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Title */}
        <div className="text-center mb-20 space-y-3">
          <p className="text-white/60 tracking-wide">What I Offer</p>
          <h2 className="text-3xl md:text-5xl font-medium text-[#4db5ff]">
            Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((item) => (
            <div
              key={item.id}
              className="
                group relative
                rounded-2xl bg-[#242a67]
                px-7 py-8
                border border-transparent
                shadow-lg
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(77,181,255,0.25)]
                hover:border-[#4db5ff]/40
              "
            >
              {/* Icon */}
              <div
                className="
                text-[#6fd3ff] text-4xl mb-5
                transition-all duration-500
                group-hover:scale-110
                group-hover:-translate-y-1
              "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-semibold mb-3 relative inline-block">
                {item.title}
                <span
                  className="
                  absolute left-0 -bottom-1 h-0.5 w-0
                  bg-[#4db5ff]
                  transition-all duration-500
                  group-hover:w-full
                "
                />
              </h3>

              {/* Description */}
              <p
                className="
                text-white/70 text-sm leading-6
                transition duration-500
                group-hover:text-white/90
              "
              >
                {item.desc}
              </p>

              {/* Glow effect */}
              <div
                className="
                absolute inset-0 rounded-2xl
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-linear-to-tr from-[#4db5ff]/5 to-transparent
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
