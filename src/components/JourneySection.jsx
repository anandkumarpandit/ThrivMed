import React from "react";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.jpg";
import frame3 from "../assets/Frame3.png";

const JourneySection = () => {
  return (
    <section className="w-full bg-white dark:bg-[#0c0d10] py-12 md:py-24 flex justify-center px-0 transition-colors duration-300">
      <div className="w-full max-w-[1500px] bg-white dark:bg-transparent rounded-3xl flex flex-col justify-start items-start gap-8 md:gap-14 p-6 sm:p-10 md:p-16 lg:p-24 transition-colors">
        {/* Header Section */}
        <div className="flex flex-col justify-start items-start gap-1 w-full max-w-[1336px] mx-auto text-left">
          <div className="w-full justify-start text-Secondary-Priority-text text-zinc-400 text-base sm:text-xl md:text-2xl lg:translate-x-[5px] font-normal font-['DM_Sans'] lg:scale-85">
            You are living once only, Lets live the longest.
          </div>
          <div className="w-full text-Primary-text dark:text-gray-100 text-3xl md:text-4xl lg:text-5xl font-normal font-['DM_Sans'] leading-tight lg:leading-[49.44px] lg:translate-x-[-25px] transition-colors lg:scale-80">
            Your Journey for Health Transformation
          </div>
        </div>

        {/* Cards Grid Grid */}
        <div className="w-full max-w-[1336px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5 justify-items-center sm:justify-items-start content-start">
          {/* Card 1 */}
          <Link
            to="/consult"
            className="w-full max-w-lg lg:translate-x-[65px] lg:max-w-xs xl:max-w-sm inline-flex flex-col justify-start items-start gap-5 group lg:scale-85 cursor-pointer"
          >
            <div
              className="self-stretch h-48 md:h-56 lg:h-50 rounded-2xl flex flex-col justify-start items-start bg-gray-100 dark:bg-gray-800 bg-cover bg-center transition-all overflow-hidden"
              style={{ backgroundImage: `url(${frame1})` }}
            >
              <div className="self-stretch p-3.5 flex flex-col justify-start items-start gap-2.5">
                <div className="px-3.5 py-2.5 bg-white/70 dark:bg-black/50 rounded-[50px] backdrop-blur-[3px] inline-flex justify-center items-center gap-2.5 transition-colors">
                  <div className="justify-start text-Primary-text dark:text-gray-200 text-sm md:text-base font-normal font-['DM_Sans']">
                    Consult
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 inline-flex justify-center items-center gap-2.5 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black/40 rounded-[31.22px] flex justify-center items-center gap-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
              <div className="self-stretch text-Primary-text dark:text-gray-200 text-xl font-medium font-['DM_Sans'] transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Cellular Health Analysis
              </div>
              <div className="self-stretch text-Primary-text dark:text-gray-400 text-base md:text-lg font-light font-['DM_Sans'] transition-colors">
                Take our Cellular Damage & Toxicity Assessment and hop on a
                60-minute call with a Senior Health Advisor to review your
                dynamic results.
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/bloodwork"
            className="w-full max-w-lg lg:max-w-xs xl:max-w-sm inline-flex flex-col justify-start items-start gap-5 group lg:scale-85 cursor-pointer"
          >
            <div
              className="self-stretch h-48 md:h-56 lg:h-50 rounded-2xl flex flex-col justify-start items-start bg-gray-100 dark:bg-gray-800 bg-cover bg-center transition-all overflow-hidden"
              style={{ backgroundImage: `url(${frame2})` }}
            >
              <div className="self-stretch p-3.5 flex flex-col justify-start items-start gap-2.5">
                <div className="px-3.5 py-2.5 bg-white/70 dark:bg-black/50 rounded-[50px] backdrop-blur-[3px] inline-flex justify-center items-center gap-2.5 transition-colors">
                  <div className="justify-start text-Primary-text dark:text-gray-200 text-sm md:text-base font-normal font-['DM_Sans']">
                    Bloodwork
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 inline-flex justify-center items-center gap-2.5 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black/40 rounded-[31.22px] flex justify-center items-center gap-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
              <div className="self-stretch text-Primary-text dark:text-gray-200 text-xl font-medium font-['DM_Sans'] transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Cellular Bloodwork Analysis
              </div>
              <div className="self-stretch text-Primary-text dark:text-gray-400 text-base md:text-lg font-light font-['DM_Sans'] transition-colors">
                Get our at-home cellular bloodwork panel and a 60-minute private
                review with a Senior Health Advisor to understand your
                biomarkers – no office visit required.
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/training"
            className="w-full max-w-lg lg:-translate-x-[65px] lg:max-w-xs xl:max-w-sm inline-flex flex-col justify-start items-start gap-5 group lg:scale-85 cursor-pointer"
          >
            <div
              className="self-stretch h-48 md:h-56 lg:h-50 rounded-2xl flex flex-col justify-start items-start bg-gray-100 dark:bg-gray-800 bg-cover bg-center transition-all overflow-hidden"
              style={{ backgroundImage: `url(${frame3})` }}
            >
              <div className="self-stretch p-3.5 flex flex-col justify-start items-start gap-2.5">
                <div className="px-3.5 py-2.5 bg-white/70 dark:bg-black/50 rounded-[50px] backdrop-blur-[3px] inline-flex justify-center items-center gap-2.5 transition-colors">
                  <div className="justify-start text-Primary-text dark:text-gray-200 text-sm md:text-base font-normal font-['DM_Sans']">
                    Training
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 inline-flex justify-center items-center gap-2.5 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black/40 rounded-[31.22px] flex justify-center items-center gap-2.5 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
              <div className="self-stretch text-Primary-text dark:text-gray-200 text-xl font-medium font-['DM_Sans'] transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Watch a Free Training
              </div>
              <div className="self-stretch text-Primary-text dark:text-gray-400 text-base md:text-lg font-light font-['DM_Sans'] transition-colors">
                Learn to heal holistically from autoimmune disease, hormone
                imbalance, diabetes, and more in a free online training.
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
