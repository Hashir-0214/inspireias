"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        // Changed background to deep maroon gradient to match image
        <section className="relative w-full min-h-screen bg-gradient-to-br from-[#681028] via-[#52091c] to-[#3a0412] flex items-center pt-20 pb-12 overflow-hidden">

            {/* --- Background Decorative Elements (Subtle Glows) --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#8a1c38]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#8a1c38]/20 rounded-full blur-[100px]" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* --- Left Column: Content --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex-1"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d6a45e]/40 bg-[#3d0311]/30 text-[#d6a45e] text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-sm shadow-sm"
                        >
                            <Star size={12} className="fill-[#d6a45e] text-[#d6a45e] mb-0.5" />
                            <span>
                                An Initiative of Cochin Business Club
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-3xl lg:text-5xl font-sans font-bold uppercase leading-tight">
                                Junior Level <br />
                                <span className="text-transparent bg-clip-text bg-foreground">
                                    Civil Service
                                </span>{" "}<br />
                                Orientation
                            </h1>
                            {/* FIX: 'text-md' is not a valid class, changed to 'text-lg' */}
                            <p className="mt-4 text-lg text-slate-300 font-light max-w-lg">
                                Homegrown with skills! <br />Just what every aspirant needs to <br />
                                master <strong className="text-white font-medium"> 21st Century Competencies</strong>
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* --- Image Section (Absolute Bottom Right) --- */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    // Mobile: Relative/Stacked | Desktop: Absolute Bottom Right
                    className="relative w-full flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:w-auto lg:h-[100%] z-10 pointer-events-none"
                >
                    {/* Glow behind student */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#7c1430] rounded-full -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-[#3a0412] rounded-full -z-11" />

                    {/* Image Container */}
                    <div className="relative w-[320px] h-[380px] lg:w-[500px] lg:h-[650px]">
                        <Image
                            src="/assets/hero-img.png"
                            alt="Student with Inspiro Book"
                            className="object-contain object-bottom"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Hero;