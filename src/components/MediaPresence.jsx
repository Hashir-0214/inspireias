"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Zap, Cpu, Leaf, HeartHandshake } from "lucide-react";

// The "Logos" of your backing organizations (Placeholder text/icons if no image)
const partners = [
    { name: "Cochin Business Club", icon: <Briefcase size={28} /> },
    { name: "Cochin Connect", icon: <Globe size={28} /> },
];

// Content from PDF Pages 5-6 (The 21st Century Skills List)
const skillsTicker = [
    "Ethics, Integrity & Values",
    "Leadership & Critical Thinking",
    "AI Fundamentals & Digital Skills",
    "Internet of Things & Cyber Safety",
    "Social & Cultural Awareness",
    "Financial Literacy",
    "Environmental & Economic Study",
    "Adaptability & Soft Skills",
    "Scientific Awareness"
];

const MediaPresence = () => {
    return (
        <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-10">
                <div className="text-center">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                        An Initiative Of
                    </p>

                    {/* --- Static Partners Row --- */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="flex items-center gap-3 group cursor-default">
                                <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                    {partner.icon}
                                </div>
                                <span className="text-xl md:text-2xl font-serif font-bold text-slate-700 group-hover:text-slate-900">
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Animated Skills Ticker (Replacing Media Marquee) --- */}
            <div className="relative w-full bg-slate-900 py-4 rotate-1 scale-105 shadow-xl border-y-4 border-blue-600">
                {/* Gradient overlays for smooth fade at edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />

                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-12 whitespace-nowrap items-center"
                        animate={{ x: [0, -1000] }} // Adjust -1000 based on content width
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 25, // Speed of the scroll
                        }}
                    >
                        {/* We duplicate the list to ensure seamless infinite scrolling */}
                        {[...skillsTicker, ...skillsTicker, ...skillsTicker].map((skill, index) => (
                            <div key={index} className="flex items-center gap-3 text-slate-300 font-medium text-lg md:text-xl">
                                {/* Randomize icons for visual variety */}
                                {index % 3 === 0 ? <Zap size={18} className="text-yellow-400" /> :
                                    index % 3 === 1 ? <Cpu size={18} className="text-blue-400" /> :
                                        <Leaf size={18} className="text-green-400" />}

                                <span>{skill}</span>
                                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full ml-8" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MediaPresence;