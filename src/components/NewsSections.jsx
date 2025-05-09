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

const blogs = [
  {
    title: "5 reasons to purchase desktop computers",
    author: "MalikAziz",
    date: "4 years ago",
    excerpt:
      "Hustle and Cashflow is a blog that aims to educate millennials on personal finance.",
    image:
      "https://malikaziz.com.au/wp-content/uploads/2021/07/bg-1@2x-scaled-1-760x520-1.jpeg",
  },
  {
    title: "Utilizing mobile technology in the field",
    author: "MalikAziz",
    date: "5 years ago",
    excerpt:
      "I think that you should be able to select more than one reason for...",
    image:
      "https://img.freepik.com/free-photo/young-woman-working-documents-financial-charts-office_74952-2042.jpg",
  },
  {
    title: "Success Story: Businessman in Harlem",
    author: "MalikAziz",
    date: "5 years ago",
    excerpt:
      "I think that you should be able to select more than one reason for...",
    image:
      "https://img.freepik.com/free-photo/business-people-analyzing-financial-graphs_53876-15959.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="px-6 lg:px-20 py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900">
          Latest News & Publications
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-xl overflow-hidden transition-transform duration-500 transform hover:scale-105 shadow-md hover:shadow-lg group"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                <span className="font-semibold text-black">{blog.author}</span> • {blog.date}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600">{blog.excerpt}</p>
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
            Show More →
          </span>
        </motion.button>
      </div>
    </section>
  );
}
