import { useState } from "react";
import { motion } from "framer-motion";
import TiltImages from "./TiltiImages";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const industries = [
  {
    title: "Medical",
    content:
      "We offer comprehensive accounting and tax services tailored for healthcare professionals. From solo practitioners to large medical practices, our solutions ensure your financial health is as robust as your patients'.",
  },
  {
    title: "Real Estate",
    content:
      "Specialized financial strategies for real estate professionals, including investment tracking, capital gains planning, and expense management.",
  },
  {
    title: "Freelancers",
    content:
      "Flexible accounting and tax solutions for freelance professionals and contractors to help manage income, deductions, and compliance.",
  },
  {
    title: "Manufacturing",
    content:
      "Industry-specific support for manufacturers including cost accounting, inventory optimization, and financial forecasting.",
  },
];

export default function IndustriesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 lg:px-20 py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image stack */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <TiltImages />
        </motion.div>

        {/* Text + Accordion */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We have experts in a range of industries including:
          </h2>
          <p className="text-gray-600 mb-8">
            Our expert team provides specialized accounting services to ensure compliance and optimize financial performance across various sectors.
          </p>

          {/* Accordion */}
          <div className="flex flex-col gap-4">
            {industries.map((industry, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className={`cursor-pointer rounded-xl p-6 transition ${
                    isOpen
                      ? "bg-[#1b171f] text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-lg ${
                        isOpen ? "bg-lime-400 text-black" : "bg-white text-black border border-gray-300"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-semibold">{industry.title}</p>
                      {isOpen && (
                        <p className="mt-2 text-sm text-gray-300">
                          {industry.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
