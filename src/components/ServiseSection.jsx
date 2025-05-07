"use client";

import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-whit">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Image - Wider */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-3xl overflow-hidden lg:col-span-3 h-64 sm:h-72 md:h-80"
        >
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_488875073_264066.jpg"
            alt="Service 1"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Image with Overlay Buttons */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative rounded-3xl overflow-hidden lg:col-span-2 h-64 sm:h-72 md:h-80"
        >
          <img
            src="https://img.freepik.com/free-photo/young-business-woman-winning_23-2149286497.jpg"
            alt="Service 2"
            className="w-full h-full object-cover"
          />

          {/* Responsive Overlay Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3">
            {["Investment Management", "Tax Returns", "Audit"].map((label, index) => (
              <span
                key={index}
                className="bg-black/40 text-white px-4 py-2 rounded-full font-semibold text-sm backdrop-blur-md hover:bg-lime-400 hover:text-black transition"
              >
                {label}
              </span>
            ))}

            {/* More Services Button - Same styling for consistency */}
            <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-lime-500 transition">
              More Services ...
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
