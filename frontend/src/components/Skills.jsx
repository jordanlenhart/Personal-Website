import { FaReact, FaNodeJs, FaJs, FaGitAlt } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import { SiSqlite, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-500" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-green-800" /> },
  ];

  return (
    <section
      id="skills"
      className="h-screen snap-center flex flex-col justify-center items-center text-center bg-[#003049]"
    >
      <h2 className="text-5xl font-bold mb-10 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className= "flex flex-col items-center p-6 rounded-2xl bg-white hover:scale-115"
          >
            <div className="text-6xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
