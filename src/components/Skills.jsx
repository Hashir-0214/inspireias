"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Users, Lightbulb, Brain, MessageCircle, Globe, TrendingUp, Compass, Waves } from "lucide-react";

const CenturySkills = () => {
    const foundationalSkills = [
        { icon: BookOpen, label: "Foundational Literacies" },
        { icon: Brain, label: "Competencies" },
        { icon: Target, label: "Character Qualities" }
    ];

    const keyBenefits = [
        { icon: MessageCircle, title: "Clear Communication", description: "Express ideas with clarity and confidence" },
        { icon: Users, title: "Team Collaboration", description: "Work effectively in diverse groups" },
        { icon: Lightbulb, title: "Creative Thinking", description: "Develop innovative solutions" },
        { icon: Globe, title: "Balanced Worldview", description: "Evaluate information without bias" }
    ];

    return (
        <section className="relative w-full py-20 bg-white overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#e3b675]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#6c1329]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#e3b675]/15 rounded-full blur-2xl" />
            </div>

            {/* Floating Wave Icons */}
            <style jsx>{`
                @keyframes wave-float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(5deg); }
                }
                .animate-wave { animation: wave-float 5s ease-in-out infinite; }
            `}</style>

            <div className="absolute top-20 right-16 text-4xl animate-wave opacity-20">🌊</div>
            <div className="absolute bottom-32 left-20 text-5xl animate-wave opacity-20" style={{ animationDelay: '1s' }}>🌊</div>

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
                        <Waves className="w-4 h-4 text-[#6c1329]" />
                        <span className="text-[#6c1329] text-sm font-semibold uppercase tracking-wide">
                            Future Ready Learning
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">
                            21st Century
                        </span>{" "}
                        Skills
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-[#6c1329] via-[#e3b675] to-[#6c1329] mx-auto rounded-full" />
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                    {/* Left Column: What You Learn */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-[#6c1329]/5 to-[#e3b675]/5 rounded-2xl p-8 border-2 border-[#e3b675]/30 relative overflow-hidden">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e3b675]/20 to-transparent rounded-bl-full" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#6c1329] to-[#8b1a36] rounded-xl flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#6c1329]">What You Learn</h3>
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6">
                                    The World Economic Forum (WEF) has identified the essential skills required to thrive in the 21st century, categorized into <strong className="text-[#6c1329]">Foundational Literacies, Competencies, and Character Qualities</strong>.
                                </p>

                                {/* WEF Categories */}
                                <div className="grid grid-cols-3 gap-3 mb-6">
                                    {foundationalSkills.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-4 text-center shadow-md border border-[#e3b675]/20 hover:shadow-lg transition-shadow"
                                        >
                                            <skill.icon className="w-8 h-8 mx-auto mb-2 text-[#6c1329]" />
                                            <p className="text-xs font-semibold text-slate-700 leading-tight">{skill.label}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6">
                                    At Inspiro IAS Academy, we aim to strengthen these capabilities from an early age by guiding students to engage in meaningful discussions, explore diverse perspectives, collaborate effectively in team activities, and develop creativity through structured storytelling exercises.
                                </p>

                                <div className="bg-white rounded-xl p-6 border-l-4 border-[#6c1329] shadow-sm">
                                    <p className="text-slate-700 leading-relaxed text-sm">
                                        Throughout the module, students are encouraged to cultivate <strong className="text-[#6c1329]">curiosity, analytical thinking, and open-mindedness</strong> while learning to evaluate information without bias and form a balanced worldview. This approach helps them communicate with clarity, confidence, and responsibility - key attributes needed for future civil service aspirants.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Swim with the Changes */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="bg-gradient-to-br from-[#e3b675]/10 to-[#6c1329]/5 rounded-2xl p-8 border-2 border-[#6c1329]/30 relative overflow-hidden">
                            {/* Decorative corner */}
                            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#6c1329]/10 to-transparent rounded-br-full" />

                            <div className="relative">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#e3b675] to-[#d4a562] rounded-xl flex items-center justify-center">
                                        <Waves className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#6c1329]">Swim with the Changes</h3>
                                </div>

                                <p className="text-slate-700 leading-relaxed mb-6">
                                    The world is changing faster than ever, making <strong className="text-[#6c1329]">adaptability</strong> one of the most important skills for young learners. At Inspiro, we help students understand change rather than fear it, strengthening their critical thinking and problem-solving abilities so they can grow confidently in any academic or career path they choose.
                                </p>

                                <div className="bg-gradient-to-r from-[#6c1329] to-[#8b1a36] rounded-xl p-6 text-white mb-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#e3b675]/20 rounded-full blur-2xl" />
                                    <div className="relative">
                                        <Compass className="w-10 h-10 mb-3 text-[#e3b675]" />
                                        <p className="text-white/95 font-semibold mb-2">Future Leadership</p>
                                        <p className="text-white/80 text-sm leading-relaxed">
                                            By mastering 21st-century skills at an early age, students learn to stay ahead, think strategically, and build the mindset required for future leadership roles - including the journey toward the civil services.
                                        </p>
                                    </div>
                                </div>

                                <p className="text-slate-700 leading-relaxed">
                                    Beyond career readiness, these skills shape them into <strong className="text-[#6c1329]">sharper thinkers, stronger communicators, and more responsible individuals</strong> prepared to thrive in a rapidly evolving world.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {keyBenefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-slate-100 hover:border-[#e3b675] transition-all duration-300 text-center"
                        >
                            <div className="relative inline-block mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#6c1329] to-[#e3b675] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="relative w-14 h-14 bg-gradient-to-br from-[#6c1329] to-[#8b1a36] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                    <benefit.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#6c1329] transition-colors">
                                {benefit.title}
                            </h4>
                            <p className="text-sm text-slate-600">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-[#6c1329] via-[#8b1a36] to-[#6c1329] rounded-2xl p-8 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-4 left-8 text-6xl">🌟</div>
                        <div className="absolute bottom-4 right-8 text-6xl">🎯</div>
                        <div className="absolute top-1/2 left-1/4 text-5xl">💡</div>
                        <div className="absolute top-1/3 right-1/4 text-5xl">🚀</div>
                    </div>

                    <div className="relative">
                        <TrendingUp className="w-12 h-12 mx-auto mb-4 text-[#e3b675]" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Prepare Today for Tomorrow's World
                        </h3>
                        <p className="text-white/90 max-w-3xl mx-auto text-lg">
                            Equip your child with the skills, mindset, and confidence to navigate change, lead with purpose, and build a future in civil services and beyond.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CenturySkills;