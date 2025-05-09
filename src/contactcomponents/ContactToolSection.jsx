import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ContactToolSection() {
  return (
    <section className="bg-white pb-20 relative">
      {/* Full-width Image */}
      <div className="w-full">
        <motion.img
          src="https://malikaziz.com.au/wp-content/uploads/2024/07/6742.jpg"
          alt="Contact Visual"
          className="w-full h-[550px] object-cover rounded-none lg:rounded-b-2xl"
          variants={container}
          initial="hidden"
          animate="visible"
        />
      </div>

      {/* Floating Form */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-10 bg-white rounded-2xl shadow-lg p-6 w-[92%] sm:w-[380px]"
      >
        <motion.h3 variants={item} custom={1} className="text-lg font-semibold mb-4">
          Get in Touch
        </motion.h3>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
          />
          <input
            type="text"
            placeholder="Area of Interest"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
          />
          <textarea
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm resize-none h-24 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lime-400 text-black font-semibold py-2 rounded-md hover:bg-lime-500 transition"
          >
            Send email
          </button>
        </form>
      </motion.div>

      {/* Contact Info beside form */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mt-40 px-6 lg:px-20"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:ml-[400px] max-w-3xl"
        >
          <motion.h3
            variants={item}
            custom={2}
            className="text-2xl font-semibold mb-4"
          >
            Send us a message
          </motion.h3>
          <motion.p
            variants={item}
            custom={3}
            className="text-gray-700 text-base mb-6"
          >
            Looking for help with your tax return or payroll? Or maybe you're interested in full
            accounting services. Whatever you need, we’re here to help you get on with business.
          </motion.p>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-4 text-gray-800 text-sm"
          >
            <motion.li variants={item} custom={4} className="flex items-center gap-3">
              <Phone className="text-lime-500" size={18} />
              0449779218
            </motion.li>
            <motion.li variants={item} custom={5} className="flex items-center gap-3">
              <Mail className="text-lime-500" size={18} />
              reception@malikaziz.com.au
            </motion.li>
            <motion.li variants={item} custom={6} className="flex items-center gap-3">
              <MapPin className="text-lime-500" size={18} />
              PO Box 795 Labrador, Qld 4215
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
