import About from "@/components/About";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MediaPresence from "@/components/MediaPresence";
import Mentors from "@/components/Mentors";
import WhyStartEarly from "@/components/WhyStartEarly";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <WhyStartEarly />
      <Mentors />
      <MediaPresence />
      <Courses />
      <Gallery />
    </div>
  );
}
