"use client";

import { motion } from "framer-motion";
import { Brain, Lightbulb, Users2, MessageCircle, Target, Sparkles } from "lucide-react";

const ActivityLearning = () => {
    const features = [
        {
            icon: Brain,
            title: "Analytical Thinking",
            description: "Develop critical reasoning through structured problem-solving"
        },
        {
            icon: Lightbulb,
            title: "Creativity",
            description: "Foster innovative solutions and out-of-the-box thinking"
        },
        {
            icon: Users2,
            title: "Teamwork",
            description: "Build collaborative skills through group activities"
        },
        {
            icon: MessageCircle,
            title: "Communication",
            description: "Enhance verbal and written expression abilities"
        }
    ];

    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-white via-[#e3b675]/5 to-white overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#6c1329]/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e3b675]/20 rounded-full blur-[120px]" />

            {/* Floating Elements */}
            <div className="absolute top-10 right-20 text-4xl opacity-20 animate-float">🎯</div>
            <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float-delayed">💡</div>
            <div className="absolute top-1/2 right-10 text-3xl opacity-20 animate-float-slow">✨</div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-25px) rotate(-5deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 1s; }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; animation-delay: 0.5s; }
            `}</style>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6c1329]/10 to-[#e3b675]/10 border border-[#e3b675]/30 mb-4">
                        <Sparkles className="w-4 h-4 text-[#6c1329]" />
                        <span className="text-[#6c1329] text-sm font-semibold uppercase tracking-wide">
                            Our Approach
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">
                            Activity-Based
                        </span>{" "}
                        Learning
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#6c1329] via-[#e3b675] to-[#6c1329] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#e3b675]/20 relative overflow-hidden">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e3b675]/20 to-transparent rounded-bl-full" />

                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#6c1329] to-[#8b1a36] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>

                                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                                    Activity-based learning is a <strong className="text-[#6c1329]">dynamic approach</strong> where students learn through experience rather than passive listening. Instead of simply taking notes, students at Inspiro actively participate in their learning through hands-on tasks, practical activities, and guided exploration.
                                </p>

                                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                                    This method encourages <strong className="text-[#6c1329]">independent thinking, problem-solving, and real-time application</strong> of concepts. By allowing students to explore, experiment, and discover through structured activities, Inspiro equips young learners with essential 21st-century abilities.
                                </p>

                                <div className="bg-gradient-to-r from-[#6c1329]/5 to-[#e3b675]/5 rounded-xl p-6 border-l-4 border-[#6c1329]">
                                    <p className="text-slate-700 leading-relaxed text-base italic">
                                        Our activity-driven environment ensures that every student engages deeply with the subject while developing foundational skills required for future civil service preparation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Key Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-2xl border border-slate-100 hover:border-[#e3b675] transition-all duration-300"
                            >
                                {/* Icon Container */}
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#6c1329] to-[#e3b675] rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative w-14 h-14 bg-gradient-to-br from-[#6c1329] to-[#8b1a36] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                                        <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#6c1329] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover Effect Border */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#6c1329] to-[#e3b675] group-hover:w-full transition-all duration-500 rounded-full" />
                            </motion.div>
                        ))}

                        {/* Additional Highlight Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="sm:col-span-2 bg-gradient-to-br from-[#6c1329] to-[#8b1a36] rounded-xl p-6 text-white relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#e3b675]/20 rounded-full blur-3xl" />
                            <div className="relative">
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    <Sparkles className="w-6 h-6 text-[#e3b675]" />
                                    21st Century Skills
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Through hands-on exploration and guided activities, students develop the analytical thinking, creativity, teamwork, and communication skills essential for tomorrow's leaders.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>

                {/* Bottom Stats or Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center items-center gap-8"
                >
                    {[
                        { icon: "🎯", text: "Hands-On Tasks" },
                        { icon: "🔬", text: "Practical Activities" },
                        { icon: "🧭", text: "Guided Exploration" },
                        { icon: "💪", text: "Real-Time Application" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-[#e3b675]/20 hover:shadow-lg hover:border-[#e3b675] transition-all duration-300"
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default ActivityLearning;