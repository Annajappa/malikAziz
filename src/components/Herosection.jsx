"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-white via-lime-100 to-lime-50 px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* Left Side */}
      <div className="w-full lg:w-[60%]">
        <motion.p variants={item} className="text-lg font-medium text-gray-700 mb-4">
          Gold Coast's Trusted Accounting Experts
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold text-black leading-tight mb-6"
        >
          Simplifying Your Finances, <br /> Empowering Your Future
        </motion.h1>

        <motion.button
          variants={item}
          className="mt-4 bg-lime-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-500 transition"
        >
          Contact Us →
        </motion.button>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[40%] space-y-6">
        <motion.p variants={item} className="text-lg text-gray-700 leading-relaxed">
          At Malik Aziz &amp; Co., we offer a full range of accounting services to help
          you achieve financial success. From bookkeeping and tax planning to business
          advisory and SMSF management, we provide personalized solutions for individuals
          and businesses alike.
        </motion.p>

        {/* Rating and Avatars */}
        <motion.div
          variants={item}
          className="flex items-center gap-6"
        >
          {/* Rating Column */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-yellow-500 text-3xl">★★★★★</div>
            <div className="text-center">
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-base text-gray-500">From over 2600 reviews.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block border-l h-12"></div>

          {/* Avatars – only show on lg+ screens */}
          <div className="hidden lg:flex items-center -space-x-3">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.m8nLaWWFcpDvp5IH70lCJQAAAA&rs=1&pid=ImgDetMain"
              alt="User 1"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.zdcwFdEPvgWnMExJ8E5powHaHa&w=512&h=512&rs=1&pid=ImgDetMain"
              alt="User 2"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <img
              src="https://yarngate.com/wp-content/uploads/2021/01/avatar-1.jpg"
              alt="User 3"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-full text-sm font-bold">
              10K+
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
