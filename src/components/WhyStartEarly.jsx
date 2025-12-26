"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Lightbulb, Compass } from "lucide-react";

const WhyStartEarly = () => {
    const benefits = [
        {
            title: "Adaptability in a Changing World",
            description: "The world is changing faster than ever. We help students understand change rather than fear it, making adaptability a core skill.",
            icon: <TrendingUp size={24} className="text-white" />,
            citation: "57, 58"
        },
        {
            title: "Future Leadership Mindset",
            description: "By mastering 21st-century skills early, students build the strategic thinking required for future leadership roles.",
            icon: <Compass size={24} className="text-white" />,
            citation: "59"
        },
        {
            title: "Civil Service Foundation",
            description: "Developing the right mindset and foundational abilities needed for the path toward civil services and public administration.",
            icon: <ShieldCheck size={24} className="text-white" />,
            citation: "26, 59"
        },
        {
            title: "Sharper Critical Thinking",
            description: "Beyond career readiness, these skills shape students into sharper thinkers, stronger communicators, and responsible individuals.",
            icon: <Lightbulb size={24} className="text-white" />,
            citation: "60"
        }
    ];

    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* --- Left Side: The Narrative --- */}
                    <div className="lg:w-1/2 sticky top-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3">
                                Swim With The Changes
                            </h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                                Why Start <span className="text-blue-400">Early?</span>
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                The world is changing faster than ever, making adaptability one of the most important skills for young learners.
                            </p>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                At Inspiro, we believe that by mastering 21st-century skills at an early age, students learn to stay ahead, think strategically, and thrive in any academic or career path they choose. [cite: 58, 59]
                            </p>

                            <div className="p-6 bg-slate-800/50 border-l-4 border-blue-500 rounded-r-xl">
                                <p className="italic text-slate-300">
                                    "Beyond career readiness, these skills shape them into sharper thinkers and more responsible individuals." [cite: 60]
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- Right Side: The Benefits Grid --- */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 gap-6">
                            {benefits.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-5 bg-slate-800 p-6 rounded-2xl hover:bg-slate-750 transition-colors border border-slate-700 group"
                                >
                                    {/* Icon Box */}
                                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyStartEarly;