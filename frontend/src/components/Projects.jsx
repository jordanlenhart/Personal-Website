import SceneItSc from "../assets/SceneItSc.png";
import EPLSc from "../assets/EPLSc.png"

export default function Projects() {
  const projects = [
    {
      title: "SceneIt",
      desc: "SceneIt is a social TV tracking app that lets users watch, rate, and share their favorite shows. Users can keep track of what they’ve watched, connect with other fans, and discover new content based on community ratings.",
      link: "https://github.com/jordanlenhart/SceneIt",
      demo: "https://portfolio-4ybe.vercel.app/",
      screenshot: SceneItSc
    },
    {
      title: "English Premier League Viewer",
      desc: "A sleek web app that fetches and displays all 20 English Premier League teams from the 2024-25 season using TheSportsDB API. Click on any team to view detailed information.",
      link: "https://github.com/jordanlenhart/English-Premier-League-Viewer",
      demo: "",
      screenshot: EPLSc,
    },
    {
      title: "TBA: Jordan's Tools",
      desc: "IN PROGRESS",
      link: "",
      demo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen snap-center flex flex-col justify-center items-center px-6 sm:px-12 lg:px-20 pt-20 md:pt-0"
    >
      <h2 className="text-white text-5xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition w-full"
          >
            {/* Image or placeholder */}
            {p.screenshot ? (
              <img
                src={p.screenshot}
                alt={p.title}
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
            ) : (
              <div className="w-full h-64 bg-gray-100 rounded-lg mb-3" />
            )}


            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>
            <div className="flex flex-col gap-2">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Repo ➡
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo ➡
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
