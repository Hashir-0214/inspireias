"use client";

import { motion } from "framer-motion";
import { BookOpen, Hand, Route, Trophy, Brain, TrendingUp, Sparkles } from "lucide-react";

const KeyFeatures = () => {
    const features = [
        {
            icon: "/assets/icons/open-book.png",
            title: "Beyond Traditional Curriculum",
            description: "Designed to enrich and go beyond the traditional school curriculum",
            gradient: "from-[#6c1329] to-[#8b1a36]",
            number: "01",
            color: "#e91e63"
        },
        {
            icon: "/assets/icons/pencil.png",
            title: "Hands-On Learning",
            description: "Hands-on learning approach to build essential skills",
            gradient: "from-[#e3b675] to-[#d4a562]",
            number: "02",
            color: "#ff9800"
        },
        {
            icon: "/assets/icons/folder.png",
            title: "Holistic Development",
            description: "Thoughtfully structured course for holistic development",
            gradient: "from-[#6c1329] to-[#8b1a36]",
            number: "03",
            color: "#9c27b0"
        },
        {
            icon: "/assets/icons/trophy.png",
            title: "Confidence & Leadership",
            description: "Activities that strengthen confidence, communication & leadership",
            gradient: "from-[#e3b675] to-[#d4a562]",
            number: "04",
            color: "#e91e63"
        },
        {
            icon: "/assets/icons/open-book.png",
            title: "Critical Thinking",
            description: "Emphasis on critical thinking, awareness, and personality building",
            gradient: "from-[#6c1329] to-[#8b1a36]",
            number: "05",
            color: "#ff9800"
        },
        {
            icon: "/assets/icons/progress.png",
            title: "Progress Tracking",
            description: "Regular evaluations to track progress and ensure improvement",
            gradient: "from-[#e3b675] to-[#d4a562]",
            number: "06",
            color: "#9c27b0"
        }
    ];

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">

            {/* Background with subtle pattern */}
            <div className="absolute inset-0 bg-slate-50/50" />

            {/* Floating Star Elements */}
            <style jsx>{`
                @keyframes float-star {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-15px) translateX(5px); }
                }
                .animate-float-star { animation: float-star 8s ease-in-out infinite; }
                .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
            `}</style>

            {/* Decorative Stars */}
            <div className="absolute top-8 left-[15%] text-5xl animate-float-star" style={{ color: '#fbbf24' }}>⭐</div>
            <div className="absolute top-12 right-[10%] text-4xl animate-float-gentle" style={{ color: '#84cc16', animationDelay: '1s' }}>⭐</div>
            <div className="absolute top-4 left-[5%] text-3xl animate-float-star" style={{ color: '#fb923c', animationDelay: '2s' }}>●</div>
            <div className="absolute top-6 right-[5%] text-3xl animate-float-gentle" style={{ color: '#f97316', animationDelay: '0.5s' }}>●</div>
            <div className="absolute bottom-[60%] left-[8%] text-4xl animate-float-star" style={{ color: '#fbbf24', animationDelay: '1.5s' }}>⭐</div>
            <div className="absolute bottom-[55%] right-[15%] text-5xl animate-float-gentle" style={{ color: '#fb923c', animationDelay: '2.5s' }}>⭐</div>
            <div className="absolute bottom-[40%] right-[5%] text-3xl animate-float-star" style={{ color: '#84cc16', animationDelay: '3s' }}>●</div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                        Our <span className="text-[#e91e63]">Features</span>
                    </h2>
                    <p className="text-slate-600 text-base">
                        Groom your child beyond the school for the new age
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card with wavy pattern background */}
                            <div className="relative h-full bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

                                {/* Wavy pattern overlay */}
                                <div className="absolute inset-0 opacity-30" style={{
                                    backgroundImage: `repeating-linear-gradient(
                                        45deg,
                                        transparent,
                                        transparent 10px,
                                        rgba(255,255,255,0.3) 10px,
                                        rgba(255,255,255,0.3) 20px
                                    )`
                                }} />

                                {/* Colored bar at top */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2 group-hover:h-1/2 transition-all duration-300 rounded-b-full" style={{ backgroundColor: feature.color }} />

                                {/* Icon with illustration style */}
                                <div className="relative flex justify-center mb-6 mt-4">
                                    <div className="relative">
                                        {/* Icon background circle */}
                                        <div className={`w-20 h-20 flex items-center justify-center`}>
                                            <img src={feature.icon} alt={feature.title} className="w-20 h-20 -translate-y-8 z-1" />
                                        </div>
                                        {/* Number badge */}
                                        <div className="absolute left-1/2 -translate-y-2 -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 flex items-center justify-center shadow-md" style={{ borderColor: feature.color }}>
                                            <span className="font-bold text-sm" style={{ color: feature.color }}>{feature.number}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative text-center mt-8 p-3 rounded-lg overflow-hidden">
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ backgroundColor: feature.color }}
                                    />
                                    <div className="relative">
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    {/* Optional CTA content can go here */}
                </motion.div>

            </div>
        </section>
    );
};

export default KeyFeatures;