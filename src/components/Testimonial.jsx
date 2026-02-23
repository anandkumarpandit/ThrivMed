import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";

const Testimonial = () => {
  return (
    <section className="w-full mt-[-20px] lg:-translate-y-31">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-16 lg:py-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-12 lg:mb-20 lg:px-9"
        >
          <p className="text-lg sm:text-xl font-semibold text-gray-400 lg:-mt-8 xl:mt-0 mb-4 -mt-10 sm:mt-0">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 dark:text-gray-100 leading-tight">
            What our Clients Say
          </h2>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <div className="flex items-center justify-center md:justify-start [&_div]:mx-1.5 animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {/* 1st Original Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Matthew Koma
                </h3>

                <img
                  src={image2}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                I was really sceptical initially but once I tried it everything
                felt different after a month of use.
              </p>
            </div>

            {/* 2nd Original Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Xian linh
                </h3>

                <img
                  src={image1}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                A smooth experience from onboarding to monitoring.
              </p>
            </div>

            {/* 3rd Original Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Matthew Koma
                </h3>

                <img
                  src={image2}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                A new way to experience health, I’ve never seen something so
                advanced.
              </p>
            </div>

            {/* --- DUPLICATE CARDS --- */}
            {/* 1st Duplicate Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Matthew Koma
                </h3>

                <img
                  src={image2}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                I was really sceptical initially but once I tried it everything
                felt different after a month of use.
              </p>
            </div>

            {/* 2nd Duplicate Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Xian linh
                </h3>

                <img
                  src={image1}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                A smooth experience from onboarding to monitoring.
              </p>
            </div>

            {/* 3rd Duplicate Card */}
            <div className="w-[280px] lg:w-[340px] shrink-0 bg-gray-100 dark:bg-[#151619] rounded-[30px] p-6 sm:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[420px] whitespace-normal transition-colors">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-100">
                  Matthew Koma
                </h3>

                <img
                  src={image2}
                  alt="profile"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-900 dark:text-gray-300">
                A new way to experience health, I’ve never seen something so
                advanced.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
