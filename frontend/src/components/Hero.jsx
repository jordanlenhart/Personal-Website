import Kazuma from '../assets/Kazuma.png'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import Typewriter from './TypewriterTitle';

export default function Hero() {
    return (
        <section
    id="hero"
    className="h-screen snap-center flex flex-col md:flex-row justify-center items-center text-center md:text-left bg-[#0D1B2A] text-white md:gap-50 px-4 md:px-20"
>

<img
    src={Kazuma}
    alt="Jordan PFP"
    className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-3xl object-cover"
/>

<div className="flex flex-col items-center md:items-center gap-4">

                <h1 className="text-8xl font-bold mb-4">Jordan Lenhart</h1>
                <Typewriter
                className="font-light text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-center md:text-left"
                    texts={[
                        "Software Developer",
                        "Full Stack Developer",
                        "Web Developer",
                        "Pro Google Searcher",
                        "React Enthusiast",
                        "Merge Conflict Expert",
                        '"Did you npm install yet"'

                    ]}
                />
                <a
                    href="#projects"
                    className="inline-block px-6 py-3 bg-blue-500 text-xl rounded-xl shadow hover:bg-blue-600 transition-all duration-300 transform hover:scale-115"
                >
                    View My Work
                </a>

                {/* Social Media Icons */}
                <div className="flex gap-6 mt-6 text-7xl">
                    <a
                        href="https://www.linkedin.com/in/jordanlenhart1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-all"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/jordanlenhart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-all"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://discordapp.com/users/bofa2x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-all"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-red-400 transition-all"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}
