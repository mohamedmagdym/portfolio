import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#4FA3D1] text-center py-16">
      {/* Logo */}
      <h2 className="text-3xl font-semibold text-white mb-8 tracking-wide">
        Mohamed Magdy
      </h2>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm mb-10">
        {[
          "Home",
          "About",
          "Experience",
          "Services",
          "portfolio",
          "Contact",
        ].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="relative group transition duration-300"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-10">
        <a
          href="#"
          className="bg-slate-900 text-white p-3 rounded-xl 
                     transition duration-300 
                     hover:bg-white hover:text-sky-500 
                     hover:scale-110 hover:shadow-lg hover:shadow-white/30"
        >
          <FaFacebookF size={14} />
        </a>

        <a
          href="#"
          className="bg-slate-900 text-white p-3 rounded-xl 
                     transition duration-300 
                     hover:bg-white hover:text-sky-500 
                     hover:scale-110 hover:shadow-lg hover:shadow-white/30"
        >
          <FaInstagram size={14} />
        </a>

        <a
          href="#"
          className="bg-slate-900 text-white p-3 rounded-xl 
                     transition duration-300 
                     hover:bg-white hover:text-sky-500 
                     hover:scale-110 hover:shadow-lg hover:shadow-white/30"
        >
          <FaXTwitter size={14} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-white/70">
        © Mohamed Magdy All rights reserved
      </p>
    </footer>
  );
}
