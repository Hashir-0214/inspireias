import About from "@/components/About";
import ActivityLearning from "@/components/ActivityBasedLearning";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import FeelTheChange from "@/components/FeelTheChange";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MediaPresence from "@/components/MediaPresence";
import Mentors from "@/components/Mentors";
import OurProcess from "@/components/OurProcess";
import CenturySkills from "@/components/Skills";
import WhyStartEarly from "@/components/WhyStartEarly";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <OurProcess />
      <Courses />
      <ActivityLearning />
      <FeelTheChange />
      <Features />
      <CenturySkills />
      {/* <Mentors /> */}
      <MediaPresence />
    </div>
  );
}
