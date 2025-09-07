import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import FadeSection from "./components/FadeEffect";

export default function App() {
  return (
    <div className="bg-[#0D1B2A] font-sans text-gray-900 h-screen overflow-y-scroll scroll-smooth">
      <Nav />
      <main>
        <FadeSection>
          <Hero />
        </FadeSection>
        <FadeSection>
          <Skills />
        </FadeSection>
        <FadeSection>
          <Work />
        </FadeSection>
        <FadeSection>
          <Projects />
        </FadeSection>
        <FadeSection>
          <Contact />
        </FadeSection>
      </main>
    </div>
  );
}
