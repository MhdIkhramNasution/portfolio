import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >
        <div>
          <h3
            className="
              text-xl
              font-bold
              gradient-text
            "
          >
            Mhd Ikhram Nasution
          </h3>

          <p className="text-slate-400">
            Full Stack Developer
          </p>
        </div>

        <div
          className="
            flex
            gap-6
            text-2xl
          "
        >
          <a
            href="https://github.com/MhdIkhramNasution"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ikhram-nst/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p
        className="
          text-center
          text-slate-500
          mt-8
        "
      >
        © 2026 Mhd Ikhram Nasution.
        All Rights Reserved.
      </p>
    </footer>
  );
}