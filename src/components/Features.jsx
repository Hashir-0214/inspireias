"use client";

import { motion } from "framer-motion";
import { BookOpen, Hand, Route, Trophy, Brain, TrendingUp, Sparkles } from "lucide-react";

const KeyFeatures = () => {
    const features = [
        {
            icon: BookOpen,
            title: "Beyond Traditional Curriculum",
            description: "Designed to enrich and go beyond the traditional school curriculum",
            gradient: "from-[#6c1329] to-[#8b1a36]"
        },
        {
            icon: Hand,
            title: "Hands-On Learning",
            description: "Hands-on learning approach to build essential skills",
            gradient: "from-[#e3b675] to-[#d4a562]"
        },
        {
            icon: Route,
            title: "Holistic Development",
            description: "Thoughtfully structured course for holistic development",
            gradient: "from-[#6c1329] to-[#8b1a36]"
        },
        {
            icon: Trophy,
            title: "Confidence & Leadership",
            description: "Activities that strengthen confidence, communication & leadership",
            gradient: "from-[#e3b675] to-[#d4a562]"
        },
        {
            icon: Brain,
            title: "Critical Thinking",
            description: "Emphasis on critical thinking, awareness, and personality building",
            gradient: "from-[#6c1329] to-[#8b1a36]"
        },
        {
            icon: TrendingUp,
            title: "Progress Tracking",
            description: "Regular evaluations to track progress and ensure improvement",
            gradient: "from-[#e3b675] to-[#d4a562]"
        }
    ];

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e3b675]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6c1329]/5 rounded-full blur-[120px]" />

            {/* Floating Children Elements */}
            <style jsx>{`
                @keyframes float-gentle {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    33% { transform: translateY(-15px) translateX(5px) rotate(3deg); }
                    66% { transform: translateY(-8px) translateX(-5px) rotate(-3deg); }
                }
                @keyframes float-wave {
                    0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
                }
                @keyframes float-bounce {
                    0%, 100% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-25px) scale(1.05); }
                }
                @keyframes float-swing {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-10px) rotate(-5deg); }
                    75% { transform: translateY(-10px) rotate(5deg); }
                }
                .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
                .animate-float-wave { animation: float-wave 5s ease-in-out infinite; animation-delay: 0.5s; }
                .animate-float-bounce { animation: float-bounce 4s ease-in-out infinite; animation-delay: 1s; }
                .animate-float-swing { animation: float-swing 5s ease-in-out infinite; animation-delay: 1.5s; }
            `}</style>

            {/* Floating Child-Related Elements */}
            <div className="absolute top-16 right-12 text-6xl animate-float-gentle opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
                👧
            </div>
            <div className="absolute top-[25%] right-8 text-5xl animate-float-wave opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
                📚
            </div>
            <div className="absolute top-[45%] right-20 text-4xl animate-float-bounce opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
                🎨
            </div>
            <div className="absolute bottom-32 right-16 text-6xl animate-float-swing opacity-30 hover:opacity-60 transition-opacity cursor-pointer">
                👦
            </div>
            <div className="absolute bottom-[20%] right-6 text-5xl animate-float-gentle opacity-30 hover:opacity-60 transition-opacity cursor-pointer" style={{ animationDelay: '2s' }}>
                ✨
            </div>
            <div className="absolute top-[60%] right-32 text-4xl animate-float-wave opacity-30 hover:opacity-60 transition-opacity cursor-pointer" style={{ animationDelay: '0.8s' }}>
                🌟
            </div>
            <div className="absolute top-[35%] right-4 text-3xl animate-float-bounce opacity-30 hover:opacity-60 transition-opacity cursor-pointer" style={{ animationDelay: '1.2s' }}>
                🎯
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6c1329]/10 to-[#e3b675]/20 border border-[#e3b675]/40 mb-4">
                        <Sparkles className="w-4 h-4 text-[#6c1329]" />
                        <span className="text-[#6c1329] text-sm font-semibold uppercase tracking-wide">
                            What Makes Us Different
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">Features</span> of the Program
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Comprehensive learning designed to shape future leaders through innovation and excellence
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#6c1329] via-[#e3b675] to-[#6c1329] mx-auto rounded-full mt-4" />
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
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-slate-100 hover:border-[#e3b675] transition-all duration-300 overflow-hidden">

                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon Container */}
                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300`}>
                                        <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6c1329] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Bottom Border Animation */}
                                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500`} />

                                {/* Corner Decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#e3b675]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <div className="inline-block bg-gradient-to-r from-[#6c1329] to-[#8b1a36] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#e3b675]/20 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                        <div className="relative">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Sparkles className="w-6 h-6 text-[#e3b675]" />
                                <h3 className="text-2xl font-bold text-white">
                                    Building Tomorrow's Leaders Today
                                </h3>
                                <Sparkles className="w-6 h-6 text-[#e3b675]" />
                            </div>
                            <p className="text-white/90 max-w-2xl mx-auto">
                                Every feature is carefully crafted to ensure your child develops the skills, confidence, and mindset needed for a successful future in civil services and beyond.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default KeyFeatures;