"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star } from "lucide-react";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center pt-8 pb-12 overflow-hidden">

            {/* --- Background Decorative Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container  max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* --- Left Column: Content --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white space-y-6 max-w-xl"
                    >
                        {/* Trust Badge */}
                        <motion.div variants={itemVariants} className="inline-flex font-nunito items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-200 text-xs font-semibold tracking-wide uppercase">
                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                            An Initiative of Cochin Business Club
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-2xl lg:text-4xl font-sans font-bold uppercase leading-tight">
                                School Level <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Civil Service
                                </span>{" "}
                                Orientation
                            </h1>
                            <p className="mt-4 text-md text-slate-300 font-light max-w-lg">
                                Homegrown with skills!  <br />Just what every aspirant needs <br />
                                master <strong className="text-white font-medium"> 21st Century Competencies</strong>
                            </p>
                        </motion.div>

                        {/* Key Features List */}
                        <motion.ul variants={itemVariants} className="space-y-4 pt-2">
                            {[
                                "20 Purposeful Rounds of Training",
                                "Activity-Based Learning Approach",
                                "Mentorship by Civil Service Experts",
                                "Focus on Critical Thinking & Ethics"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                                    <span className="text-slate-200 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </motion.ul>

                        {/* Quote / Credibility */}
                        <motion.div variants={itemVariants} className="pt-6 border-t border-slate-800">
                            <p className="italic text-slate-400 text-sm">
                                "A benchmark for excellence where students and mentors share a passion for learning."
                            </p>
                        </motion.div>
                    </motion.div>

                    {/*
                    --- Right Column: Registration Form ---
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative z-20">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-slate-900">Enquire Now</h3>
                            <p className="text-slate-500 text-sm">Fill out the form to get a callback from our mentors.</p>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="parentName" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Parent Name</label>
                                <input
                                    type="text"
                                    id="parentName"
                                    placeholder="Enter parent's name"
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+91"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="studentName" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Student Name</label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        placeholder="Enter name"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="class" className="block text-xs font-semibold text-slate-700 uppercase mb-1">Class / Grade</label>
                                <div className="relative">
                                    <select
                                        id="class"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                                    >
                                        <option value="" disabled selected>Select current class</option>
                                        <option value="5">Class 5 (Level 01)</option>
                                        <option value="6">Class 6 (Level 01)</option>
                                        <option value="7">Class 7 (Level 01)</option>
                                        <option value="8">Class 8 (Level 02)</option>
                                        <option value="9">Class 9 (Level 02)</option>
                                        <option value="10">Class 10 (Level 02)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                Join the Program
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-xs text-slate-400">
                                By submitting, you agree to our privacy policy.
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-4 -right-4 w-full h-full border-2 border-white/20 rounded-2xl -z-10 hidden lg:block" />
                </motion.div>

                   */}
                </div>
            </div>
        </section >
    );
};

export default Hero;