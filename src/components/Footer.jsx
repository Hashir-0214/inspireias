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

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 font-sans">
            {/* --- Top Section: Main Content --- */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Column 1: Brand & Initiative */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-serif font-bold text-white tracking-tight">
                                INSPIRO<span className="text-blue-600">.</span>
                            </h2>
                            <span className="text-[0.65rem] font-medium tracking-widest text-slate-500 uppercase mt-1">
                                IAS Academy
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            A modern educational initiative dedicated to shaping aspirants through intellectual, cultural, and skill-based development.
                        </p>
                        <div className="pt-4 border-t border-slate-800">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                An Initiative Of
                            </p>
                            <p className="text-sm text-slate-300">
                                Cochin Business Club & <br /> Cochin Connect
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About Us', 'Our Process', 'Faculty', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                                        className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                                    >
                                        <ArrowRight size={14} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></span>
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
                                <span>
                                    OS 3 GCDA Complex,<br />
                                    Marine Drive, Cochin,<br />
                                    Ernakulam
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-blue-500 shrink-0" size={18} />
                                <a href="tel:+919846123456" className="hover:text-white transition-colors">
                                    +91 9846 123 456
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-blue-500 shrink-0" size={18} />
                                <a href="mailto:info@inspiroias.com" className="hover:text-white transition-colors">
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
                                    className="bg-slate-900 p-2 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Footer Bottom Bar --- */}
            <footer className="w-full bg-slate-950 border-t border-slate-900">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4 text-xs text-slate-600">

                    {/* Top Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-center md:text-left">
                            © {currentYear} Inspiro IAS Academy. All Rights Reserved.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="/privacy-policy"
                                className="hover:text-slate-400 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="hover:text-slate-400 transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <p className="text-center text-[11px] text-slate-500">
                        Developed by <span className="font-medium text-slate-400">Hashir Kalathil</span>
                    </p>

                </div>
            </footer>

        </footer>
    );
};

export default Footer;