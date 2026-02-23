import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="
        w-full
        bg-slate-100 dark:bg-[#151619]
        rounded-2xl md:rounded-3xl
        px-4 sm:px-6 md:px-10 lg:px-[8%] xl:px-[10%]
        py-12 sm:py-14 md:py-16 lg:py-20
        transition-colors duration-300
      "
    >
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16">
        {/* LEFT SIDE */}
        <motion.div variants={itemVariants}>
          <h4 className="text-gray-800 dark:text-gray-100 text-lg sm:text-xl md:text-2xl mb-5 font-medium">
            Important Links
          </h4>

          <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400 text-base sm:text-lg font-light">
            <span className="hover:text-gray-800 dark:hover:text-gray-200 transition cursor-pointer">
              Sitemap
            </span>
            <span className="hover:text-gray-800 dark:hover:text-gray-200 transition cursor-pointer">
              Thrivemed.ai
            </span>
            <span className="hover:text-gray-800 dark:hover:text-gray-200 transition cursor-pointer">
              About us
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={itemVariants}
          className="
            md:max-w-md
            text-gray-600 dark:text-gray-400
            text-base sm:text-lg md:text-xl
            font-light
            leading-relaxed
          "
        >
          Thrivemed.ai is a healthcare company aiming to improve health
          monitoring through advanced AI tech and helps users track and prevent
          conditions before they appear. It enhances daily experience and
          supports better lifestyle decisions.
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;
