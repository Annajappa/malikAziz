"use client";

import { motion } from "framer-motion";
import "../stylesmodules/animtedbutton.css"

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    title: "Business Advisory",
    description: "Strategic guidance to help your business grow and thrive.",
    image: "https://img.freepik.com/free-photo/business-people-analyzing-financial-graphs_53876-15959.jpg",
  },
  {
    title: "Business Accounting",
    description: "Accurate financial management to keep your business on track.",
    image: "https://img.freepik.com/free-photo/person-using-calculator-with-financial-charts_53876-15084.jpg",
  },
  {
    title: "Tax Accounting",
    description: "Expert tax planning and compliance to minimize your tax liability.",
    image: "https://img.freepik.com/free-photo/tax-day-paperwork-office_53876-14947.jpg",
  },
  {
    title: "Bookkeeping Services",
    description: "Organized and precise bookkeeping to streamline your finances.",
    image: "https://img.freepik.com/free-photo/designer-working-blueprints-table_23-2147775817.jpg",
  },
  {
    title: "SMSF Accountants",
    description: "Specialized advice for managing self-managed superannuation funds.",
    image: "https://img.freepik.com/free-photo/businessman-talking-phone-office_23-2147663665.jpg",
  },
  {
    title: "Software Solutions",
    description: "Advanced software tools to simplify your accounting processes.",
    image: "https://img.freepik.com/free-photo/software-developers-working-project_23-2149397321.jpg",
  },
];

export default function Services() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2 text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600">Comprehensive Financial Solutions for Your Needs</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {services.map((service, index) => (
  <motion.div
    key={index}
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    className="bg-[#1b171f] rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl"
  >
    <div className="overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 text-white text-center">
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-sm text-gray-300">{service.description}</p>
    </div>
  </motion.div>
))}

      </div>
      <div className="flex justify-center mt-12">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative group overflow-hidden bg-white text-black border border-black px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-black hover:text-white"
  >
    <span className="relative z-10 block group-hover:animate-diagonal-slide">
      See More →
    </span>
  </motion.button>
</div>

    </section>
  );
}
