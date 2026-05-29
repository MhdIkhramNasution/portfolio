import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
    >
      <h2 className="title">
        Contact Me
      </h2>

      <div
        className="
          glass
          rounded-3xl
          p-10
        "
      >
        <p
          className="
            text-slate-300
            text-lg
            mb-8
          "
        >
          Saya terbuka untuk peluang
          kerja, freelance, maupun
          kolaborasi project.
        </p>

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          <a
            href="mailto:ikhrammuhammad245@gmail.com"
            className="
              glass
              p-6
              rounded-2xl
              card
              flex
              items-center
              gap-4
            "
          >
            <FaEnvelope
              className="
                text-2xl
                text-cyan-400
              "
            />

            <div>
              <h3>Email</h3>
              <p>
                ikhrammuhammad245@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/MhdIkhramNasution"
            target="_blank"
            rel="noreferrer"
            className="
              glass
              p-6
              rounded-2xl
              card
              flex
              items-center
              gap-4
            "
          >
            <FaGithub
              className="
                text-2xl
                text-purple-400
              "
            />

            <div>
              <h3>GitHub</h3>
              <p>
                MhdIkhramNasution
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ikhram-nst/"
            target="_blank"
            rel="noreferrer"
            className="
              glass
              p-6
              rounded-2xl
              card
              flex
              items-center
              gap-4
            "
          >
            <FaLinkedin
              className="
                text-2xl
                text-cyan-400
              "
            />

            <div>
              <h3>LinkedIn</h3>
              <p>
                Ikhram NST
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/6282252725803"
            target="_blank"
            rel="noreferrer"
            className="
              glass
              p-6
              rounded-2xl
              card
              flex
              items-center
              gap-4
            "
          >
            <FaWhatsapp
              className="
                text-2xl
                text-green-400
              "
            />

            <div>
              <h3>WhatsApp</h3>
              <p>
                082252725803
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}