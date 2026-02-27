import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-[#4FA3D1] text-center py-16"
    >
      {/* Logo */}
      <motion.h2
        variants={fadeUp}
        className="text-3xl font-semibold text-white mb-8 tracking-wide"
      >
        Mohamed Magdy
      </motion.h2>

      {/* Nav Links */}
      <motion.div
        variants={stagger}
        className="flex flex-wrap justify-center gap-8 text-white/80 text-sm mb-10"
      >
        {[
          "Home",
          "About",
          "Experience",
          "Services",
          "portfolio",
          "Contact",
        ].map((item, index) => (
          <motion.a
            key={index}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            href={`#${item.toLowerCase()}`}
            className="relative group transition duration-300"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={stagger}
        className="flex justify-center gap-6 mb-10"
      >
        {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, i) => (
          <motion.a
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            href="#"
            className="bg-slate-900 text-white p-3 rounded-xl 
                       transition duration-300 
                       hover:bg-white hover:text-sky-500 
                       hover:scale-110 hover:shadow-lg hover:shadow-white/30"
          >
            <Icon size={14} />
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p variants={fadeUp} className="text-xs text-white/70">
        © Mohamed Magdy All rights reserved
      </motion.p>
    </motion.footer>
  );
}
