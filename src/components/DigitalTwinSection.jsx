import React from "react";
import ArrowIcon from "../assets/ArrowIcon.svg";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DigitalTwinSection = () => {
  return (
    <div className="w-full px-[4%] md:px-[5%] lg:px-[12%]  animate-fade-in-up flex flex-col lg:h-screen h-auto min-h-[600px] justify-center py-10 sm:py-16 lg:pt-2 lg:pb-12 element-section">
      {/* Header Content */}
      <motion.div
        className="mb-8 sm:mb-12 lg:mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex justify-start mb-4 sm:mb-6 lg:mb-0 frame">
          <motion.div className="text-wrapper">
            <motion.button
              variants={itemVariants}
              className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-thriv-text-dark dark:border-gray-500 text-thriv-text-dark dark:text-gray-300 text-[clamp(11px,1.2vw,14px)] font-medium font-dm-sans hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Consult
            </motion.button>
          </motion.div>
        </div>

        <div className="text-center max-w-4xl mx-auto px-1 sm:px-0 the-future-of">
          <motion.h2
            variants={itemVariants}
            className="text-thriv-text-heading dark:text-white text-[clamp(1.4rem,5vw,3.2rem)] font-bold font-dm-sans leading-[1.1] mb-2 mx-auto transition-colors"
          >
<h1
  className="
    text-center text-Primary-text font-bold font-['DM_Sans']

    text-xl 
    sm:text-2xl 
    md:text-3xl 
    lg:text-4xl 
    xl:text-5xl
 relative lg:-left-[70px]
    leading-snug md:leading-tight lg:leading-[1.2]

    px-4 sm:px-6 md:px-8

    max-w-[95%] 
    sm:max-w-[90%] 
    md:max-w-[100%] 
    lg:max-w-[900px] 
    xl:max-w-[1071px]

    
      lg:whitespace-nowrap
       lg:scale-85
  "
>
  Thrivemed comprehensive health assessment
</h1>          
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="div text-thriv-text-body dark:text-gray-400 text-[clamp(0.9rem,2vw,1.2rem)] font-medium font-dm-sans text-center max-w-[min(100%,40rem)] mx-auto leading-relaxed transition-colors"
          >
           Optimize your Heatlh Maximixe your impact, empowering you with precision health to drive your mission
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="frame-2 relative rounded-[24px] md:rounded-[32px] p-[clamp(1.5rem,4vw,3rem)] overflow-hidden flex flex-col justify-between bg-[radial-gradient(78.58%_54.29%_at_100%_0%,#EEF4FF_0%,#F5F9FF_100%)] dark:bg-[radial-gradient(ellipse_54.29%_78.58%_at_100.79%_-3.53%,rgba(0,0,0,0.74)_0%,#1C1C1D_100%)] transition-colors"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 via-transparent to-transparent pointer-events-none" />

        {/* Arrow Icon - Extreme Scaling Position */}
        <motion.img
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 0.9,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
            },
          }}
          src={ArrowIcon}
          alt="Vector"
          className="vector absolute top-[clamp(0.4rem,1.5vh,1rem)] right-[clamp(0.4rem,1.5vw,1.5rem)] lg:top-15 lg:right-15 w-[clamp(4rem,12vw,10rem)] h-auto z-0 opacity-90"
        />

        <div className="frame-wrapper relative z-10 flex flex-col justify-between gap-[clamp(2.5rem,6vh,4rem)]">
          {/* Top Content (Frame-3) */}
          <div className="frame-3 max-w-[min(100%,600px)] pr-12 sm:pr-0">
            <motion.h2
              variants={itemVariants}
              className="p text-[#272b34] dark:text-gray-100 text-[clamp(1.1rem,3.5vw,28px)] font-light font-dm-sans leading-[1.2] tracking-[0] mt-[-1.00px] mb-2 self-stretch"
            >
              Most conditions don’t appear overnight
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-wrapper-3 text-[#878e9c] dark:text-gray-400 text-[clamp(0.85rem,2vw,18px)] font-light leading-relaxed tracking-[0] font-dm-sans self-stretch"
            >
              Everything looks normal. But underneath... problems are building.
              Every condition you face, has a reason. 10 - 20 tests dont cover
              them.
            </motion.p>
          </div>

          {/* Bottom Flex Grid (Frame-4) */}
          <div className="frame-4 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-4">
            {/* Medical Experts Section (Frame-5) */}
            <div className="frame-5 w-full lg:w-auto flex flex-col items-start gap-4">
              <motion.h1
                variants={itemVariants}
                className="text-[#cbced5] dark:text-gray-300 text-[clamp(1.3rem,5vw,40px)] leading-[1.1] sm:leading-tight tracking-[0] font-medium font-dm-sans max-w-[min(100%,500px)] mb-4"
              >
                Medical Experts <br/> available at your touch
              </motion.h1>

              <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-6 lg:gap-4">
                <motion.p
                  variants={itemVariants}
                  className="lg:hidden text-[#878e9c] dark:text-gray-400 text-[clamp(0.85rem,2vw,18px)] font-light font-dm-sans text-center max-w-[480px] leading-relaxed"
                >
                  Early cancer screening improves 5-year
                  <br />
                  survival rates by up to{" "}
                  <strong className="text-[#282c35] dark:text-white font-semibold">
                    90%
                  </strong>
                </motion.p>

                <motion.button
                  className="bg-[#2663FF] text-white px-8 py-3 rounded-full text-[clamp(14px,1.5vw,16px)] font-medium transition-all hover:bg-blue-600 shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Open Digital Twin
                </motion.button>
              </div>
            </div>

            <motion.p
              variants={itemVariants}
              className="hidden lg:block absolute bottom-0 right-1 text-[#878e9c] dark:text-gray-400 text-[18px] font-light font-dm-sans text-right max-w-[476px] leading-[1.4]"
            >
              Early cancer screening improves 5-year
              <br />
              survival rates by up to{" "}
              <strong className="text-[#282c35] dark:text-white font-semibold">
                90%
              </strong>
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalTwinSection;
