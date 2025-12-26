"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Users, Calendar, Presentation, BarChart3, MessageSquare } from "lucide-react";

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
        <section className="relative w-full py-20 bg-white overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" 
                     style={{
                         backgroundImage: `radial-gradient(circle at 1px 1px, #6c1329 1px, transparent 0)`,
                         backgroundSize: '40px 40px'
                     }}
                />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-[#6c1329]/20 rounded-full blur-2xl" />
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#e3b675]/30 rounded-full blur-3xl" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-[#e3b675]/20 text-[#6c1329] text-sm font-semibold uppercase tracking-wide mb-4">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6c1329] to-[#e3b675]">Process</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A structured journey from assessment to continuous growth, designed to nurture future civil service aspirants
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#6c1329] to-[#e3b675] mx-auto rounded-full mt-4" />
                </motion.div>

                {/* Process Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    
                    {/* Connection Lines (Hidden on Mobile) */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none">
                        <svg className="w-full h-full" style={{ position: 'absolute' }}>
                            {/* Connecting dotted lines between cards */}
                            <line x1="33%" y1="25%" x2="66%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="66%" y1="58%" x2="33%" y2="58%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>

                    {processes.map((process, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -left-4 z-20">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-white font-bold text-sm">{process.step}</span>
                                </div>
                            </div>

                            {/* Card */}
                            <div className={`relative ${process.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-xl group-hover:-translate-y-2 h-full`}>
                                
                                {/* Icon Container */}
                                <div className={`w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                                    <process.icon className={`w-8 h-8 ${process.iconColor}`} strokeWidth={2.5} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#6c1329] transition-all duration-300">
                                    {process.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {process.description}
                                </p>

                                {/* Decorative Corner Element */}
                                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${process.color} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-300`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA or Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#e3b675]/10 to-[#6c1329]/5 rounded-full border border-[#e3b675]/30">
                        <div className="w-2 h-2 bg-[#6c1329] rounded-full animate-pulse" />
                        <p className="text-slate-700 font-medium">
                            Each step is designed to ensure comprehensive development and parent involvement
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default OurProcess;