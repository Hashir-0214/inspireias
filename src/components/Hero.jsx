"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Star, Brain, Activity, Users, Scale } from "lucide-react";

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
        <section className="relative w-full min-h-[90vh] bg-background flex items-center pt-8 pb-12 overflow-hidden">

            {/* --- Background Decorative Elements --- */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* FIX: Changed grid to flex/centered layout because the 
                    right column (form) is currently commented out. 
                    If you uncomment the form later, revert to: 
                    'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center' 
                */}
                <div className="flex flex-col items-center text-center justify-center gap-12">

                    {/* --- Left Column: Content (Now Centered) --- */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-white space-y-6 max-w-2xl mx-auto"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3.5 py-[6px] rounded-full bg-background/80 border border-foreground/20 text-foreground/80 text-[11px] font-semibold tracking-wider uppercase backdrop-blur-sm"
                        >
                            <Star size={12} className="text-yellow-400 fill-yellow-400 translate-y-[0.5px]" />
                            <span className="leading-none">
                                An Initiative of Cochin Business Club
                            </span>
                        </motion.div>


                        {/* Headline */}
                        <motion.div variants={itemVariants}>
                            <h1 className="text-3xl lg:text-5xl font-sans font-bold uppercase leading-tight">
                                School Level <br />
                                <span className="text-transparent bg-clip-text bg-foreground">
                                    Civil Service
                                </span>{" "}<br />
                                Orientation
                            </h1>
                            {/* FIX: 'text-md' is not a valid class, changed to 'text-lg' */}
                            <p className="mt-4 text-lg text-slate-300 font-light max-w-lg mx-auto">
                                Homegrown with skills! <br />Just what every aspirant needs to <br />
                                master <strong className="text-white font-medium"> 21st Century Competencies</strong>
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

                {/* --- Key Features Cards Section --- */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        {
                            title: "20 Purposeful Rounds",
                            icon: <Brain /> // FIX: Replaced broken unicode with Lucide Icon
                        },
                        {
                            title: "Activity-Based Learning",
                            icon: <Activity /> // FIX: Replaced broken unicode with Lucide Icon
                        },
                        {
                            title: "Expert Mentorship",
                            icon: <Users /> // FIX: Replaced broken unicode with Lucide Icon
                        },
                        {
                            title: "Critical Thinking & Ethics",
                            icon: <Scale /> // FIX: Replaced broken unicode with Lucide Icon
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            // FIX: Added 'items-center' for proper vertical alignment of icon and text
                            className="group flex items-center gap-5 relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-background/50 transition-all duration-300 text-left"
                        >
                            {/* Icon */}
                            <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300 text-white/80">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-md font-bold text-gray-200 group-hover:text-foreground transition-colors">
                                {feature.title}
                            </h3>

                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-background/80 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="w-full pt-8 text-center">
                    <p className="italic text-slate-400 text-sm mx-auto">
                        "A benchmark for excellence where students and mentors share a passion for learning."
                    </p>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;