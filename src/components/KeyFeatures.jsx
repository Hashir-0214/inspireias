"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Users, Scale } from "lucide-react";

export default function KeyFeatures() {
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="relative w-full bg-white flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden px-6">

            {/* Grid Section */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {[
                    {
                        title: "20 Purposeful Rounds",
                        icon: <Brain />
                    },
                    {
                        title: "Activity-Based Learning",
                        icon: <Activity />
                    },
                    {
                        title: "Expert Mentorship",
                        icon: <Users />
                    },
                    {
                        title: "Critical Thinking & Ethics",
                        icon: <Scale />
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        className="group flex items-center gap-5 relative bg-[#681028] backdrop-blur-sm border border-[#681028] rounded-xl p-4 hover:bg-[#3a0412] hover:border-[#3a0412]/30 transition-all duration-300 text-left"
                    >
                        {/* Icon */}
                        <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300 text-[#deb971] opacity-90">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-md font-bold text-gray-200 group-hover:text-white transition-colors">
                            {feature.title}
                        </h3>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#deb971]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div 
                variants={itemVariants} 
                initial="hidden"
                animate="visible"
                className="w-full pt-16 text-center"
            >
                <p className="italic text-slate-900 text-sm md:text-base mx-auto tracking-wide">
                    "A benchmark for excellence where students and mentors share a passion for learning."
                </p>
            </motion.div>
            
        </section>
    );
}