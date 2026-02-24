import React from "react";
import Hero from "../components/Hero";
import DigitalTwinSection from "../components/DigitalTwinSection";
import MissionSection from "../components/MissionSection";
import FAQSection from "../components/FAQSection";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="sticky top-0 h-[calc(100vh-95px)] flex flex-col justify-center z-0 mb-6 px-4 md:px-6">
        <div className="h-full flex flex-col">
          <Hero />
        </div>
      </div>
      <div className="relative z-10 bg-white dark:bg-[#0c0d10] min-h-screen pt-6 md:pt-10 lg:pt-2 rounded-t-[24px] md:rounded-t-[32px] px-4 md:px-6 flex flex-col gap-12 sm:gap-16 transition-colors duration-300">
        <DigitalTwinSection />
        <MissionSection />
        <Testimonial />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
