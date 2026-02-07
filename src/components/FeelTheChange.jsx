"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Lightbulb, Puzzle, Zap, Sparkles } from "lucide-react";

const FeelTheChange = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Parallax Effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[80vh] bg-gradient-to-b from-white to-blue-50 flex items-center justify-center overflow-hidden py-24">

            {/* --- Background Elements --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-yellow-200/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-pink-200/30 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* --- Main Content --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 font-bold text-xs tracking-widest uppercase mb-6">
                        Transformation Awaits
                    </span>

                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-none tracking-tighter mb-8 relative">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                            FEEL THE
                        </span>
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#EF476F] to-[#118AB2]">
                            CHANGE
                            {/* Underline Scribble */}
                            <svg className="absolute -bottom-2 left-0 w-full h-4 md:h-8 text-[#118AB2] opacity-50 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00026 6.99997C18.4476 3.74532 49.4929 1.40821 73.9999 2.00001C111.458 2.90477 151 5.99999 198 2.00002" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <p className="text-xl md:text-3xl font-medium text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Where <span className="text-[#EF476F] font-bold">education</span> meets <span className="text-[#118AB2] font-bold">inspiration</span>.
                        We don't just teach; we ignite the spark within.
                    </p>
                </motion.div>

            </div>

            {/* --- Floating Parallax Elements --- */}

            {/* Rocket */}
            <motion.div style={{ y: y2, rotate: rotate }} className="absolute top-[10%] right-[10%] text-[#EF476F] opacity-90 hidden md:block">
                <Rocket size={80} strokeWidth={1.5} className="drop-shadow-xl" />
            </motion.div>

            {/* Lightbulb */}
            <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[10%] text-[#FFD166] opacity-90 hidden md:block">
                <Lightbulb size={70} strokeWidth={1.5} className="drop-shadow-xl transform -rotate-12" />
            </motion.div>

            {/* Puzzle Piece */}
            <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[20%] text-[#06D6A0] opacity-80 hidden md:block">
                <Puzzle size={60} strokeWidth={1.5} className="drop-shadow-lg" />
            </motion.div>

            {/* Sparkles & Zap */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/2 left-[5%]"
            >
                <Sparkles className="text-[#118AB2] w-8 h-8" />
            </motion.div>

            <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                className="absolute bottom-[30%] right-[5%]"
            >
                <Zap className="text-[#FFD166] w-10 h-10 fill-[#FFD166]" />
            </motion.div>

        </section>
    );
};

export default FeelTheChange;