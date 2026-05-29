import { motion } from "framer-motion";
import {
  FaCode,
  FaMobileAlt,
  FaNetworkWired,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h2 className="title">
          About Me
        </h2>

        <p
          className="
          mt-10
          text-slate-300
          max-w-2xl
          leading-9
          text-lg
          text-center
          mx-auto
          px-4
          "
        >
          Saya adalah mahasiswa Teknik
          Informatika yang berfokus pada
          Networking dan pengembangan
          aplikasi mobile menggunakan
          Flutter. Saya memiliki
          pengalaman dalam IT Support,
          pengelolaan jaringan, serta
          pengembangan aplikasi modern
          berbasis web dan mobile.
        </p>

        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >
          <div
            className="
              glass
              p-8
              rounded-3xl
              card
            "
          >
            <FaCode
              className="
                text-4xl
                text-purple-400
                mb-4
              "
            />

            <h3 className="text-2xl font-bold">
              Web Development
            </h3>

            <p className="mt-4 text-slate-300">
              React, TypeScript,
              TailwindCSS, JavaScript
            </p>
          </div>

          <div
            className="
              glass
              p-8
              rounded-3xl
              card
            "
          >
            <FaMobileAlt
              className="
                text-4xl
                text-cyan-400
                mb-4
              "
            />

            <h3 className="text-2xl font-bold">
              Mobile Development
            </h3>

            <p className="mt-4 text-slate-300">
              Flutter & Firebase
            </p>
          </div>

          <div
            className="
              glass
              p-8
              rounded-3xl
              card
            "
          >
            <FaNetworkWired
              className="
                text-4xl
                text-pink-400
                mb-4
              "
            />

            <h3 className="text-2xl font-bold">
              Networking
            </h3>

            <p className="mt-4 text-slate-300">
              Infrastruktur jaringan,
              troubleshooting dan
              maintenance.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}