import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section - Malik Aziz Branding */}
        <div className="flex flex-col items-start space-y-4 lg:w-[30%]">
          <h1 className="text-4xl font-bold text-gray-900">Malik Aziz</h1>
          <p className="text-lg text-gray-700">
            We’ll handle all your tax and accounting needs, so you can focus on your business.
          </p>

          {/* Social Media Icons using React Icons */}
          <div className="flex gap-4">
            <motion.a
              href="#facebook"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-lime-400 transition"
            >
              <FaFacebookF className="text-black" />
            </motion.a>
            <motion.a
              href="#twitter"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-lime-400 transition"
            >
              <FaTwitter className="text-black" />
            </motion.a>
            <motion.a
              href="#instagram"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-lime-400 transition"
            >
              <FaInstagram className="text-black" />
            </motion.a>
            <motion.a
              href="#linkedin"
              whileHover={{ scale: 1.1 }}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-lime-400 transition"
            >
              <FaLinkedinIn className="text-black" />
            </motion.a>
          </div>
        </div>

        {/* Middle Section - Our Services */}
        <div className="flex flex-col space-y-4 lg:w-[35%]">
          <h3 className="text-xl font-semibold text-gray-900">Our Services</h3>
          <ul className="space-y-2">
            {[
              "Business Advisory",
              "Business Accounting",
              "Tax Accounting",
              "Bookkeeping Services",
              "SMSF Accountants",
              "Software Solutions",
            ].map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ color: "#000000" }} // Change color to dark black on hover
                className="text-lg text-gray-700 hover:cursor-pointer"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col space-y-4 lg:w-[30%]">
          <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <p className="text-lg text-gray-700">Get Closer: PO Box 795 Labrador, Qld 4215</p>
            </li>
            <li>
              <p className="text-lg text-gray-700">Work With Us: Email: reception@malikaziz.com.au</p>
            </li>
            <li>
              <p className="text-lg text-gray-700">For Consulting: Phone: 0449779218</p>
            </li>
            <li>
              <p className="text-lg text-gray-700">ABN: 46 652 778 259</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
        <p>&copy; 2024 Malik Aziz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
