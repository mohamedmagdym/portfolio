import React, { useRef } from "react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_pmk2xkp", "template_yack4sa", form.current, {
          publicKey: "yKwSpgdJgtoRsEaQM",
        })
        .then(
          () => {
            e.target.reset()
            toast.success("messsage is sended")
            console.log("SUCCESS!");
          },
          (error) => {
            toast.error("you have error")
            console.log("FAILED...", error.text);
          },
        );
    };

  const contactCards = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      title: "Email",
      value: "mohamed.magdy65427@gmail.com",
      link: "mailto:mohamed.magdy65427@gmail.com",
    },
    {
      id: 2,
      icon: <FaFacebookMessenger />,
      title: "Messenger",
      value: "Mohamed Magdy",
      link: "https://m.me/",
    },
    {
      id: 3,
      icon: <FaWhatsapp />,
      title: "+201211364187",
      value: "WhatsApp",
      link: "https://wa.me/201211364187",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="w-[90%] md:w-[75%] mx-auto">
        {/* Title */}
        <div className="text-center mb-10 space-y-1">
          <p className="text-white/50 text-xs tracking-widest">GET IN TOUCH</p>
          <h2 className="text-2xl md:text-3xl font-medium text-[#4db5ff]">
            Contact Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Left Cards */}
          <div className="space-y-4">
            {contactCards.map((c) => (
              <div
                key={c.id}
                className="
                  rounded-xl bg-[#242a67]
                  px-5 py-6 text-center
                  border border-white/5
                  transition duration-300
                  hover:-translate-y-1
                  hover:border-[#4db5ff]/30
                "
              >
                <div className="text-[#4db5ff] text-lg flex justify-center mb-2">
                  {c.icon}
                </div>

                <h3 className="text-white text-sm font-medium">{c.title}</h3>

                <p className="text-white/60 text-xs mt-1">{c.value}</p>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-3 text-xs text-[#4db5ff] hover:text-white transition "
                >
                  Send Message
                </a>
              </div>
            ))}
          </div>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-12">
            <input
              name="name"
              type="text"
              placeholder="Your Full Name"
              className="
                w-full rounded-lg bg-transparent
                border border-[#4db5ff]/25
                px-4 py-3 text-sm text-white
                placeholder:text-white/40
                outline-none transition
                focus:border-[#4db5ff]
              "
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="
                w-full rounded-lg bg-transparent
                border border-[#4db5ff]/25
                px-4 py-3 text-sm text-white
                placeholder:text-white/40
                outline-none transition
                focus:border-[#4db5ff]
              "
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              className="
                w-full rounded-lg bg-transparent
                border border-[#4db5ff]/25
                px-4 py-3 text-sm text-white
                placeholder:text-white/40
                outline-none resize-none transition
                focus:border-[#4db5ff]
              "
            />

            <button
              type="submit"
              className="
                px-6 py-2.5 text-sm rounded-md
                bg-[#4db5ff] text-[#0b1020] font-medium
                transition duration-300
                hover:bg-[#2ea8ff] cursor-pointer
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
