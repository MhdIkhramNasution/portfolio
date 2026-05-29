import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      pt-32
      pb-20
      "
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px] rounded-full" />

      <div
        className="
        max-w-4xl
        mx-auto
        px-8
        flex
        flex-col
        items-center
        text-center
        z-10
        "
      >

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 mt-8"
        >
          <div className="relative">

            <div
              className="
              absolute
              inset-0
              bg-cyan-500/30
              blur-[80px]
              rounded-full
              "
            />

            <img
              src={profile}
              alt="Profile"
              className="
              relative
              w-[250px]
              h-[250px]
              md:w-[300px]
              md:h-[300px]
              object-cover
              rounded-full
              border-4
              border-cyan-400
              "
            />

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="
            mt-4
            text-4xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-tight
            "
          >
            <span className="gradient-text">
              Mhd Ikhram Nasution
            </span>
          </h1>

          <div className="mt-8 min-h-[50px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Flutter Developer",
                2000,
                "React Developer",
                2000,
                "Network Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="
              text-xl
              md:text-2xl
              font-semibold
              text-white
              "
            />
          </div>

          <p
            className="
            mt-12
            text-slate-300
            text-lg
            leading-10
            max-w-3xl
            mx-auto
            text-center
            "
          >
            Mahasiswa Teknik Informatika yang berfokus pada Networking dan
            <br />
            pengembangan aplikasi mobile menggunakan Flutter serta
            <br />
            pengembangan web modern.
          </p>
          <br />

          {/* BUTTON */}
          <div
            className="
            flex
            justify-center
            gap-10
            mt-16
            text-1xl
            "
            >

            <button
              className="
              px-8
              py-4
              rounded-full
              font-semibold
              bg-gradient-to-r
              from-purple-500
              to-cyan-500
              hover:scale-105
              transition
              duration-300
              shadow-lg
              shadow-purple-500/30
              "
            >
              Download CV
            </button>

            <button
              className="
              px-8
              py-4
              rounded-full
              border
              border-cyan-400
              hover:bg-cyan-500
              hover:text-black
              transition
              duration-300
              "
            >
              Contact Me
            </button>

          </div>
          <br />

          {/* SOCIAL */}
          <div
            className="
            flex
            justify-center
            gap-15
            mt-8
            text-3xl
            "
          >

            <a
              href="https://github.com/MhdIkhramNasution"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ikhram-nst/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

      </div>

      <div
        className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        animate-bounce
        text-2xl
        "
      >
        <FaArrowDown />
      </div>

    </section>
  );
}