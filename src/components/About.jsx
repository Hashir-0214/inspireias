"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, BookOpen } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section className="relative w-full py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-25px);
                    }
                }
                
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-float-slow {
                    animation: float-slow 5s ease-in-out infinite;
                    animation-delay: 0.5s;
                }
            `}</style>
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-100/30 rounded-full blur-[100px]" />

            {/* Floating Educational Elements - Right Side */}
            <div className="absolute right-8 top-20 animate-float">
                <div className="text-6xl transform rotate-12 hover:rotate-45 transition-transform duration-500">
                    ✏️
                </div>
            </div>
            
            <div className="absolute right-16 top-[40%] animate-float-delayed">
                <div className="text-5xl transform -rotate-12 hover:rotate-12 transition-transform duration-500">
                    📚
                </div>
            </div>
            
            <div className="absolute right-4 bottom-32 animate-float-slow">
                <div className="text-5xl transform rotate-6 hover:-rotate-12 transition-transform duration-500">
                    🎓
                </div>
            </div>
            
            <div className="absolute right-20 bottom-[15%] animate-float">
                <div className="text-4xl transform -rotate-6 hover:rotate-6 transition-transform duration-500">
                    📝
                </div>
            </div>

            <div className="absolute right-32 top-[60%] animate-float-delayed">
                <div className="text-3xl transform rotate-12 hover:-rotate-12 transition-transform duration-500">
                    ⭐
                </div>
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
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold uppercase tracking-wide mb-4">
                        About Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Welcome to <span className="text-blue-600">Inspiro IAS Academy</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-slate-700 leading-relaxed">
                                Inspiro IAS Academy is a modern educational initiative dedicated to shaping aspirants through intellectual, cultural, and skill-based development. Our new-age civil service orientation model aims to become a benchmark for excellence—where both students and mentors share a passion for learning and purposeful growth.
                            </p>
                            
                            <p className="text-slate-700 leading-relaxed mt-4">
                                This program is designed to mould aspirants into responsible, aware, and multi-dimensional individuals by instilling a blend of cultural understanding, analytical thinking, empathy, and constructive attitude.
                            </p>
                            
                            <p className="text-slate-700 leading-relaxed mt-4">
                                At Inspiro, training is structured into <strong className="text-slate-900">20 purposeful rounds</strong>, each lasting <strong className="text-slate-900">3 hours</strong>. Each round focuses on a core skill area and emphasizes activity-based learning. The content and flow of these rounds are thoughtfully crafted to ensure deep engagement and meaningful transformation.
                            </p>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            {[
                                { icon: Award, label: "Excellence Focused", color: "text-blue-600" },
                                { icon: Target, label: "Goal Oriented", color: "text-cyan-600" },
                                { icon: Users, label: "Expert Mentors", color: "text-indigo-600" },
                                { icon: BookOpen, label: "Activity Based", color: "text-purple-600" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                                >
                                    <item.icon className={`${item.color} w-6 h-6`} />
                                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Large Image */}
                            <div className="col-span-2 h-80 row-span-2 relative rounded-2xl overflow-hidden shadow-xl group">
                                <Image
                                    src="/assets/school_boys.png"
                                    alt="Students learning"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    width={600}
                                    height={400}
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg z-20">
                                    <p className="text-sm font-semibold text-slate-800">Interactive Learning</p>
                                </div>
                            </div>

                            {/* Small Image 1 */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/assets/iq.png"
                                    alt="Mentorship"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    width={200}
                                    height={400}
                                />
                            </div>

                            {/* Small Image 2 */}
                            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                                 <Image
                                    src="/assets/students.png"
                                    alt="Achievement"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    width={400}
                                    height={192}
                                />
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-30" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl opacity-30" />
                    </motion.div>

                </div>

                {/* Bottom Stats or CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { number: "20", label: "Purposeful Rounds", sublabel: "3 Hours Each" },
                        { number: "100%", label: "Activity Based", sublabel: "Practical Learning" },
                        { number: "Expert", label: "Mentorship", sublabel: "Civil Service Pros" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
                        >
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                            <p className="text-lg font-semibold text-slate-800">{stat.label}</p>
                            <p className="text-sm text-slate-600 mt-1">{stat.sublabel}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;