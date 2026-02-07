"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, ChevronRight, Mail } from "lucide-react";
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
        { name: "About", href: "/about" },
        { name: "Our Process", href: "/#process" },
        { name: "Levels", href: "/#levels" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <>
            {/* Top Bar - Dark & Subtle */}
            <div className={`relative w-full z-50 text-[10px] md:text-xs py-2 transition-colors duration-300 hidden md:block border-b border-white/5 bg-[#681028] text-white/70`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Left section */}
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                            <MapPin size={12} className="text-[#d6a45e]" />
                            OS 3 GCDA Complex, Marine Drive, Cochin
                        </span>

                        <span className="hidden lg:flex items-center gap-2 opacity-60">
                            An initiative of Cochin Business Club
                        </span>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:info@inspiro.com"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <Mail size={12} className="text-[#d6a45e]" />
                            info@inspiro.com
                        </a>
                        <a
                            href="tel:+919747558313"
                            className="flex items-center gap-2 hover:text-white transition-colors font-medium"
                        >
                            <Phone size={12} className="text-[#d6a45e]" />
                            +91 9747 558 313
                        </a>
                    </div>

                </div>
            </div>


            {/* --- Floating "Pill" Navbar --- */}
            <div
                className={`fixed left-0 right-0 z-40 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "top-2" : "top-4 md:top-14"
                    }`}
            >
                <header
                    className={`relative z-10 w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 transition-all duration-300 rounded-full border ${isScrolled
                        ? "bg-[#3a0412]/80 backdrop-blur-xl shadow-lg shadow-black/20 border-white/10"
                        : "bg-[#3a0412]/40 backdrop-blur-md border-white/5"
                        }`}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex flex-col group leading-none ml-6">
                        <img src="/logo.png" alt="INSPIRO Logo" className="h-8 w-auto" />
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
                                {/* Gold Underline for Hover */}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#d6a45e] group-hover:w-full transition-all duration-300 ease-out" />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side: CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        {/* CTA Button */}
                        <Link
                            href="#levels"
                            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#d6a45e] to-[#b88642] text-white text-sm font-semibold rounded-full shadow-lg shadow-[#d6a45e]/20 hover:shadow-[#d6a45e]/40 hover:scale-[1.02] transition-all duration-300"
                        >
                            Enroll Now
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-slate-200 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
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
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#2a030d] text-white z-50 shadow-2xl p-6 flex flex-col justify-between border-l border-white/10"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-10 pl-2">
                                    <span className="text-xl font-bold text-white tracking-widest flex items-center gap-1">
                                        INSPIRO
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#d6a45e] inline-block mb-1"></span>
                                    </span>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group text-lg font-light text-slate-200 py-4 px-2 border-b border-white/5 flex justify-between items-center hover:text-[#d6a45e] hover:bg-white/5 rounded-lg transition-all"
                                        >
                                            {link.name}
                                            <ChevronRight size={16} className="text-slate-600 group-hover:text-[#d6a45e] transition-colors" />
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            <div className="space-y-6 pb-4">
                                <Link
                                    href="#levels"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center py-4 bg-gradient-to-r from-[#d6a45e] to-[#b88642] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
                                >
                                    Enroll Now
                                </Link>
                                <div className="text-xs text-slate-500 text-center leading-relaxed flex flex-col items-center gap-3 pt-4 border-t border-white/5">
                                    <span className="flex items-center gap-2">
                                        <MapPin size={12} className="text-[#d6a45e]" />
                                        Marine Drive, Cochin
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Phone size={12} className="text-[#d6a45e]" />
                                        +91 9747 558 313
                                    </span>
                                    <span className="opacity-40 mt-2">© 2024 Inspiro</span>
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