import React, { useState } from "react";
import { Play, X } from "lucide-react";
import frame1 from "../assets/Frame1.png";
import frame2 from "../assets/Frame2.jpg";
import frame3 from "../assets/Frame3.png";
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

export default function ChoosePath() {
    const [popup, setPopup] = useState(null);

    const cards = [
        {
            id: 1,
            tag: "Consult",
            title: "Cellular Health Analysis",
            description:
                "Take our Cellular Damage & Toxicity Assessment and hop on a 60-minute call with a Senior Health Advisor to review your dynamic results.",
            image: frame1,
        },
        {
            id: 2,
            tag: "Bloodwork",
            title: "Cellular Health Analysis",
            description:
                "Take our Cellular Damage & Toxicity Assessment and hop on a 60-minute call with a Senior Health Advisor to review your dynamic results.",
            image: frame2,
        },
        {
            id: 3,
            tag: "Training",
            title: "Cellular Health Analysis",
            description:
                "Take our Cellular Damage & Toxicity Assessment and hop on a 60-minute call with a Senior Health Advisor to review your dynamic results.",
            image: frame3,
        },
    ];

    return (
        <div className="bg-white dark:bg-[#0c0d10] min-h-screen font-dm-sans overflow-x-hidden transition-colors duration-300">
            <div className="max-w-[1336px] mx-auto px-6 pt-16 md:pt-24 pb-32">
                {/* Heading Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="w-full md:w-[808px] mb-20 md:mb-32 md:ml-[232px]"
                >
                    <motion.h1 variants={itemVariants} className="text-[40px] -ml-3 lg:-mt-20 md:text-4xl md:-ml-50 leading-[45px] lg:leading-[43px] scale-90 md:leading-[38px] tracking-[2px] text-Primary-text dark:text-gray-100 font-normal font-['DM_Sans'] lg:-ml-16">
                        Choose the path that's{" "}
                        <br className="hidden md:block" />
                        right for you
                    </motion.h1>

                    <motion.div variants={itemVariants} className="w-full md:w-[786.37px] mt-5 text-zinc-400 text-2xl font-medium font-['DM_Sans'] leading-6 text-left lg:-ml-15 -ml-3 md:-ml-57 md:scale-80 lg:scale-90 scale-90">
                        To learn more about our proven

                        cellular healing protocols, get
                        started in one of the following ways.
                    </motion.div>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={card.id}
                            onClick={() => setPopup(card)}
                            className={`group 
w-[calc(100%+18px)] -ml-2
md:max-lg:w-[658px] md:max-lg:-ml-6
inline-flex flex-col justify-start items-start gap-5 cursor-pointer
lg:scale-67 md:scale-60
      ${index === 0 ? "lg:ml-23 lg:-mt-24" : ""}
      ${index === 1 ? "lg:-ml-32 lg:-mt-24" : ""}
      ${index === 2 ? "lg:ml-24 lg:-mt-50" : ""}
    `}
                        >
                            {/* Image Card */}
                            <div
                                className="w-full h-50 lg:h-80 md:h-65 rounded-2xl bg-cover bg-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300 flex flex-col justify-start items-start"
                                style={{ backgroundImage: `url(${card.image})` }}
                            >
                                <div className="self-stretch p-3.5 flex flex-col justify-start items-start gap-2.5">
                                    <div className="px-3.5 py-2.5 bg-white rounded-[50px] inline-flex justify-center items-center gap-2.5">
                                        <div className="justify-start text-zinc-900 text-base font-normal font-['DM_Sans']">
                                            {card.tag}
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex-1 inline-flex justify-center items-center gap-2.5">
                                    <div className="w-16 h-16 bg-black/40 rounded-[31.22px] flex justify-center items-center gap-2.5 group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="self-stretch flex flex-col justify-start items-start gap-[3px]">
                                <div className="self-stretch justify-start text-Primary-text lg:text-2xl text-2xl font-medium font-['DM_Sans']">
                                    {card.title}
                                </div>
                                <div className="self-stretch justify-start text-Primary-text lg:text-xl font-light font-['DM_Sans']">
                                    {card.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/* Glass Popup */}
                {popup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Background */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setPopup(null)}
                        />

                        {/* Popup Card */}
                        <div className="relative w-full max-w-[520px] p-8 md:p-12 text-center rounded-[32px] bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-2xl">
                            <button
                                onClick={() => setPopup(null)}
                                className="absolute top-6 right-6 text-white/70 hover:text-white transition"
                            >
                                <X size={28} />
                            </button>

                            <div className="w-24 h-24 mx-auto mb-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 shadow-inner">
                                <Play className="w-10 h-10 text-white fill-white ml-1.5" />
                            </div>

                            <h2 className="text-3xl md:text-[40px] font-semibold text-white mb-6 leading-tight">
                                {popup.title}
                            </h2>

                            <p className="text-white/80 text-lg md:text-[22px] font-light leading-relaxed mb-12">
                                {popup.description}
                            </p>

                            <button
                                onClick={() => setPopup(null)}
                                className="w-full py-5 rounded-2xl bg-[#2663FF] hover:bg-blue-600 text-white text-[18px] font-semibold shadow-lg shadow-blue-500/20 active:scale-[0.98] transition"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
