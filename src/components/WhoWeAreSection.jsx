"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function WhoWeAreSection() {
  const imageRef = useRef(null);

  // Tilt effect
  const handleMouseMove = (e) => {
    const el = imageRef.current;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    el.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    imageRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold text-gray-700 mb-2">Who We Are</p>
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
            Experts in Financial Excellence
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            At Malik Aziz &amp; Co., our dedicated team simplifies your financial journey.
            We offer services like business advisory, bookkeeping, tax planning, and cryptocurrency accounting.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Serving clients on the Gold Coast, across Australia, and overseas, we help you stay
            compliant and maximize your financial potential.
          </p>
          <button className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-500 transition">
            More About us →
          </button>
        </motion.div>

        {/* Image with Tilt Effect */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl overflow-hidden shadow-xl transform-gpu transition-transform duration-300 ease-out"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={imageRef}
        >
          <img
            src="https://malikaziz.com.au/wp-content/uploads/2021/07/bg-1@2x-scaled-1-760x520-1.jpeg"
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
