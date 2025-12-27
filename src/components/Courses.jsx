"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, BookOpen, ArrowRight } from "lucide-react";

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
        color: "#e3b675",
        accent: "border-[#e3b675]",
        bg: "bg-[#e3b675]/10",
        text: "text-[#e3b675]",
        button: "hover:bg-[#e3b675]"
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
        color: "#e3b675",
        accent: "border-[#e3b675]",
        bg: "bg-[#e3b675]/10",
        text: "text-[#e3b675]",
        button: "hover:bg-[#e3b675]"
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="levels">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e3b675]/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6c1329]/5 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-6 relative z-10">

                {/* --- Section Header --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#6c1329] font-bold tracking-widest text-xs uppercase mb-2 block">
                        Our Syllabus
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Structured Levels for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">Every Age Group</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
                        The course is divided into two structured levels, planned carefully to provide the appropriate depth for each student group.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#6c1329] to-[#e3b675] mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Wrapper Card with Maroon Background */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-[#6c1329] rounded-3xl p-8 md:p-12 shadow-2xl max-w-6xl mx-auto relative overflow-hidden"
                >
                    {/* Decorative elements inside the card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e3b675]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                        {/* --- Course Cards --- */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {courses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 ${course.accent} overflow-hidden group`}
                                >
                                    {/* Badge: Admissions Open */}
                                    <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide animate-pulse">
                                        Admissions Open
                                    </div>

                                    <div className="p-8">
                                        {/* Header: Level & Title */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <span className={`text-5xl font-bold opacity-10 ${course.text}`}>
                                                    {course.level}
                                                </span>
                                                <h3 className="text-2xl font-bold text-slate-900 -mt-2">
                                                    {course.title}
                                                </h3>
                                            </div>
                                            <div className={`p-3 rounded-xl ${course.bg} ${course.text}`}>
                                                <BookOpen size={24} />
                                            </div>
                                        </div>

                                        {/* Meta Data Row */}
                                        <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-slate-600 border-b border-slate-100 pb-6">
                                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md">
                                                <Users size={16} className="text-slate-400" />
                                                <span>{course.classes}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md">
                                                <Clock size={16} className="text-slate-400" />
                                                <span>{course.duration}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-slate-500 mb-6 leading-relaxed">
                                            {course.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3 mb-8">
                                            {course.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check size={18} className={`mt-0.5 shrink-0 ${course.text}`} strokeWidth={3} />
                                                    <span className="text-slate-700 text-sm font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Action Button */}
                                        <a
                                            href="#contact"
                                            className={`block w-full text-center py-4 rounded-xl bg-[#6c1329] text-white font-semibold transition-all duration-300 ${course.button} flex justify-center items-center gap-2 group-hover:gap-3 hover:shadow-lg`}
                                        >
                                            Enroll for Level {course.level}
                                            <ArrowRight size={18} />
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Courses;