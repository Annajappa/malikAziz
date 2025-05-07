import React from "react";
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

export default function ToolsSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-white">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Trusted Tools and Technology
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center items-center gap-10"
      >
        <img
          src="https://cdn.worldvectorlogo.com/logos/xero-1.svg"
          alt="Xero"
          className="w-20 md:w-24 h-auto"
        />
        <img
          src="https://www.bglcorp.com/wp-content/uploads/2018/06/BGL_Dark-1024x991.png"
          alt="BGL"
          className="w-20 md:w-24 h-auto"
        />
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.CTLFcDUXEWlq6i1QNInBGQHaDZ&rs=1&pid=ImgDetMain"
          alt="MYOB"
          className="w-20 md:w-24 h-auto"
        />
        <img
          src="https://www.liblogo.com/img-logo/qu7587qb9b-quickbooks-logo-quickbooks-online-integrations-connect-your-apps-with-zapier.png"
          alt="QuickBooks"
          className="w-20 md:w-24 h-auto"
        />
      </motion.div>
    </section>
  );
}
