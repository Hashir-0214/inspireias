"use client";

import { motion } from "framer-motion";
import { BookOpen, Pencil, Star, Ruler, Sparkles, PenTool } from "lucide-react";

const FeelTheChange = () => {
    const floatingVariant = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 5, 0, -5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="max-w-6xl rounded-4xl mx-auto relative py-24 bg-orange-50 overflow-hidden flex items-center justify-center">

            {/* --- Background Doodles (Absolute Positioned) --- */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">

                {/* --- Main Content --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <span className="inline-block py-1 px-4 rounded-full bg-white border-2 border-orange-200 text-orange-600 font-bold text-xs tracking-widest uppercase mb-6 shadow-sm">
                        Our Vision
                    </span>

                    {/* Headline */}
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8 relative inline-block">
                        FEEL THE <br className="md:hidden" />
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-yellow-600 to-orange-600">
                            CHANGE
                        </span>
                        {/* Hand-drawn underline effect */}
                        <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-4 md:h-6 text-yellow-400 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00026 6.99997C18.4476 3.74532 49.4929 1.40821 73.9999 2.00001C111.458 2.90477 151 5.99999 198 2.00002" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                        </svg>
                    </h2>

                    {/* The Core Message from PDF [cite: 34-40] */}
                    <p className="text-lg md:text-2xl font-medium text-slate-700 leading-relaxed max-w-2xl mx-auto">
                        "Through these sessions, we aim to redefine the relationship between
                        <span className="text-blue-600 font-bold mx-1">education</span>
                        and
                        <span className="text-pink-600 font-bold mx-1">skill development</span>."
                    </p>
                </motion.div>

            </div>

            {/* --- Floating "Kids" Elements --- */}
            {/* 1. The Book (Top Left) */}
            <motion.div
                variants={floatingVariant}
                animate="animate"
                className="absolute top-[10%] left-[5%] md:left-[15%] text-blue-500/80 hidden sm:block"
            >
                <BookOpen size={64} strokeWidth={1.5} className="drop-shadow-lg transform -rotate-12" />
            </motion.div>

            {/* 2. The Pencil (Top Right) */}
            <motion.div
                variants={floatingVariant}
                animate="animate"
                transition={{ delay: 1 }} // Stagger animation
                className="absolute top-[15%] right-[5%] md:right-[15%] text-yellow-500 hidden sm:block"
            >
                <Pencil size={56} strokeWidth={2} className="drop-shadow-lg transform rotate-45" />
            </motion.div>

            {/* 3. The Star (Bottom Left) */}
            <motion.div
                variants={floatingVariant}
                animate="animate"
                transition={{ delay: 2 }}
                className="absolute bottom-[20%] left-[8%] md:left-[20%] text-purple-500"
            >
                <Star size={48} fill="currentColor" className="drop-shadow-md transform -rotate-12 opacity-80" />
            </motion.div>

            {/* 4. The Ruler (Bottom Right) */}
            <motion.div
                variants={floatingVariant}
                animate="animate"
                transition={{ delay: 1.5 }}
                className="absolute bottom-[15%] right-[10%] md:right-[22%] text-pink-500 hidden sm:block"
            >
                <Ruler size={52} strokeWidth={2} className="drop-shadow-lg transform rotate-12" />
            </motion.div>

            {/* 5. Extra Sparkles (Scattered) */}
            <div className="absolute top-1/2 left-10 text-orange-400 animate-pulse">
                <Sparkles size={24} />
            </div>
            <div className="absolute top-20 right-1/3 text-green-400 animate-pulse delay-700">
                <Sparkles size={32} />
            </div>

        </section>
    );
};

export default FeelTheChange;