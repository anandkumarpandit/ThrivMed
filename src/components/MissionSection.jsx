import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import maskGroup from "../assets/image2.jpg";
import doctorImage from "../assets/image.png";
import sparkleIcon from "../assets/image3.svg";

const MissionSection = () => {
  return (
    <section className="w-full mt-[-30px] px-0 md:px-[4%] lg:px-[10%] lg:h-auto h-auto bg-white dark:bg-[#0c0d10] font-dm-sans lg:-translate-y-20 transition-colors duration-300">
      <div className="w-full max-w-[1400px] mx-auto px-0 md:px-0 lg:px-6 py-10">
        
        {/* ================= DESKTOP HEADER =============== */}
        <div className="hidden lg:block relative h-[280px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 text-zinc-400 dark:text-gray-400 text-4xl font-semibold leading-tight max-w-[620px]"
          >
            The future of healthcare is not in hospitals
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="absolute right-0 top-[200px] text-right text-zinc-400 dark:text-gray-400 text-xl font-light leading-6 max-w-[350px]"
          >
            The future of healthcare is not in hospitals
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-0 top-[95px] text-gray-900 dark:text-gray-100 text-xl font-light leading-6 max-w-[664px]"
          >
            The future of healthcare is not in hospitals
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute left-0 top-[200px] px-8 py-3 rounded-[90px] outline outline-1 outline-gray-800 dark:outline-gray-400 text-gray-800 dark:text-gray-200 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            Track your Health
          </motion.button>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="lg:hidden flex flex-col gap-3 mb-6 px-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <div className="text-zinc-400 dark:text-gray-400 text-xl font-semibold leading-6">
              The future of healthcare is not in hospitals
            </div>
            <div className="text-gray-800 dark:text-gray-200 text-sm font-light leading-4">
              The future of healthcare is not in hospitals
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-fit mt-6 px-5 py-2.5 rounded-[90px] outline outline-1 outline-gray-800 dark:outline-gray-400 text-gray-800 dark:text-gray-200 text-sm font-medium"
          >
            Track your Health
          </motion.button>
        </div>

        {/* ================= BLUE OUTER CONTAINER ================= */}
        <div className="w-full bg-sky-100 dark:bg-sky-950 rounded-[10px] lg:rounded-[20px] p-2 shadow-[0px_3px_15px_rgba(228,241,254,0.81)] dark:shadow-sky-900/20 transition-colors">
          <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr_1fr] gap-2">
            {/* ================= IMAGE CARD ================= */}
            <div
              className="order-1 lg:order-2 relative rounded-[10px] lg:rounded-[20px] overflow-hidden flex flex-col justify-end items-start p-4 lg:p-6 h-[300px] lg:h-[400px]"
              style={{
                backgroundImage: `url(${doctorImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-sky-100/60 dark:from-sky-950/80 via-transparent to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10"
              >
                <h4 className="text-zinc-700 dark:text-gray-100 font-semibold text-sm lg:text-xl">
                  Dr Andres Zuleta
                </h4>
                <p className="mt-1 text-zinc-400 dark:text-gray-300 text-sm lg:text-lg leading-tight max-w-[220px] lg:max-w-[350px]">
                  Better healthcare is not a privilege its a necessity
                </p>
              </motion.div>
            </div>

            {/* ================= WHITE CONTENT CARD ================= */}
            <div className="order-2 lg:order-1 bg-white dark:bg-[#151619] rounded-lg lg:rounded-2xl p-4 lg:p-6 shadow-lg flex flex-col justify-between transition-colors">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="text-gray-800 dark:text-gray-100 text-lg lg:text-3xl font-light leading-tight max-w-[320px] lg:max-w-[500px]">
                 Most comprehensive blood analysis available in the United States.
                </div>

                <div>
                  <span className="text-gray-800 dark:text-gray-200 text-sm lg:text-lg font-light leading-relaxed">
                   No labs. No waiting. 160+ Biomarkers are processed with a complete map of what is happening into your body. Every health metric you’ve ever known at one place.
                  </span>
                  <span className="text-zinc-400 dark:text-gray-400 text-sm lg:text-lg font-light leading-relaxed">
                    , increasing interactivity with all medical reports for full
                    transparency and reducing hospital visits and reducing
                    costs.
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 flex justify-between gap-4"
              >
                <div className="hidden lg:block text-sky-200">
                  <img src={sparkleIcon} alt="" className="w-10 h-10" />
                </div>

                <div className="flex justify-end items-end bg-zinc-100 dark:bg-gray-800 rounded-[41.75px] p-1">
                  <div className="flex -space-x-3">
                    <img
                      src={image1}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-[#151619]"
                    />
                    <img
                      src={maskGroup}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-[#151619]"
                    />
                  </div>

                  <div className="ml-[-10px] px-4 py-2 bg-white dark:bg-gray-900 rounded-[68px]">
                    <span className="text-zinc-400 dark:text-gray-400 text-xs lg:text-sm font-light italic">
                      partnered with{" "}
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 text-xs lg:text-sm font-medium">
                      30+ hospitals
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
