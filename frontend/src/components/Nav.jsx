import { useState, useEffect } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-10 pt-2 transition-all duration-500 ease-in-out ${scrolled
          ? "bg-[#1b263b/50] backdrop-blur-md shadow-lg"
          : "bg-transparent"
        }`}
    >

      <ul
        className="flex justify-center items-center font-semibold 
                   text-lg sm:text-xl md:text-xl lg:text-xl 
                   gap-4 sm:gap-6 md:gap-10 lg:gap-35 py-3 md:py-4 px-2 sm:px-6 text-white"
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition hover:text-blue-500 ${activeSection === item.id ? "text-blue-500" : ""
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
