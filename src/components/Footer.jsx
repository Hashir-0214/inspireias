"use client";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    ArrowRight
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-slate-300 border-t font-sans" style={{ backgroundColor: '#6c1329', borderColor: 'rgba(227, 182, 117, 0.2)' }}>
            {/* --- Top Section: Main Content --- */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Column 1: Brand & Initiative */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <Image src="/logo.png" alt="INSPIRO Logo" width={150} height={50} />
                        </div>
                        <p className="text-sm leading-relaxed text-slate-300">
                            A modern educational initiative dedicated to shaping aspirants through intellectual, cultural, and skill-based development.
                        </p>
                        <div className="pt-4 border-t" style={{ borderColor: 'rgba(227, 182, 117, 0.3)' }}>
                            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(227, 182, 117, 0.7)' }}>
                                An Initiative Of
                            </p>
                            <p className="text-sm text-white">
                                Cochin Business Club & <br /> Cochin Connect
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: '#e3b675' }}></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About Us', 'Our Process', 'Faculty', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="flex items-center gap-2 transition-colors group hover:text-white"
                                        style={{ 
                                            color: 'rgba(255, 255, 255, 0.8)'
                                        }}
                                    >
                                        <ArrowRight 
                                            size={14} 
                                            className="transition-colors" 
                                            style={{ color: '#e3b675' }}
                                        />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: '#e3b675' }}></span>
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 shrink-0" size={18} style={{ color: '#e3b675' }} />
                                <span className="text-slate-200">
                                    OS 3 GCDA Complex,<br />
                                    Marine Drive, Cochin,<br />
                                    Ernakulam
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0" size={18} style={{ color: '#e3b675' }} />
                                <a href="tel:+919846123456" className="text-slate-200 hover:text-white transition-colors">
                                    +91 9846 123 456
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0" size={18} style={{ color: '#e3b675' }} />
                                <a href="mailto:info@inspiroias.com" className="text-slate-200 hover:text-white transition-colors">
                                    info@inspiroias.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                                    style={{ 
                                        backgroundColor: 'rgba(227, 182, 117, 0.15)',
                                        color: '#e3b675'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#e3b675';
                                        e.currentTarget.style.color = '#6c1329';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(227, 182, 117, 0.15)';
                                        e.currentTarget.style.color = '#e3b675';
                                    }}
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Footer Bottom Bar --- */}
            <div className="w-full border-t" style={{ backgroundColor: '#5a0f21', borderColor: 'rgba(227, 182, 117, 0.2)' }}>
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>

                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-center md:text-left">
                            © {currentYear} Inspiro IAS Academy. All Rights Reserved.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="/privacy-policy"
                                className="hover:text-white transition-colors"
                                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="hover:text-white transition-colors"
                                style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <p className="text-center text-[11px]" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                        Developed by <span className="font-medium" style={{ color: '#e3b675' }}>Hashir Kalathil</span>
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;