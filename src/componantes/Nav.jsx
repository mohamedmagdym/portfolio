import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaServicestack,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

export default function BottomNav() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", icon: <FaHome size={16} /> },
    { id: "about", icon: <FaUser size={16} /> },
    { id: "experience", icon: <FaBriefcase size={16} /> },
    { id: "services", icon: <FaServicestack size={16} /> },
    { id: "portfolio", icon: <FaFolderOpen size={16} /> },
    { id: "contact", icon: <FaEnvelope size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
        flex items-center gap-4 px-4 py-2
        rounded-full
        backdrop-blur-lg
        bg-white/10
        border border-white/20
        shadow-lg
      "
      >
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActive(link.id)}
            className={`p-2 rounded-full transition duration-300
              ${
                active === link.id
                  ? "bg-sky-500 text-white scale-110"
                  : "text-white/70 hover:text-white"
              }`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
