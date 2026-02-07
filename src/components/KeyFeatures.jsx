"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Users, Scale, Sparkles, Zap, Heart, Star } from "lucide-react";

export default function KeyFeatures() {

    const features = [
        {
            title: "Leadership Development",
            icon: <Brain className="w-8 h-8 text-white" />,
            color: "bg-[#FFD166]", // Pastel Yellow
            rotate: "rotate-[-2deg]",
            shape: "rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl"
        },
        {
            title: "Activity-Based Learning",
            icon: <Activity className="w-8 h-8 text-white" />,
            color: "bg-[#EF476F]", // Soft Red
            rotate: "rotate-[2deg]",
            shape: "rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-xl rounded-br-xl"
        },
        {
            title: "Expert Mentorship",
            icon: <Users className="w-8 h-8 text-white" />,
            color: "bg-[#06D6A0]", // Mint Green
            rotate: "rotate-[-1deg]",
            shape: "rounded-tl-[2rem] rounded-tr-[2rem] rounded-b-xl"
        },
        {
            title: "Critical Thinking",
            icon: <Scale className="w-8 h-8 text-white" />,
            color: "bg-[#118AB2]", // Blue
            rotate: "rotate-[1deg]",
            shape: "rounded-full"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section className="relative w-full bg-[#FAFAFA] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden px-6">

            {/* --- Playful Background Doodles --- */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFD166] rounded-full blur-2xl" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#EF476F] rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-[#06D6A0] rounded-full opacity-50 animate-bounce" />
                <Sparkles className="absolute top-20 right-[20%] text-[#FFD166] w-8 h-8 animate-pulse" />
                <Star className="absolute bottom-10 left-[15%] text-[#118AB2] w-6 h-6 animate-spin-slow" />
            </div>

            {/* --- Header Section with "Sticker" Vibes --- */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center mb-16"
            >
                <div className="inline-block relative">
                    <h2 className="text-4xl md:text-5xl font-black text-[#681028] tracking-tight relative z-10">
                        Why Choose Us?
                    </h2>
                    {/* Underline Scribble */}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD166]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute -top-6 -right-8"
                    >
                        <Zap className="w-8 h-8 text-[#EF476F] fill-[#EF476F]" />
                    </motion.div>
                </div>
                <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto font-medium">
                    We make learning an adventure! 🚀
                </p>
            </motion.div>

            {/* --- Grid Section --- */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            y: -15,
                            scale: 1.05,
                            rotate: 0,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        className={`group relative flex flex-col items-center text-center p-8 ${feature.color} ${feature.shape} ${feature.rotate} shadow-xl hover:shadow-2xl hover:shadow-black/10 transition-all cursor-pointer`}
                    >
                        {/* Blob Background for Icon */}
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-black text-white mb-2 leading-tight">
                            {feature.title}
                        </h3>

                        {/* Dotted Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dot-noise.png')] pointer-events-none rounded-[inherit]" />
                    </motion.div>
                ))}
            </motion.div>

            {/* --- Fun Quote Section --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-20 relative px-6 py-4 bg-white rounded-2xl shadow-lg border-2 border-dashed border-[#681028]/20 max-w-3xl mx-auto transform -rotate-1"
            >
                <div className="absolute -top-3 -left-3">
                    <Heart className="w-8 h-8 text-[#EF476F] fill-[#EF476F] animate-bounce" />
                </div>
                <p className="text-center font-bold text-slate-700 text-lg md:text-xl">
                    "A playground for excellence where students and mentors share a passion for learning!"
                </p>
            </motion.div>

        </section>
    );
}