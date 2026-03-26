import React, { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import image6 from "../assets/image6.png";

const Consult = () => {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);

  const { scrollYProgress: s1Progress } = useScroll({
    target: step1Ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: s2Progress } = useScroll({
    target: step2Ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: s3Progress } = useScroll({
    target: step3Ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: s4Progress } = useScroll({
    target: step4Ref,
    offset: ["start start", "end start"],
  });

  const scale1 = 1;
  const scale2 = 1;
  const scale3 = 1;
  const scale4 = 1;

  const opacity1 = 1;
  const opacity2 = 1;
  const opacity3 = 1;
  const opacity4 = 1;

  return (
    <div className="w-full min-h-screen bg-white pb-32 dark:bg-[#0c0d10] transition-colors duration-300">
      {/* Top Banner / Hero Title Area */}
      <div className="max-w-[1336px] mx-auto px-6 pt-16 lg:pt-24 flex flex-col justify-start items-start gap-8">
        <div className="max-w-[808px] lg:ml-[215px]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl">
            Finally a blood test that reveals your cellular health
          </h1>

          <p className="text-zinc-400 text-base md:text-2xl mt-8 leading-6 ">
            To learn more about our proven cellular healing protocols, get
            started in one of the following ways.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1336px] mx-auto px-6 mt-16 md:mt-24">
        {/* Title Bar & Price */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="px-5 py-3 border-l-[5px] border-[#267DFF] flex items-center lg:ml-[160px] lg:scale-80">
            <h2 className="text-3xl md:text-4xl font-normal font-['DM_Sans']">
              <span className="text-zinc-400 -ml-2">Your At-Home</span>
              <span className="text-Primary-text dark:text-gray-100">
                {" "}
                Cellular Bloodwork Kit
              </span>
            </h2>
          </div>
          <div
            data-layer="Frame 426"
            className="w-full sm:w-auto p-1.5 md:p-2.5 bg-zinc-100 rounded-[55px] inline-flex justify-between sm:justify-start items-center gap-2 sm:gap-4 md:gap-8 mt-6 md:mt-0 lg:scale-65 lg:-translate-x-13
"
          >
            <div
              data-layer="197$ Only"
              className="flex-1 sm:flex-none sm:w-32 md:w-40 text-center sm:text-right text-zinc-800 text-lg sm:text-xl md:text-2xl font-semibold font-['DM_Sans'] pl-2 sm:pl-0 whitespace-nowrap"
            >
              197$ Only
            </div>
            <div
              data-layer="Frame 278"
              className="flex-none w-auto sm:w-40 md:w-52 h-12 md:h-16 px-13 sm:px-4 md:px-6 py-2.5 md:py-3.5 bg-[#267DFF] hover:bg-[#1a5bcc] cursor-pointer transition-all rounded-[80px] flex justify-center items-center"
            >
              <div
                data-layer="Buy Now"
                className="text-white text-base sm:text-xl md:text-2xl font-normal font-['DM_Sans'] leading-tight md:leading-6 whitespace-nowrap"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>

        {/* Product Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-24 mb-24">
          {/* Left Column: Image and Checklist */}
          <div className="flex-[1.5] flex flex-col gap-16 w-full">
            <div className="w-full lg:scale-65 lg:ml-20 lg:-translate-y-46 flex justify-center items-center">
              <img
                className="w-full max-w-[789px] h-auto object-contain mix-blend-multiply dark:mix-blend-normal"
                src={image6}
                alt="Cellular Bloodwork Kit"
              />
            </div>

            <div className="flex flex-col gap-6 w-full max-w-3xl px-4 md:px-0 lg:ml-53 mt-8 lg:-mt-70">
              {[
                "Covers thyroid health, metabolic markers, hormones, & inflammatory signals",
                "Full health history assessment and 60-minute consultative review with a Senior Health Advisor",
                "Lab-grade results report",
                "Easy finger-prick sample kit",
                "Shipped directly to your door",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-5 h-5 -mt-1 flex-shrink-0 bg-[#267DFF] rounded-full flex justify-center items-center shadow-sm">
                    <Check className="w-4 h-5 text-white" strokeWidth={3} />
                  </div>
                  <div
                    data-layer={text}
                    className="-mt-1 lg:whitespace-nowrap self-stretch justify-start text-Primary-text text-lg font-normal font-['DM_Sans'] leading-5"
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 180 Biomarkers */}
          <div className="flex-1 w-full flex flex-col justify-center items-end self-center pt-8 lg:pt-32">
            <div className="text-right lg:-translate-y-[95px] lg:-translate-x-[130px]  justify-start">
              <span className="text-[#267DFF] text-5xl md:text-6xl lg:text-3xl font-normal font-['DM_Sans'] block leading-tight">
                180
              </span>
              <span className="text-zinc-400 text-xl md:text-2xl lg:text-xl font-normal font-['DM_Sans'] whitespace-nowrap">
                Biomarkers Covered
              </span>
            </div>
          </div>
        </div>

        {/* How it reaches you Section */}
        <div className="w-full pt-8 mb-16">
          <h2 className="lg:ml-64 flex lg:justify-end text-Primary-text dark:text-gray-100 text-3xl md:text-5xl font-light font-['DM_Sans'] mb-16 leading-[49.44px] lg:scale-75 lg:translate-y-6">
            How it reaches you
          </h2>

          <div className="flex flex-col min-h-[246dvh] md:min-h-[1146dvh] lg:min-h-0">
            {/* Step 1 */}
            <motion.div
              ref={step1Ref}
              className="sticky top-20 z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full bg-white dark:bg-[#0c0d10] shadow-[0_-20px_0_0_#ffffff] dark:shadow-[0_-20px_0_0_#0c0d10] py-4"
            >
              <div className="w-full lg:w-80 flex flex-col gap-4 lg:ml-5 lg:text-left lg:scale-85">
                <h3 className="text-Primary-text dark:text-gray-100 text-4xl lg:-translate-y-2 lg:translate-x-50 md:text-5xl font-light font-['DM_Sans']">
                  Step 1
                </h3>
                <p className="text-zinc-400 text-xl lg:text-2xl font-light font-['DM_Sans'] lg:-translate-y-4 lg:translate-x-47 leading-6 lg:scale-90">
                  Your at-home bloodwork kit will ship to you
                </p>
              </div>
              <div
                data-layer="Frame 427"
                className="flex-1 w-full min-h-[300px] lg:h-[453.99px] px-8 lg:pl-10 lg:pr-12 pt-10 pb-8 bg-zinc-100 dark:bg-[#151619] rounded-[20px] flex flex-col justify-between items-start transition-colors lg:scale-75 lg:-translate-y-15 lg:-translate-x-4"
              >
                <div
                  data-layer="As soon as you purchase your kit, we will ship it straight to your door in the next 2 days."
                  className="self-stretch justify-start text-Primary-text dark:text-gray-100 -mt-4 md:mt-0  text-base md:text-2xl font-light font-['DM_Sans'] leading-7"
                >
                  As soon as you purchase your kit, we will ship it straight to
                  your door in the next 2 days.
                </div>
                <div
                  data-layer="Frame 423"
                  className="self-stretch flex flex-wrap lg:flex-nowrap justify-start items-start gap-3.5 mt-15 md:mt-0"
                >
                  <div
                    data-layer="Frame 422"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      At-home cellular bloodwork kit
                    </div>
                  </div>
                  <div
                    data-layer="Frame 419"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Shipped in 2 days
                    </div>
                  </div>
                  <div
                    data-layer="Frame 421"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Return Envelope Encluded
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              ref={step2Ref}
              className="sticky top-20 z-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-16 w-full bg-white dark:bg-[#0c0d10] shadow-[0_-20px_0_0_#ffffff] dark:shadow-[0_-20px_0_0_#0c0d10] py-4"
            >
              <div className="w-full lg:w-80 flex flex-col gap-4 lg:ml-5 lg:text-left lg:scale-85">
                <h3 className="text-Primary-text dark:text-gray-100 text-4xl lg:translate-y-20 lg:translate-x-52 md:text-5xl font-light font-['DM_Sans']">
                  Step 2
                </h3>
                <p className="text-zinc-400 text-xl lg:text-2xl font-light font-['DM_Sans'] lg:translate-y-17 lg:translate-x-49 leading-7 lg:scale-90">
                  Register your kit and collect your sample
                </p>
              </div>
              <div
                data-layer="Frame 427"
                className="flex-1 w-full lg:translate-x-4 lg:-translate-y-2 min-h-[300px] lg:h-[473.99px] px-8 lg:pl-10 lg:pr-12 pt-10 pb-8 bg-zinc-100 dark:bg-[#151619] rounded-[20px] flex flex-col justify-between items-start transition-colors lg:scale-70"
              >
                <div
                  data-layer="Register your kit and collect your sample"
                  className="self-stretch justify-start text-Primary-text dark:text-gray-100 text-base md:text-2xl font-light font-['DM_Sans'] leading-7 -mt-4 md:mt-0"
                >
                  Register your kit and collect your sample
                </div>
                <div
                  data-layer="Frame 423"
                  className="self-stretch flex flex-wrap lg:flex-nowrap justify-start items-start gap-3.5 mt-15 md:mt-0"
                >
                  <div
                    data-layer="Frame 422"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Digital kit registration
                    </div>
                  </div>
                  <div
                    data-layer="Frame 419"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Step-by-step video tutorial
                    </div>
                  </div>
                  <div
                    data-layer="Frame 421"
                    className="md:px-7 md:py-4 px-5 py-4 scale-90 md:scale-100 -ml-4 md:ml-0 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Option to join a live collection call
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              ref={step3Ref}
              className="sticky top-20 z-30 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full bg-white dark:bg-[#0c0d10] shadow-[0_-20px_0_0_#ffffff] dark:shadow-[0_-20px_0_0_#0c0d10] py-4"
            >
              <div className="w-full lg:w-80 flex flex-col gap-4 lg:ml-5 lg:text-left lg:scale-85">
                <h3 className="text-Primary-text dark:text-gray-100 text-4xl lg:translate-y-4 lg:translate-x-50 md:text-5xl font-light font-['DM_Sans']">
                  Step 3
                </h3>
                <p className="text-zinc-400 text-2xl font-light font-['DM_Sans'] lg:translate-y-2 lg:translate-x-47 leading-7 lg:scale-90">
                  Complete your health <br/>history form
                </p>
              </div>
              <div
                data-layer="Frame 427"
                className="flex-1 w-full min-h-[300px] lg:h-[453.99px] px-8 lg:pl-10 lg:pr-12 pt-10 pb-8 bg-zinc-100 dark:bg-[#151619] rounded-[20px] flex flex-col justify-between items-start transition-colors lg:scale-77 lg:-translate-y-8 lg:-translate-x-7"
              >
                <div
                  data-layer="Complete your health history form"
                  className="self-stretch justify-start text-Primary-text dark:text-gray-100 text-base md:text-2xl -mt-4 md:mt-0 font-light font-['DM_Sans'] leading-7"
                >
                  Complete your health history form
                </div>
                <div
                  data-layer="Frame 423"
                  className="self-stretch flex flex-wrap lg:flex-nowrap justify-start items-start gap-3.5 mt-15 md:mt-0"
                >
                  <div
                    data-layer="Frame 422"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Digital health history form
                    </div>
                  </div>
                  <div
                    data-layer="Frame 419"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Shipped in 2 days
                    </div>
                  </div>
                  <div
                    data-layer="Frame 421"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Return Envelope Encluded
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              ref={step4Ref}
              className="sticky top-20 z-40 flex flex-col lg:flex-row items-start gap-8 lg:gap-16 w-full bg-white dark:bg-[#0c0d10] shadow-[0_-20px_0_0_#ffffff] dark:shadow-[0_-20px_0_0_#0c0d10] py-4"
            >
              <div className="w-full lg:w-80 flex flex-col gap-4 lg:ml-5 lg:text-left lg:scale-85">
                <h3 className="text-Primary-text dark:text-gray-100 text-4xl lg:-translate-y-2 lg:translate-x-50 md:text-5xl font-light font-['DM_Sans']">
                  Step 4
                </h3>
                <p className="text-zinc-400 text-xl lg:text-2xl font-light font-['DM_Sans'] lg:-translate-y-4 lg:translate-x-47 leading-7 lg:scale-90">
                  Hop on a consultation to review your results
                </p>
              </div>
              <div
                data-layer="Frame 427"
                className="flex-1 w-full min-h-[350px] lg:h-[453.99px] px-8 lg:pl-10 lg:pr-12 pt-10 pb-8 bg-zinc-100 dark:bg-[#151619] rounded-[20px] flex flex-col justify-between items-start transition-colors lg:scale-75 lg:-translate-y-22 lg:-translate-x-4"
              >
                <div
                  data-layer="Hop on a consultation to review your results"
                  className="self-stretch justify-start text-Primary-text dark:text-gray-100 text-base -mt-4 md:mt-0 md:text-2xl font-light font-['DM_Sans'] leading-5"
                >
                  Hop on a consultation to review your results
                </div>
                <div
                  data-layer="Frame 423"
                  className="self-stretch flex flex-wrap lg:flex-nowrap justify-start items-start gap-3.5 mt-15 md:mt-0"
                >
                  <div
                    data-layer="Frame 422"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      At-home cellular bloodwork kit
                    </div>
                  </div>
                  <div
                    data-layer="Frame 419"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Shipped in 2 days
                    </div>
                  </div>
                  <div
                    data-layer="Frame 421"
                    className="md:px-7 md:py-4 px-4 py-3 bg-[#C6DDFF] dark:bg-[#267DFF]/20 rounded-[55px] flex justify-center items-center gap-2.5 overflow-hidden flex-shrink-0"
                  >
                    <div
                      data-layer="Shipped in 2 days"
                      className="justify-start text-zinc-800 dark:text-[#C6DDFF] text-lg font-normal font-['DM_Sans'] leading-5 whitespace-nowrap"
                    >
                      Return Envelope Encluded
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consult;
