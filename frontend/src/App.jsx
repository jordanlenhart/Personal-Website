import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  return (
    <div className="bg-[#0D1B2A] font-sans text-gray-900 h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
