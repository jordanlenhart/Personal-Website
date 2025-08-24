import { useState, useEffect } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("hero");

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

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-[#1B263B] shadow z-10 text-white">
      <ul className="flex justify-center space-x-8 py-4 font-semibold text-xl gap-20">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`hover:text-blue-500 transition ${
                activeSection === item.id ? "text-blue-500" : ""
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
