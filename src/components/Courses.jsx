"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, BookOpen, ArrowRight, ShieldCheck } from "lucide-react";

const courses = [
    {
        id: "level-1",
        level: "01",
        title: "Foundation Program",
        classes: "Classes 5, 6 & 7",
        duration: "60 Classroom Hours",
        rounds: "20 Rounds",
        description: "A comprehensive developmental program designed to build confidence, curiosity, and foundational skills through activity-based learning.",
        features: [
            "Debates, Seminars & Group Activities",
            "Psychological Counselling",
            "Personality Development Modules",
            "Foundation for Critical Thinking"
        ],
        color: "from-[#e3b675] to-[#f0c991]",
        borderColor: "border-[#e3b675]",
        iconColor: "text-[#e3b675]",
        shadowColor: "shadow-[#e3b675]/10",
        pillColor: "bg-[#e3b675]"
    },
    {
        id: "level-2",
        level: "02",
        title: "Advanced Program",
        classes: "Classes 8, 9 & 10",
        duration: "100+ Hours",
        rounds: "Specialised Training",
        description: "An advanced module aimed to strengthen discipline, critical thinking, and effective expression for the path toward civil services.",
        features: [
            "Public Speaking & Logical Reasoning",
            "Critical Reading & General Awareness",
            "Leadership & Communication Skills",
            "Civil Service Orientation"
        ],
        color: "from-[#6c1329] to-[#8a1c38]",
        borderColor: "border-[#6c1329]",
        iconColor: "text-[#6c1329]",
        shadowColor: "shadow-[#6c1329]/10",
        pillColor: "bg-[#6c1329]"
    }
];

const Courses = () => {
    return (
        <section className="relative w-full py-16 md:py-24 bg-slate-50 overflow-hidden" id="levels">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e3b675]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6c1329]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* --- Section Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[#6c1329] text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm mb-4">
                        Our Syllabus
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        Structured Levels for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">Every Age Group</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        The course is divided into two structured levels, planned carefully to provide the appropriate depth for each student group.
                    </p>
                </motion.div>

                {/* --- Course Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative h-full"
                        >
                            <div className={`
                                relative h-full bg-white rounded-3xl p-8 md:p-10
                                border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:shadow-2xl
                                overflow-hidden z-10 flex flex-col
                            `}>
                                {/* Top Gradient Border Effect */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${course.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                                {/* Admissions Open Badge - Creative placement */}
                                <div className="absolute top-6 right-6 z-20">
                                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wide border border-red-100 shadow-sm animate-pulse">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                        Admission Open
                                    </div>
                                </div>

                                {/* Content Wrapper */}
                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Level Badge */}
                                    <div className="mb-6">
                                        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-bold text-white shadow-lg ${course.pillColor}`}>
                                            {course.level}
                                        </span>
                                    </div>

                                    {/* Title & Meta */}
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                                        {course.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                            <Users size={14} />
                                            <span>{course.classes}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                            <Clock size={14} />
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        {course.description}
                                    </p>

                                    {/* Features Divider */}
                                    <div className="h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent mb-8" />

                                    {/* Features List */}
                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {course.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 group/item">
                                                <div className={`mt-0.5 w-5 h-5 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover/item:border-${course.borderColor.split('-')[1]} transition-colors duration-300`}>
                                                    <Check size={10} className={course.iconColor} strokeWidth={4} />
                                                </div>
                                                <span className="text-slate-700 text-sm font-medium group-hover/item:text-slate-900 transition-colors duration-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Action Button */}
                                    <a
                                        href={`https://wa.me/919747558313?text=${encodeURIComponent(`Hi, I would like to enroll for ${course.title} (Level ${course.level}) - ${course.classes}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`
                                            w-full py-4 rounded-xl 
                                            bg-slate-900 text-white font-semibold 
                                            transition-all duration-300 
                                            flex justify-center items-center gap-2 
                                            group-hover:gap-3 group-hover:bg-gradient-to-r ${course.color} group-hover:shadow-lg
                                            transform group-hover:translate-y-[-2px]
                                        `}
                                    >
                                        <span>Enroll Now</span>
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Blur Glow */}
                            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Courses;