import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "HomeCycle",
    tech: "Flutter • Firebase",
    description:
      "Aplikasi pengolah bahan makanan yang membantu mengurangi food waste, memprediksi masa pakai bahan makanan, dan mengelola sisa bahan makanan secara efisien.",
    github:
      "https://github.com/MhdIkhramNasution",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
    >
      <h2 className="title">
        Featured Project
      </h2>

      <div
        className="
          glass
          rounded-3xl
          overflow-hidden
          card
        "
      >
        <div
          className="
            h-72
            bg-gradient-to-r
            from-purple-600
            via-pink-500
            to-cyan-500
            flex
            items-center
            justify-center
          "
        >
          <h1
            className="
              text-5xl
              font-black
            "
          >
            HomeCycle
          </h1>
        </div>

        <div className="p-10">
          <h3
            className="
              text-3xl
              font-bold
            "
          >
            {projects[0].title}
          </h3>

          <p
            className="
              text-cyan-400
              mt-2
            "
          >
            {projects[0].tech}
          </p>

          <p
            className="
              mt-6
              text-slate-300
              leading-8
            "
          >
            {projects[0].description}
          </p>

          <div
            className="
              flex
              gap-4
              mt-8
            "
          >
            <a
              href={projects[0].github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-purple-600
              "
            >
              <FaGithub />
              Source Code
            </a>

            <button
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                border
                border-cyan-400
              "
            >
              <FaExternalLinkAlt />
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}