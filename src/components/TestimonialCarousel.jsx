import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideText = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.4 } },
};

const slideImage = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.4 } },
};

const testimonials = [
  {
    name: "Rachel Scarlett",
    title: "Envato CEO",
    text: "Their business to develop successful digital ideas and strategies that engage and convert significant, targeted traffic develop successful digital ideas and strategies that",
    image: "https://st.depositphotos.com/1224365/2498/i/450/depositphotos_24980235-stock-photo-portrait-of-a-normal-man.jpg",
    companyLogo: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg",
  },
  {
    name: "Liam Dawson",
    title: "CEO, JetSpeed",
    text: "Their team helped us implement clear strategies for sustainable growth. Their digital expertise was a game changer.",
    image: "https://th.bing.com/th/id/OIP.CVe2vzipxZ_gdmmGhhYeYgHaD4?w=1200&h=628&rs=1&pid=ImgDetMain",
    companyLogo: "https://png.pngtree.com/png-clipart/20190604/original/pngtree-company-logo-image-png-image_1026078.jpg",
  },
  {
    name: "Alison Brown",
    title: "COO, FreshCommerce",
    text: "We saw measurable traffic and engagement growth in just weeks. Their understanding of modern digital funnels is top tier.",
    image: "https://img.freepik.com/free-photo/cheerful-young-man-smiling_176420-16060.jpg",
    companyLogo: "https://png.pngtree.com/png-clipart/20210310/original/pngtree-financial-institution-logo-png-image_5925711.jpg",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Testimonials.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden max-w-5xl mx-auto border border-gray-200 shadow">
        {/* Text Section */}
        <div className="p-6 md:p-8 min-h-[280px] flex flex-col justify-between relative hidden md:flex">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${index}`}
              variants={slideText}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute"
            >
              <p className="text-blue-900 text-base leading-relaxed mb-4">{testimonial.text}</p>
              <p className="font-semibold text-black">{testimonial.name}, {testimonial.title}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-auto flex items-center gap-4 text-xl z-10 relative">
            <button onClick={prev} className="hover:text-lime-600 transition">&lt;</button>
            <span className="text-sm font-medium text-gray-800">{index + 1} — {testimonials.length}</span>
            <button onClick={next} className="hover:text-lime-600 transition">&gt;</button>
          </div>
        </div>

        {/* Image Section (Full Width on Mobile) */}
        <div className="relative w-full h-72 md:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${index}`}
              variants={slideImage}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full h-full absolute top-0 left-0"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <img
                src={testimonial.companyLogo}
                alt="Logo"
                className="absolute bottom-4 left-4 bg-white p-2 rounded-xl w-16"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
