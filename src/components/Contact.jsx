"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2 } from "lucide-react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare WhatsApp message
        const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Phone:* ${formState.phone}%0A*Message:* ${formState.message}`;

        // Open WhatsApp
        window.open(`https://wa.me/919747558313?text=${whatsappMessage}`, '_blank');

        // Simulate delay and show success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            details: "OS 3 GCDA Complex, Marine Drive",
            subDetails: "Cochin, Ernakulam, Kerala",
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+91 97475 58313",
            subDetails: "Mon-Sat from 9am to 6pm",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "inspiroiasacademy@gmail.com",
            subDetails: "We respond within 24 hours",
        },
    ];

    return (
        <section id="contact" className="relative py-12 md:py-24 bg-white overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e3b675]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e3b675]/20 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="bg-[#6c1329] rounded-3xl shadow-2xl p-6 md:p-12 lg:p-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <span className="text-[#e3b675] font-bold tracking-widest text-xs uppercase mb-2 block">
                            Contact Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                            Have questions about the curriculum or admission process?
                            Our team is here to help you start your journey.
                        </p>
                        <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#e3b675] to-white mx-auto rounded-full mt-6" />
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                        {/* Left Side: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6 md:space-y-8 order-2 lg:order-1"
                        >
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-5 p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#e3b675]/50 transition-all duration-300 group hover:bg-white/10"
                                >
                                    <div className="p-3 bg-[#e3b675]/20 rounded-lg text-[#e3b675] group-hover:bg-[#e3b675]/30 transition-colors shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-200 font-medium break-all md:break-normal">{item.details}</p>
                                        <p className="text-slate-400 text-sm mt-1">
                                            {item.subDetails}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Google Maps Embed */}
                            <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 hover:border-[#e3b675]/50 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5636048684984!2d76.2753896!3d9.9701193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d5000000001%3A0x123456789abcdef!2sMarine%20Drive%2C%20Kochi!5e0!3m2!1sen!2sin!4v1614761234567!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Right Side: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl order-1 lg:order-2"
                        >
                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                    <div className="w-16 h-16 bg-[#e3b675]/20 text-[#e3b675] rounded-full flex items-center justify-center mb-6">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-300 mb-8">
                                        Your message has been sent via WhatsApp. We will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-[#e3b675] hover:text-white font-semibold transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                                                Full Name <span className="text-[#e3b675]">*</span>
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formState.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e3b675] focus:ring-1 focus:ring-[#e3b675]/50 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-semibold text-slate-200">
                                                Phone Number <span className="text-[#e3b675]">*</span>
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formState.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e3b675] focus:ring-1 focus:ring-[#e3b675]/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                                            Email Address <span className="text-[#e3b675]">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e3b675] focus:ring-1 focus:ring-[#e3b675]/50 transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                                            Your Message <span className="text-[#e3b675]">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            name="message"
                                            value={formState.message}
                                            onChange={handleChange}
                                            placeholder="Type your message here..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#e3b675] focus:ring-1 focus:ring-[#e3b675]/50 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-[#e3b675] to-[#d4a665] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#e3b675]/20 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Send via WhatsApp
                                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;