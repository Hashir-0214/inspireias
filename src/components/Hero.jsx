"use client";

import { motion } from "framer-motion";
import { Star, BookOpen, Globe } from "lucide-react";
import Image from "next/image";

/* ---------------- Animations ---------------- */

const revealVariant = {
    hidden: { y: "100%", opacity: 0, filter: "blur(10px)" },
    visible: (i) => ({
        y: "0%",
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.05,
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
        },
    }),
};

const wordContainerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const AnimatedText = ({ text, delayOffset = 0 }) => (
    <motion.div
        className="inline-flex flex-wrap gap-x-[0.3em] overflow-hidden"
        variants={wordContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        {text.split(" ").map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1">
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

const CharacterReveal = ({ text, delayOffset = 0 }) => (
    <span className="inline-block">
        {text.split("").map((char, i) => (
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

/* ---------------- Hero ---------------- */

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
        <section
            className="
                relative w-full min-h-screen
                bg-gradient-to-br from-[#681028] via-[#52091c] to-[#3a0412]
                overflow-hidden
                pt-32 lg:pt-20
                lg:flex lg:items-center
            "
        >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#8a1c38]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#8a1c38]/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* -------- Text Column -------- */}
                    <div className="flex-1 text-white space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:ml-20 pb-32 lg:pb-0">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d6a45e]/40 bg-[#3d0311]/30 text-[#d6a45e] text-[10px] md:text-xs font-bold tracking-widest uppercase"
                        >
                            <Star size={12} className="fill-[#d6a45e]" />
                            <span>An Initiative of Cochin Business Club</span>
                        </motion.div>

                        <h1 className="text-3xl lg:text-5xl font-bold uppercase leading-tight">
                            <AnimatedText text="Junior Level" />
                            <br />
                            <span className="relative inline-block">
                                <CharacterReveal text="Civil Service" delayOffset={0.5} />
                                <motion.span
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{ opacity: 0.3, scaleX: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="absolute bottom-1 left-0 w-full h-3 bg-[#d6a45e] blur-md rounded-full -z-10"
                                />
                            </span>
                            <br />
                            <AnimatedText text="Orientation" delayOffset={16} />
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="text-lg text-slate-300 font-light max-w-lg mx-auto lg:mx-0"
                        >
                            Homegrown with skills! Just what every aspirant needs to master
                            <strong className="text-white font-medium ml-1">
                                21st Century Competencies
                            </strong>
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* -------- Image (BOTTOM ONLY) -------- */}
            <motion.div
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
                className="
                    absolute bottom-0 left-0 w-full
                    flex justify-center
                    lg:right-0 xl:right-20 2xl:right-40 lg:left-auto lg:w-auto
                    pointer-events-none z-10
                "
            >
                <motion.div
                    variants={floatingVariant}
                    animate="animate"
                    className="absolute top-[20%] left-[15%] p-3 bg-white/10 backdrop-blur-md rounded-xl"
                >
                    <BookOpen className="text-[#d6a45e] w-6 h-6" />
                </motion.div>

                <motion.div
                    variants={floatingVariant}
                    animate="animate"
                    transition={{ delay: 1 }}
                    className="absolute bottom-[30%] right-[10%] p-3 bg-white/10 backdrop-blur-md rounded-xl"
                >
                    <Globe className="text-blue-400 w-6 h-6" />
                </motion.div>

                <div className="relative w-[320px] h-[360px] lg:w-[500px] lg:h-[650px]">
                    <Image
                        src="/assets/hero-img.png"
                        alt="Student with Inspiro Book"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 500px"
                        className="object-contain object-bottom"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
