import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactCTA() {
  return (
    <section className="px-6 lg:px-20 py-16">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative rounded-3xl overflow-hidden min-h-[300px] lg:min-h-[400px] flex items-center justify-start text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 50%), url('https://img.freepik.com/free-photo/happy-business-team-discussing-project-laptop_74855-2183.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with opacity change */}
        <div className="absolute inset-0 bg-black/50 rounded-3xl" />

        <div className="p-8 sm:p-12 rounded-3xl max-w-md m-4 sm:m-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 leading-tight">
            WANT MORE <br /> INFORMATION?
          </h2>
          <motion.button
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative group overflow-hidden px-6 py-3 bg-white/80 text-black rounded-full font-semibold transition duration-300 hover:bg-black hover:text-white border border-white"
          >
            <span className="relative z-10 block group-hover:animate-diagonal-slide">
              Let's Talk
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
