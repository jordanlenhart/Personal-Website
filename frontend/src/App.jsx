import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";


export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 h-screen snap-y snap-mandatory overflow-y-scroll">
      <Nav />
      <main className="">
        <Hero />
        <Skills />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}