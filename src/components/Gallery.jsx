"use client";

import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Placeholder images sourced from Unsplash to match your PDF's themes
// (Robotics, Classroom Interaction, Sports, Public Speaking)
const galleryItems = [
    {
        id: 1,
        title: "Science Through Experiments",
        category: "Innovation",
        size: "large", // Spans 2 cols
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop",
        description: "Hands-on robotics and science workshops."
    },
    {
        id: 2,
        title: "Interactive Classrooms",
        category: "Learning",
        size: "small",
        image: "https://images.unsplash.com/photo-1544531320-dd40e3a2e643?q=80&w=1000&auto=format&fit=crop",
        description: "Mentors guiding students in debates."
    },
    {
        id: 3,
        title: "Leadership Building",
        category: "Soft Skills",
        size: "small",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=1000&auto=format&fit=crop",
        description: "Group discussions and public speaking."
    },
    {
        id: 4,
        title: "Physical Activity",
        category: "Sports",
        size: "tall", // Spans 2 rows vertically
        image: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1000&auto=format&fit=crop",
        description: "Outdoor activities for team building."
    },
    {
        id: 5,
        title: "Creative Arts",
        category: "Creativity",
        size: "small",
        image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1000&auto=format&fit=crop",
        description: "Fostering imagination and innovation."
    },
];

const Gallery = () => {
    return (
        <section className="py-20 bg-white" id="gallery">
            <div className="container mx-auto px-6">

                {/* --- Section Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">
                            Our Gallery
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                            Moments of <span className="text-blue-600">Transformation</span>
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
                        View All Photos <ArrowUpRight size={18} />
                    </a>
                </div>

                {/* --- Bento Grid Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${item.size === "large" ? "md:col-span-2 md:row-span-1" :
                                    item.size === "tall" ? "md:col-span-1 md:row-span-2" :
                                        "md:col-span-1 md:row-span-1"
                                }`}
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">

                                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {item.category}
                                </span>

                                <h3 className="text-white font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {item.title}
                                </h3>

                                <p className="text-slate-300 text-sm mt-2 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                                    {item.description}
                                </p>

                                {/* Floating Action Icon */}
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                                    <Plus size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 md:hidden text-center">
                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-lg text-slate-700 font-semibold">
                        View All Photos <ArrowUpRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Gallery;