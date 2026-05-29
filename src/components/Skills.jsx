import {
  FaReact,
  FaJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript />,
    name: "TypeScript",
  },
  {
    icon: <SiTailwindcss />,
    name: "TailwindCSS",
  },
  {
    icon: <SiFirebase />,
    name: "Firebase",
  },
  {
    icon: <FaDatabase />,
    name: "MySQL",
  },
  {
    icon: <FaGitAlt />,
    name: "Git",
  },
  {
    icon: <SiCplusplus />,
    name: "C++",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >
      <h2 className="title">
        Skills
      </h2>

      <div
        className="
          grid
          md:grid-cols-4
          gap-6
        "
      >
        {skills.map(
          (skill, index) => (
            <div
              key={index}
              className="
                glass
                p-8
                rounded-3xl
                card
                text-center
              "
            >
              <div
                className="
                  text-5xl
                  mb-4
                  text-cyan-400
                "
              >
                {skill.icon}
              </div>

              <h3
                className="
                  font-semibold
                  text-lg
                "
              >
                {skill.name}
              </h3>
            </div>
          )
        )}
      </div>
    </section>
  );
}