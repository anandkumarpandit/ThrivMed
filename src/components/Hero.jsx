import React from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/Comp.mp4";

const Hero = () => {
    return (
        <main className="flex-grow relative bg-[#151619] rounded-[24px] overflow-hidden min-h-[500px] h-full flex flex-col justify-center">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>


            <section className="relative lg:absolute lg:top-[286px] lg:left-[272px] w-full lg:w-[808px] px-6 py-24 lg:p-0 z-10 text-left">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="font-dm-sans font-normal text-white text-[clamp(2rem,5vw,3rem)] tracking-[0] leading-tight lg:leading-normal"
                >
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                        className="block"
                    >
                        Your Digital Twin is simply a
                    </motion.span>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                        className="block"
                    >
                        complete, evolving picture of your
                    </motion.span>
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                        className="block"
                    >
                        health.
                    </motion.span>
                </motion.h1>
            </section>

            {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.8,
                        },
                    },
                }}
                className="absolute bottom-6 left-6 right-6 sm:left-auto lg:bottom-8 lg:right-8 flex flex-col sm:flex-row gap-[10px] z-20"
            >
                <motion.button
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="w-full sm:w-[200px] lg:w-[243px] h-[53px] px-[35px] py-[15px] bg-white/10 text-white rounded-[10px] text-[15px] font-medium hover:bg-white/20 transition-all flex items-center justify-center border border-white/5 shadow-xl"
                >
                    Back
                </motion.button>
                <motion.button
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    }}
                    className="w-full sm:w-[200px] lg:w-[243px] h-[53px] px-[35px] py-[15px] bg-white/10 text-white rounded-[10px] text-[15px] font-medium hover:bg-white/20 transition-all flex items-center justify-center border border-white/5 shadow-xl"
                >
                    Digital Twin
                </motion.button>
            </motion.div> */}
            {/* Background Glow Effect */}
            <div className="absolute -top-[10%] -left-[10%] w-[80%] md:w-[50%] h-[50%] bg-blue-500/10 blur-[80px] md:blur-[130px] rounded-full pointer-events-none" />
        </main>
    );
};

export default Hero;
