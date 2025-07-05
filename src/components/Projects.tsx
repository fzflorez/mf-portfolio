import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div
      className=" max-w-6xl w-full mx-auto font-grotesk px-4 xl:px-0 group"
      data-aos="fade-up"
    >
      <h2 className=" text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
        Projects
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((card) => (
          <div
            key={card.id}
            className=" bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg border-2 border-cyan-900/40 transition-all duration-300 hover:border-cyan-900"
          >
            <div className=" aspect-video bg-gray-700 relative">
              <img
                src={`/images/${card.image}.webp`}
                alt={card.title}
                className=" objexct-cover w-full h-full"
              />
            </div>
            <div className=" p-4 sm:p-6">
              <h3 className=" text-base sm:text-lg font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className=" text-sm md:text-base md:leading-snug text-gray-300 mb-4">
                {card.description}
              </p>
              <div className=" flex gap-2">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-cyan-400 hover:text-cyan-500 transition duration-300 font-medium text-sm sm:text-base"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
