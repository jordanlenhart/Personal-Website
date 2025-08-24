import Kazuma from '../assets/Kazuma.png'

export default function Hero() {
    return (
        <section id="hero" className="h-screen snap-center flex justify-center items-center text-center bg-[#0D1B2A] text-white gap-10">
            <img src={Kazuma} alt="Jordan PFP" className='w-50 h-50 rounded-4xl'></img>
            <div

                className="flex flex-col items-center gap-1 w-[75em]"
            >
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
            </div>
        </section>
    );
}