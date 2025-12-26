"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

// PLACEHOLDER DATA: Replace with real faculty members
const mentors = [
    {
        id: 1,
        name: "Dr. Arvind Kumar",
        role: "Former IAS Officer",
        image: "/images/mentor-1.jpg", // Replace with real path
        bio: "With over 30 years of administrative experience, he guides students on ethics and decision making."
    },
    {
        id: 2,
        name: "Prof. Sarah Joseph",
        role: "Child Psychologist",
        image: "/images/mentor-2.jpg",
        bio: "Specializes in developmental psychology, helping students build confidence and emotional intelligence."
    },
    {
        id: 3,
        name: "Mr. Rajeev Menon",
        role: "Senior Civil Servant (Retd.)",
        image: "/images/mentor-3.jpg",
        bio: "An expert in public administration who crafts our leadership and critical thinking modules."
    },
    {
        id: 4,
        name: "Dr. Emily Thomas",
        role: "Educationist & Author",
        image: "/images/mentor-4.jpg",
        bio: "Focuses on 21st-century skill acquisition and innovative teaching methodologies."
    },
    {
        id: 5,
        name: "Col. Vishnu Das",
        role: "Defense Veteran",
        image: "/images/mentor-5.jpg",
        bio: "Instilling discipline, patriotism, and strategic thinking in young minds."
    },
];

const Mentors = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        // Calculate the scrollable width
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-20 bg-slate-50 overflow-hidden" id="faculty">
            <div className="container mx-auto px-6">

                {/* --- Section Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                            Our Mentors
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                            Guided by the <span className="text-blue-600">Best Minds</span>
                        </h2>
                        <p className="mt-4 text-slate-600">
                            Our sessions are led by experts who share a passion for learning and purposeful growth, ensuring your child receives guidance from real-world leaders.
                        </p>
                    </div>

                    {/* Visual Hint for Dragging */}
                    <div className="hidden md:flex gap-2 text-slate-400 text-sm font-medium items-center">
                        <ChevronLeft size={16} />
                        <span>Drag to Explore</span>
                        <ChevronRight size={16} />
                    </div>
                </div>

                {/* --- Draggable Carousel --- */}
                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 md:gap-8"
                    >
                        {mentors.map((mentor) => (
                            <motion.div
                                key={mentor.id}
                                className="min-w-[300px] md:min-w-[350px] bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col items-center text-center group"
                            >
                                {/* Image Wrapper */}
                                <div className="relative w-32 h-32 mb-6">
                                    {/* Decorative Ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-spin-slow" />
                                    <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-200">
                                        {/* Using a placeholder generic avatar if image fails. 
                        In production, use <Image /> from next/image 
                     */}
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${mentor.name}&background=0D8ABC&color=fff`}
                                            alt={mentor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                                        <Quote size={14} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {mentor.name}
                                </h3>
                                <p className="text-blue-500 font-medium text-sm mb-4 uppercase tracking-wide">
                                    {mentor.role}
                                </p>

                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    "{mentor.bio}"
                                </p>

                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Mentors;