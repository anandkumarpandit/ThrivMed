import React, { useState } from "react";
import { motion } from "framer-motion";
import minusIcon from "../assets/image4.svg";
import plusIcon from "../assets/image5.svg";

const faqData = [
  {
    question:
      "Lorem ipsum dolor sit amet. Non aliquam voluptate qui veniam unde aut ?",
    answer:
      "Aperiam quas et voluptatem repudiandae sed delectus similique est vodio Lorem ipsum dolor sit amet. Non aliquam voluptate.",
  },
  {
    question:
      "aperiam quas et voluptatem repudiandae sed delectus similique est odio",
    answer:
      "Aperiam quas et voluptatem repudiandae sed delectus similique est vodio Lorem ipsum dolor sit amet. Non aliquam voluptate.",
  },
  {
    question: "Non aliquam voluptate qui veniam unde aut ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolorem.",
  },
  {
    question: "tem repudiandae sed delectus similique est odio",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet. Non a",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Non aliquam voluptate qui venia quas et voluptatem repudiandae",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full lg:mt-[-140px] mt-[-100px]  lg:-translate-y-20 bg-white dark:bg-[#0c0d10] py-20 lg:pt-0 px-4 sm:px-6 md:px-10 lg:px-[8%] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16">
        {/* LEFT TITLE */}
        <div className="lg:w-[40%]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#2C313C] dark:text-white
                         text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
                         font-normal leading-tight"
          >
            Frequently asked <br />
            Questions
          </motion.h2>
        </div>

        {/* RIGHT FAQ BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-[65%] 
                        bg-gray-100 dark:bg-gray-800 transition-colors
                        rounded-[30px] 
                        p-2 sm:p-3 
                        flex flex-col gap-2"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#151619] rounded-[20px] px-5 py-5 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start text-left gap-6"
              >
                <div
                  className="flex-1 text-[#2C313C] dark:text-gray-100
                                text-base sm:text-lg md:text-xl 
                                font-light leading-relaxed"
                >
                  {item.question}
                </div>

                <span className="text-gray-400 dark:text-gray-500 shrink-0 w-4 h-4 flex items-center justify-center">
                  <img
                    src={activeIndex === index ? minusIcon : plusIcon}
                    alt={activeIndex === index ? "Collapse" : "Expand"}
                    className="object-contain w-full h-full dark:invert"
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-[300px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p
                  className="text-[#878e9c] dark:text-gray-400
                              text-sm sm:text-base md:text-lg 
                              leading-relaxed"
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
