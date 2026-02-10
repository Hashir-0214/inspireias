"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Users, Calendar, Presentation, BarChart3, MessageSquare, ArrowRight } from "lucide-react";

const OurProcess = () => {
    const processes = [
        {
            icon: ClipboardCheck,
            title: "Aptitude Test",
            description: "A 25-question MCQ test conducted in 30 minutes to assess student readiness",
            color: "from-[#6c1329] to-[#8b1a36]",
            bgColor: "bg-[#6c1329]/5",
            iconColor: "text-[#6c1329]",
            step: "01"
        },
        {
            icon: Users,
            title: "Parents' Meet",
            description: "Orientation for parents on Inspiro's civil service foundation approach",
            color: "from-[#e3b675] to-[#d4a562]",
            bgColor: "bg-[#e3b675]/10",
            iconColor: "text-[#6c1329]",
            step: "02"
        },
        {
            icon: Calendar,
            title: "Classes",
            description: "3-hour sessions held on weekends/holidays for student convenience",
            color: "from-[#6c1329] to-[#8b1a36]",
            bgColor: "bg-[#6c1329]/5",
            iconColor: "text-[#6c1329]",
            step: "03"
        },
        {
            icon: Presentation,
            title: "Parent Seminar",
            description: "Experts guide parents on supporting academic growth and goal setting",
            color: "from-[#e3b675] to-[#d4a562]",
            bgColor: "bg-[#e3b675]/10",
            iconColor: "text-[#6c1329]",
            step: "04"
        },
        {
            icon: BarChart3,
            title: "Evaluation",
            description: "Continuous assessment with regular updates shared through the parent",
            color: "from-[#6c1329] to-[#8b1a36]",
            bgColor: "bg-[#6c1329]/5",
            iconColor: "text-[#6c1329]",
            step: "05"
        },
        {
            icon: MessageSquare,
            title: "Parent Guidance",
            description: "Personal review sessions based on evaluations",
            color: "from-[#e3b675] to-[#d4a562]",
            bgColor: "bg-[#e3b675]/10",
            iconColor: "text-[#6c1329]",
            step: "06"
        }
    ];

    return (
        <section className="relative w-full py-12 md:py-20 bg-slate-50 overflow-hidden" id="process">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)`,
                        backgroundSize: '32px 32px'
                    }}
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-[#6c1329]/10 rounded-full blur-3xl mix-blend-multiply" />
            <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#e3b675]/20 rounded-full blur-3xl mix-blend-multiply" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#e3b675]/30 text-[#6c1329] text-xs md:text-sm font-bold uppercase tracking-widest shadow-sm mb-4">
                        Our Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">Inspiro Way</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        A scientifically designed 6-step journey transforming young minds into future leaders through structured mentorship.
                    </p>
                </motion.div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">


                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Card Container */}
                            <div className="
                                relative h-full bg-white rounded-3xl p-8 
                                border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]
                                overflow-hidden z-10
                            ">
                                {/* Top Gradient Border Effect */}
                                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${process.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 will-change-transform`} />

                                {/* Side Gradient Border Effect (Subtle) */}
                                <div className={`absolute bottom-0 left-0 h-full w-1 bg-gradient-to-t ${process.color} transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-700 delay-100 opacity-50`} />

                                {/* Step Number Watermark */}
                                <div className="absolute -right-6 -top-6 text-[7rem] font-black text-slate-50 group-hover:text-slate-100 transition-colors duration-300 pointer-events-none select-none z-0 leading-none">
                                    {process.step}
                                </div>

                                {/* Content Container */}
                                <div className="relative z-10 flex flex-col items-start h-full">

                                    {/* Icon Container */}
                                    <div className={`
                                        w-16 h-16 rounded-2xl mb-6 
                                        flex items-center justify-center 
                                        ${process.bgColor}
                                        group-hover:bg-[#6c1329] group-hover:text-white
                                        group-hover:rotate-3 group-hover:scale-110
                                        transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
                                        shadow-sm
                                    `}>
                                        <process.icon
                                            className={`w-7 h-7 ${process.iconColor} group-hover:text-white transition-colors duration-500`}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6c1329] transition-colors duration-300">
                                        {process.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {process.description}
                                    </p>

                                    {/* 'Explore' Arrow Interaction */}
                                    <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#e3b675] group/btn cursor-pointer">
                                        <span className="group-hover/btn:mr-1 transition-all duration-300">Explore Stage</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Glow */}
                            <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${process.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />

                        </motion.div>
                    ))}
                </div>

                {/* Connecting Path background hint for desktop */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-full -z-10 pointer-events-none opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 300 C 300 100, 500 500, 700 300 S 1100 100, 1300 300" stroke="url(#gradient-path)" strokeWidth="2" strokeDasharray="10 10" />
                        <defs>
                            <linearGradient id="gradient-path" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" stopColor="#6c1329" stopOpacity="0" />
                                <stop offset="50%" stopColor="#e3b675" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#6c1329" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

            </div>
        </section>
    );
};

export default OurProcess;