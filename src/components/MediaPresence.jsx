"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Globe, Zap, Cpu, Leaf, Brain, Target, Lightbulb, Shield } from "lucide-react";

// Backing organizations
const partners = [
    { name: "Cochin Business Club", icon: <Briefcase size={32} /> },
    { name: "Cochin Connect", icon: <Globe size={32} /> },
];

// 21st Century Skills with categorized icons
const skillsData = [
    { text: "Ethics, Integrity & Values", icon: Shield },
    { text: "Leadership & Critical Thinking", icon: Target },
    { text: "AI Fundamentals & Digital Skills", icon: Cpu },
    { text: "Internet of Things & Cyber Safety", icon: Zap },
    { text: "Social & Cultural Awareness", icon: Brain },
    { text: "Financial Literacy", icon: Briefcase },
    { text: "Environmental & Economic Study", icon: Leaf },
    { text: "Adaptability & Soft Skills", icon: Lightbulb },
    { text: "Scientific Awareness", icon: Brain }
];

const MediaPresence = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <section 
            ref={sectionRef}
            className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #6c1329 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <div className="container mx-auto px-6 mb-16 relative z-10">
                {/* Header with staggered animation */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.p 
                        className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-8 px-4 py-2 rounded-full"
                        style={{ 
                            color: '#6c1329',
                            backgroundColor: 'rgba(108, 19, 41, 0.1)'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Proudly Supported By
                    </motion.p>

                    {/* Partners with enhanced hover effects */}
                    <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
                        {partners.map((partner, idx) => (
                            <motion.div 
                                key={idx}
                                className="group cursor-default"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                            >
                                <div className="flex items-center gap-4 relative">
                                    {/* Icon container with sophisticated hover effect */}
                                    <div className="relative">
                                        <div 
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                                            style={{
                                                background: 'linear-gradient(135deg, #6c1329, #e3b675)'
                                            }}
                                        />
                                        <div 
                                            className="relative p-4 bg-white border-2 rounded-2xl group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3"
                                            style={{
                                                borderColor: 'rgba(108, 19, 41, 0.2)'
                                            }}
                                        >
                                            <div 
                                                className="transition-colors duration-300"
                                                style={{
                                                    color: '#6c1329'
                                                }}
                                            >
                                                {partner.icon}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Text with gradient on hover */}
                                    <div className="relative">
                                        <span 
                                            className="text-2xl md:text-3xl font-bold transition-all duration-300 font-serif"
                                            style={{
                                                color: '#6c1329'
                                            }}
                                        >
                                            {partner.name}
                                        </span>
                                        <div 
                                            className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mt-1"
                                            style={{
                                                background: 'linear-gradient(90deg, #6c1329, #e3b675)'
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Skills Ticker Section */}
            <motion.div 
                className="relative w-full"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                {/* Decorative top border */}
                <div 
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #e3b675, transparent)'
                    }}
                />
                
                <div 
                    className="relative py-8 shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #6c1329, #8a1a3a, #6c1329)'
                    }}
                >
                    {/* Animated background grid */}
                    <div className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `linear-gradient(rgba(227, 182, 117, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(227, 182, 117, 0.5) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Gradient fade edges */}
                    <div 
                        className="absolute top-0 left-0 w-40 h-full z-10 pointer-events-none"
                        style={{
                            background: 'linear-gradient(90deg, #6c1329, rgba(108, 19, 41, 0.8), transparent)'
                        }}
                    />
                    <div 
                        className="absolute top-0 right-0 w-40 h-full z-10 pointer-events-none"
                        style={{
                            background: 'linear-gradient(-90deg, #6c1329, rgba(108, 19, 41, 0.8), transparent)'
                        }}
                    />

                    {/* Main ticker content */}
                    <div className="flex overflow-hidden relative">
                        <motion.div
                            className="flex gap-8 items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40,
                            }}
                        >
                            {/* Triple the content for seamless loop */}
                            {[...skillsData, ...skillsData, ...skillsData, ...skillsData].map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div 
                                        key={index} 
                                        className="flex items-center gap-4 px-6 py-3 backdrop-blur-sm rounded-full border transition-all duration-300 group whitespace-nowrap"
                                        style={{
                                            backgroundColor: 'rgba(227, 182, 117, 0.15)',
                                            borderColor: 'rgba(227, 182, 117, 0.3)'
                                        }}
                                    >
                                        {/* Dynamic icon with color variation */}
                                        <div 
                                            className="p-2 rounded-lg transition-all duration-300"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(227, 182, 117, 0.3), rgba(227, 182, 117, 0.15))'
                                            }}
                                        >
                                            <IconComponent 
                                                size={20} 
                                                className="transition-colors"
                                                style={{ color: '#e3b675' }}
                                            />
                                        </div>

                                        {/* Skill text */}
                                        <span className="font-medium text-lg tracking-wide transition-colors" style={{ color: 'white' }}>
                                            {skill.text}
                                        </span>

                                        {/* Separator dot */}
                                        <span 
                                            className="w-2 h-2 rounded-full ml-4 opacity-60"
                                            style={{
                                                background: 'linear-gradient(135deg, #e3b675, #d4a565)'
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Decorative bottom border */}
                <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #e3b675, transparent)'
                    }}
                />
            </motion.div>

            {/* Bottom accent line */}
            <div 
                className="mt-8 max-w-xs mx-auto h-0.5"
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(108, 19, 41, 0.3), transparent)'
                }}
            />
        </section>
    );
};

export default MediaPresence;