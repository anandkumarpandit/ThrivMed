import React from "react";
import digitalTwinImage from "../assets/Digital Twin.png";

export default function DigitalTwin() {
  return (
    <section className="w-full bg-white dark:bg-[#0c0d10] overflow-hidden transition-colors duration-300">
      {/* ================= HERO SECTION ================ */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 pt-16 pb-8">
        <div className="max-w-[880px]">
          {/* Main Heading */}
          <h1
            className="
                 text-left sm:text-right
    text-3xl sm:text-xl md:text-4xl lg:text-5xl
    font-semibold
    font-['DM_Sans']
    text-gray-800 dark:text-gray-100
    leading-tight
    max-w-[320px] sm:max-w-full
    mt-0 sm:mt-0
    ml-0 sm:ml-0
    
    lg:pr-7
              "
          >
            Digital Twin is your biological replica
          </h1>

          <p
            className="
            text-left sm:text-right
    text-1xl sm:text-lg md:text-xl lg:text-[1.5rem]
    font-light
    font-['DM_Sans']
    text-zinc-900 dark:text-gray-400
    leading-5
    max-w-[320px] sm:max-w-full
    ml-0 sm:ml-0 mt-4 sm:mt-0 lg:-ml-5
            "
          >
            Everyday you unknowingly you perform activities that could harm you.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-[1200px] py-6 sm:py-2 lg:-translate-y-4 lg:mt-12 lg:w-[75%] mx-auto px-2 sm:px-6 lg:px-0 pb-2">
        <div
          className="bg-blue-50 dark:bg-[#151619]
  border border-transparent dark:border-gray-800
  rounded-[30px]
  pt-14 pb-6 sm:py-2 sm:px-5
  min-h-[500px] sm:min-h-0  lg:min-h-[550px]
overflow-hidden
 -mt-2 sm:mt-0
  transition-colors duration-300"
        >
          {/* Top Left Text */}
          <div className="max-w-none">
            <h2
              className="
    w-full
py-1
-mt-5 sm:mt-0-mt-10 sm:mt-0
max-w-[360px] sm:max-w-[808px]
pl-4 sm:px-6 md:px-0
text-zinc-900 dark:text-gray-100
text-[16px] sm:text-2xl
font-light
font-['DM_Sans']
leading-[1] sm:leading-[1.3]
  "
            >
              Built from real data about what's happening
              <br className="block sm:hidden" />
              inside you right now.
            </h2>
            <p
              className="
               w-full max-w-md relative top-3 sm:top-0 lg:mt-1 px-4 sm:px-0 text-gray-400 dark:text-gray-400 text-lg sm:text-xl font-light text-lg font-['DM_Sans'] leading-4.5 sm:leading-7 lg:leading-4.5
              "
            >
              Your health is not in reports <br className="block sm:hidden" />
              anymore its interactive.
            </p>
          </div>

          {/* Dashboard Image */}
          <div className="sm:-mt-12 mt-9 flex justify-end">
            <div
              className="
               w-[120%]
               sm:w-full
                md:w-[95%]
                lg:w-[75%]
             
               translate-x-16
               sm:translate-x-0
               translate-y-23
               sm:translate-y-0 
                md:translate-x-12
                lg:translate-x-5
                lg:translate-y-20
              "
            >
              <img
                src={digitalTwinImage}
                alt="Digital Twin Dashboard"
                className="h-[250px] w-full scale-108
    sm:scale-100 sm:h-auto rounded-tl-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
