"use client";

import {
    BrainCircuit,
    Target,
    Users,
    Layers,
    FileCheck,
    Globe2
} from "lucide-react";
import { motion } from "framer-motion";

const featuresData = [
    {
        title: "Beyond School Curriculum",
        description: "Designed to enrich and go beyond traditional academics, giving students a head start in life skills.",
        icon: <Globe2 size={32} />,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Hands-on Learning",
        description: "A dynamic approach where students learn through experience, practical tasks, and guided exploration.",
        icon: <Target size={32} />,
        color: "bg-green-100 text-green-600",
    },
    {
        title: "Holistic Development",
        description: "Thoughtfully structured rounds that blend cultural understanding, empathy, and constructive attitudes.",
        icon: <Layers size={32} />,
        color: "bg-purple-100 text-purple-600",
    },
    {
        title: "Leadership & Confidence",
        description: "Activities specifically crafted to strengthen public speaking, team management, and self-confidence.",
        icon: <Users size={32} />,
        color: "bg-orange-100 text-orange-600",
    },
    {
        title: "Critical Thinking",
        description: "Emphasis on analytical reasoning and awareness to help students form balanced, unbiased worldviews.",
        icon: <BrainCircuit size={32} />,
        color: "bg-pink-100 text-pink-600",
    },
    {
        title: "Regular Evaluations",
        description: "Continuous assessment with regular updates shared with parents to track progress and improvement.",
        icon: <FileCheck size={32} />,
        color: "bg-cyan-100 text-cyan-600",
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-slate-50" id="features">
            <div className="container mx-auto px-6">

                {/* --- Section Header --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
                    >
                        Key Features of the Program
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg"
                    >
                        Our program is designed to enrich and go beyond the traditional school curriculum, focusing on skills that matter for the future.
                    </motion.p>
                </div>

                {/* --- Features Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Features;