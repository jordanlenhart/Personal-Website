import { SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiSupabase, SiNextdotjs, SiNodedotjs, SiPostgresql } from "react-icons/si";


export default function Work() {
  const workExperiences = [
    {
      title: "Web Development Fellow",
      company: "The Knowledge House",
      date: "Jan 2025 - Present",
      desc: "Completed 400+ hours of hands-on training in full-stack web development, focusing on JavaScript, React, Node.js, and SQL.",
      tech: ["javascript", "react", "nodejs", "sql", "tailwind", "supabase"],
    },
    {
      title: "Family and Business Services Technician",
      company: "Orange County Department of Education",
      date: "April 2024 - Present",
      desc: "Partnered with public and private organizations to deliver digital solutions and user-centered services.",
      tech: ["javascript", "sql"],
    },
    {
      title: "Prometheus Contributor",
      company: "Prometheus",
      date: "August 2025 - Present",
      desc: "TBA: In Progress",
      tech: [],
    },
  ];

  // Map tech names to react-icons components
  const techIcons = {
    javascript: <SiJavascript size={24} color="#f7df1e" />,
    react: <SiReact size={24} color="#61dafb" />,
    nodejs: <SiNodedotjs size={24} color="#68a063" />, // correct name
    sql: <SiPostgresql size={24} color="#00758f" />,
    tailwind: <SiTailwindcss size={24} color="#38bdf8" />,
    supabase: <SiSupabase size={24} color ="4CAF50"/>
  };
  

  return (
    <section id="work" className="bg-[#1d3557] min-h-screen snap-center flex flex-col justify-center items-center px-6 py-12">
      <h2 className="text-white text-5xl font-bold text-center mb-16">Work</h2>

      <div className="relative w-full max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-400"></div>

        {workExperiences.map((work, i) => (
          <div key={i} className="mb-10 ml-10 relative">
            {/* Card */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition w-full">
              <h3 className="font-semibold text-xl mb-1">{work.title}</h3>
              <p className="text-gray-500 italic mb-2">
                {work.company} {work.date && `• ${work.date}`}
              </p>
              <p className="text-gray-600 mb-3">{work.desc}</p>

              {/* Technologies Used */}
              {work.tech.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-3">
                    {work.tech.map((t, idx) => (
                      <div key={idx} title={t} className="hover:scale-120 flex items-center justify-center">
                        {techIcons[t]}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
