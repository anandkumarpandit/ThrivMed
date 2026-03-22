import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

const AboutSection = () => {
  return (
    <div className="w-full bg-white dark:bg-[#0c0d10] font-dm-sans transition-colors duration-300">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* ================= HERO BLUE CARD ================= */}
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%] xl:px-[10%] pt-12">
          <motion.div
            variants={itemVariants}
            className="
              w-full
              h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]
              bg-indigo-200
              rounded-2xl md:rounded-3xl
            "
          />
        </div>

        {/* ================= HEADING + CONTENT ================= */}
        <div
          className="
            w-full
            px-4 sm:px-6 md:px-10 lg:px-[8%] xl:px-[10%]
            mt-12 sm:mt-16 md:mt-20 lg:mt-[69px]
          "
        >
          {/* TITLE */}
          <div className="max-w-[1091px]">
            <motion.h2
              variants={itemVariants}
              className="
                text-gray-800 dark:text-gray-100
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                font-normal
                leading-tight lg:leading-[65px]
              "
            >
              Re-imagination of current <br className="hidden lg:block" />
              healthcare system.
            </motion.h2>
          </div>

          {/* PARAGRAPH */}
          <div
            className="
              max-w-[1000px]
              mt-6 sm:mt-8 md:mt-10 lg:mt-[69px]
            "
          >
            <motion.p
              variants={itemVariants}
              className="
                text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                font-light
                leading-relaxed
                tracking-normal
              "
            >
              <span className="text-gray-700 dark:text-gray-200 font-normal">
                Thrivemed.ai is a healthcare company{" "}
              </span>

              <span className="text-zinc-400 dark:text-gray-400">
                aiming to improve health monitoring through means of advanced AI
                tech and helps users track and prevent conditions before they
                appear. It can be used to enhance day-to-day experience and lead
                a better lifestyle or monitor existing conditions and provide
                thoughtful insights about overall health.
              </span>
            </motion.p>
          </div>
        </div>

        {/* ================= LARGE WHITE SPACE ================= */}
        {/* <div
          className="
            w-full
            h-[180px] sm:h-[250px] md:h-[350px]
            lg:h-[400px] xl:h-[517px]
          "
        /> */}

        <Footer />
      </motion.section>
    </div>
  );
};

export default AboutSection;
