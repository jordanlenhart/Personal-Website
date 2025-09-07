import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiSqlite, SiTypescript, SiTailwindcss  } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-green-800" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen snap-center flex flex-col justify-center items-center text-center pt-20 md:pt-0"
    >
      <h2 className="text-5xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
          key={index}
          className="flex flex-col items-center p-6 rounded-2xl bg-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-r "
        >
          <div className="text-6xl mb-3 transition-transform duration-300 hover:scale-125 hover:text-blue-500">
            {skill.icon}
          </div>
          <p className="text-lg font-semibold">{skill.name}</p>
        </div>
        
        
        ))}
      </div>
    </section>
  );
}
