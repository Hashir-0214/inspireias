"use client";

import { motion } from "framer-motion";
import { Check, Lightbulb, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section className="py-20 bg-white overflow-hidden" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* --- Left Column: Text Content --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Tagline */}
                        <span className="block text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">
                            Our Philosophy
                        </span>

                        {/* Headline */}
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">
                            A Brand-New Learning <br />
                            <span className="text-blue-600">Experience.</span>
                        </h2>

                        {/* Core Description from Brochure */}
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                Inspiro IAS Academy is a modern educational initiative dedicated to
                                shaping aspirants through intellectual, cultural, and skill-based
                                development[cite: 9].
                            </p>
                            <p>
                                Our new-age civil service orientation model aims to become a
                                benchmark for excellence—where both students and mentors share a
                                passion for learning and purposeful growth[cite: 10].
                            </p>
                        </div>

                        {/* USPs / Highlights */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "20 Purposeful Rounds of Training",
                                "Holistic Development Focus",
                                "Activity-Based Learning",
                                "21st Century Competencies"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <Check size={14} className="text-blue-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-800 font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <a
                                href="#courses"
                                className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-blue-600 pb-1 hover:text-blue-600 transition-colors"
                            >
                                Explore Our Approach
                            </a>
                        </div>
                    </motion.div>

                    {/* --- Right Column: Visuals --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3]">
                            {/* Replace with your actual image path or a relevant Unsplash image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                            <img
                                src="/images/classroom-activity.jpg"
                                alt="Students engaging in activity based learning"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Text on Image */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                                <p className="font-serif text-xl italic">
                                    "Moulding aspirants into responsible, aware, and multi-dimensional individuals."
                                </p>
                            </div>
                        </div>

                        {/* Floating 'Stats' Card 1 - Top Left */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[180px] hidden md:block"
                        >
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                                <Lightbulb className="text-yellow-600" size={20} />
                            </div>
                            <p className="text-xs text-slate-500 font-semibold uppercase">Focus</p>
                            <p className="text-sm font-bold text-slate-900">Critical Thinking & Creativity [cite: 26]</p>
                        </motion.div>

                        {/* Floating 'Stats' Card 2 - Bottom Right */}
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-blue-600 p-5 rounded-xl shadow-xl max-w-[200px] hidden md:block"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="text-white" size={20} />
                                <span className="text-white font-bold text-2xl">20+</span>
                            </div>
                            <p className="text-blue-100 text-xs leading-tight">
                                Activity-Based Rounds to build skills
                            </p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;