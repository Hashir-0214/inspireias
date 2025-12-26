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
        color: "blue",
        accent: "border-blue-500",
        bg: "bg-blue-50",
        text: "text-blue-600",
        button: "hover:bg-blue-600"
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
        color: "emerald",
        accent: "border-emerald-500",
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        button: "hover:bg-emerald-600"
    }
];

const Courses = () => {
    return (
        <section className="py-20 bg-white" id="levels">
            <div className="container mx-auto px-6">

                {/* --- Section Header --- */}
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                        Our Syllabus
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                        Structured Levels for <br />
                        <span className="text-blue-600">Every Age Group</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
                        The course is divided into two structured levels, planned carefully to provide the appropriate depth for each student group.
                    </p>
                </div>

                {/* --- Course Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
                                    className={`block w-full text-center py-4 rounded-xl bg-slate-900 text-white font-semibold transition-colors ${course.button} flex justify-center items-center gap-2 group-hover:gap-3`}
                                >
                                    Enroll for Level {course.level}
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Courses;