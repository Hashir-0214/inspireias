"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            // Trigger effect slightly earlier to smooth the transition
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Our Process", href: "#process" },
        { name: "Levels", href: "#levels" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div className="relative w-full bg-white text-xs py-2 hidden md:block border-b border-white/5 z-50">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Left section */}
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <MapPin size={14} className="text-blue-500" />
                            OS 3 GCDA Complex, Marine Drive, Cochin
                        </span>

                        <span className="hidden lg:flex items-center gap-2 opacity-60">
                            An initiative of Cochin Business Club
                        </span>
                    </div>

                    {/* Right section */}
                    <a
                        href="tel:+911234567890"
                        className="flex items-center gap-2 hover:text-white transition-colors"
                    >
                        <Phone size={14} />
                        +91 9846 123 456
                    </a>

                </div>
            </div>


            {/* --- Floating "Pill" Navbar --- */}
            <div
                className={`fixed left-0 right-0 z-40 flex justify-center transition-all duration-500 ease-in-out ${isScrolled ? "top-2" : "top-2 md:top-9"
                    }`}
            >


                <header
                    className={`relative z-10 w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-full border ${isScrolled
                        ? "bg-slate-900/90 backdrop-blur-md shadow-xl border-white/10"
                        : "bg-slate-900 shadow-2xl border-white/10"
                        }`}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex flex-col group leading-none">
                        <h1 className="text-2xl font-serif font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                            INSPIRO<span className="text-blue-500">.</span>
                        </h1>
                        <span className="text-[0.6rem] font-medium tracking-widest text-slate-400 uppercase group-hover:text-slate-300 transition-colors">
                            IAS Academy
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 group"
                            >
                                {link.name}
                                {/* Dot Indicator for Hover */}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side: CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* CTA Button */}
                        <Link
                            href="#register"
                            className="hidden md:block px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-blue-900/50 hover:bg-blue-500 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5"
                        >
                            Enroll Now
                        </Link>

                        {/* Mobile Menu Button (White Icon now) */}
                        <button
                            className="md:hidden text-slate-300 hover:text-white p-1"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={24} strokeWidth={1.5} />
                        </button>
                    </div>
                </header>
            </div>

            {/* --- Mobile Drawer (Framer Motion) --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900 z-50 shadow-2xl p-6 flex flex-col justify-between border-l border-white/10"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-10">
                                    <div>
                                        <h2 className="text-xl font-bold font-nunito text-white">INSPIRO.</h2>
                                        <p className="text-xs text-slate-400">School Level Civil Service</p>
                                    </div>
                                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-red-400 transition-colors">
                                        <X size={24} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-lg font-medium text-slate-300 py-3 border-b border-white/5 flex justify-between items-center hover:text-blue-400 transition-colors"
                                        >
                                            {link.name}
                                            <ChevronRight size={16} className="text-slate-600" />
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="space-y-4">
                                <Link
                                    href="#register"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg active:scale-95 transition-transform"
                                >
                                    Enroll Now
                                </Link>
                                <div className="text-xs text-slate-500 text-center leading-relaxed">
                                    OS 3 GCDA Complex, Marine Drive <br />
                                    Cochin, Ernakulam
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;