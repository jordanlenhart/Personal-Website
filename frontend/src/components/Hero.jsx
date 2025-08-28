import Kazuma from '../assets/Kazuma.png'
import { FaLinkedin, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="hero"
            className="h-screen snap-center flex justify-center items-center text-center bg-[#0D1B2A] text-white gap-10"
        >
            <img
                src={Kazuma}
                alt="Jordan PFP"
                className="w-[25em] h-[25em] rounded-4xl"
            />
            <div className="flex flex-col items-center gap-4 w-[75em]">
                <h1 className="text-8xl font-bold mb-4">Jordan Lenhart</h1>
                <p className="font-light text-3xl mb-6">
                    Software Developer | Expert Google Searcher
                </p>
                <a
                    href="#projects"
                    className="inline-block px-6 py-3 bg-blue-500 text-xl rounded-xl shadow hover:bg-blue-600"
                >
                    View My Work
                </a>

                {/* Social Media Icons */}
                <div className="flex gap-6 mt-6 text-7xl">
                    <a
                        href="https://www.linkedin.com/in/jordanlenhart1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/jordanlenhart"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://discordapp.com/users/bofa2x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-indigo-400 transition-colors"
                    >
                        <FaDiscord />
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-red-400 transition-colors"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </section>
    );
}
