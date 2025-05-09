import React from "react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, x: 40, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


export default function HeroSection() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-white via-lime-50 to-lime-50 px-6 lg:px-20 py-8 lg:py-16 flex flex-col lg:flex-row items-start justify-between gap-10 mt-5">

      {/* Left Side */}
      <div className="w-full lg:w-[75%]">
        <motion.p
          variants={item}
          initial="hidden"
          animate="visible"
          custom={0}
          className="text-lg font-medium text-gray-700 mb-4"
        >
          Gold Coast's Trusted Accounting Experts
        </motion.p>

        <motion.h1
          variants={item}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl md:text-5xl lg:text-6xl  text-black leading-tight mb-4"
        >
          Simplifying Your Finances, <br /> Empowering Your Future
        </motion.h1>

        <div className="inline-block">
  <motion.button
    variants={item}
    initial="hidden"
    animate="visible"
    custom={2}
    className="mt-2 bg-lime-500 text-black px-8 py-3 rounded-full font-semibold transition-colors duration-300 hover:bg-black hover:text-white relative z-10 block group"
  >
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
      Connect us →
    </span>
  </motion.button>
</div>


      </div>

      {/* Right Side */}
      <div className="w-full lg:w-[40%] space-y-6">
        <motion.p
          variants={item}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-lg text-gray-700 leading-relaxed"
        >
          At Malik Aziz &amp; Co., we offer a full range of accounting services to help
          you achieve financial success. From bookkeeping and tax planning to business
          advisory and SMSF management, we provide personalized solutions for individuals
          and businesses alike.
        </motion.p>

        {/* Rating and Avatars */}
        <div className="flex items-center gap-6">
          {/* Rating Column */}
          <div className="flex flex-col items-center gap-2">
            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              custom={4}
              className="text-yellow-500 text-3xl"
            >
              ★★★★★
            </motion.div>
            <motion.div
              variants={item}
              initial="hidden"
              animate="visible"
              custom={5}
              className="text-center"
            >
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-base text-gray-500">From over 2600 reviews.</p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            custom={6}
            className="hidden lg:block border-l h-12"
          ></motion.div>

          {/* Avatars */}
          <div className="hidden lg:flex items-center -space-x-3 bg-lime-100 rounded-[30px]">
            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 6 * 0.2, duration: 0.4, ease: "easeOut" }} // appears before avatars
  className="hidden lg:flex items-center -space-x-3 bg-lime-100 px-4 py-2 rounded-full"
>
  {[
    "https://tse3.mm.bing.net/th?id=OIP.m8nLaWWFcpDvp5IH70lCJQAAAA&rs=1&pid=ImgDetMain",
    "https://tse1.explicit.bing.net/th?id=OIP.zdcwFdEPvgWnMExJ8E5powHaHa&w=512&h=512&rs=1&pid=ImgDetMain",
    "https://yarngate.com/wp-content/uploads/2021/01/avatar-1.jpg",
  ].map((src, idx) => (
    <motion.img
      key={idx}
      variants={item}
      initial="hidden"
      animate="visible"
      custom={7 + idx}
      src={src}
      alt={`User ${idx + 1}`}
      className="w-13 h-12 rounded-full border-2 border-white"
    />
  ))}
  <motion.div
    variants={item}
    initial="hidden"
    animate="visible"
    custom={10}
    className="w-10 h-10 bg-lime-400 text-black flex items-center justify-center rounded-full text-sm font-bold"
  >
    10K+
  </motion.div>
</motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
