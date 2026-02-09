"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, Globe } from "lucide-react";
import Image from "next/image";

const revealVariant = {
    hidden: { y: "100%", opacity: 0, filter: "blur(10px)" },
    visible: (i) => ({
        y: "0%",
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.05,
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1], // Cubic bezier for smooth entry
        },
    }),
};

const wordContainerVariant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const AnimatedText = ({ text, className = "", delayOffset = 0 }) => {
    const words = text.split(" ");
    return (
        <motion.div
            className={`overflow-hidden inline-flex flex-wrap gap-x-[0.3em] ${className}`}
            variants={wordContainerVariant}
            initial="hidden"
            whileInView="visible" // Re-trigger on scroll if needed, or use "animate" for once
            viewport={{ once: true }}
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1"> {/* pb-1 handles descenders */}
                    <motion.span
                        className="inline-block"
                        custom={i + delayOffset}
                        variants={revealVariant}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

const CharacterReveal = ({ text, className = "", delayOffset = 0 }) => {
    const characters = text.split("");
    return (
        <span className={`inline-block ${className}`}>
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{
                        delay: delayOffset + i * 0.03,
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
};


const Hero = () => {
    const floatingVariant = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
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
                    <div className="text-white space-y-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0 flex-1">
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d6a45e]/40 bg-[#3d0311]/30 text-[#d6a45e] text-[10px] md:text-xs font-bold tracking-widest uppercase backdrop-blur-sm shadow-sm hover:bg-[#3d0311]/50 transition-colors cursor-default"
                        >
                            <Star size={12} className="fill-[#d6a45e] text-[#d6a45e] mb-0.5 animate-[spin_3s_linear_infinite_reverse]" />
                            <span>
                                An Initiative of Cochin Business Club
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="flex flex-col">
                            <h1 className="text-3xl lg:text-5xl font-sans font-bold uppercase leading-tight">
                                <AnimatedText text="Junior Level" delayOffset={0} /> <br />
                                <span className="text-[foreground] inline-block relative">
                                    {/* Using CharacterReveal for the main keyword for emphasis */}
                                    <CharacterReveal text="Civil Service" delayOffset={0.5} className="relative z-10" />
                                    {/* Optional: Glow behind the text */}
                                    <motion.span
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 0.3, scaleX: 1 }}
                                        transition={{ delay: 1, duration: 1 }}
                                        className="absolute bottom-1 left-0 w-full h-3 bg-[#d6a45e] -z-10 blur-md rounded-full"
                                    />
                                </span>{" "}<br />
                                <AnimatedText text="Orientation" delayOffset={16} />
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="mt-6 text-lg text-slate-300 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed"
                            >
                                Homegrown with skills! Just what every aspirant needs to master
                                <strong className="text-white font-medium ml-1">21st Century Competencies</strong>
                            </motion.p>
                        </div>
                    </div>

                    {/* --- Image Section (Absolute Bottom Right) --- */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
                        // Mobile: Relative/Stacked | Desktop: Absolute Bottom Right
                        className="relative w-full flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:w-auto lg:h-[100%] z-10 pointer-events-none"
                    >
                        {/* Floating Icons - Re-added for "Creative" requirement */}
                        <motion.div
                            variants={floatingVariant}
                            animate="animate"
                            className="absolute top-[20%] left-[10%] lg:left-[15%] p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl z-20"
                        >
                            <BookOpen className="text-[#d6a45e] w-6 h-6" />
                        </motion.div>

                        <motion.div
                            variants={floatingVariant}
                            animate="animate"
                            transition={{ delay: 1 }}
                            className="absolute bottom-[30%] right-[10%] lg:right-[5%] p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-xl z-20"
                        >
                            <Globe className="text-blue-400 w-6 h-6" />
                        </motion.div>

                        {/* Glow behind student */}
                        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-[#7c1430] rounded-full -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-[#3a0412] rounded-full -z-11" /> */}

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