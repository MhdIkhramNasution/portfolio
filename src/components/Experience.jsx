import { motion } from "framer-motion";

const experiences = [
  {
    title: "IT Support - BUMN IOPRI",
    duration: "1 Tahun",
    description:
      "Magang sebagai IT Support yang bertanggung jawab terhadap troubleshooting perangkat, instalasi software, maintenance jaringan, dan dukungan teknis.",
  },
  {
    title: "Network Technician",
    duration: "2 Tahun",
    description:
      "Merancang, memperbaiki dan mengelola sistem jaringan komputer serta melakukan troubleshooting infrastruktur jaringan.",
  },
  {
    title: "Computer Technician",
    duration: "1 Tahun",
    description:
      "Perawatan, perbaikan dan upgrade perangkat keras komputer serta optimasi performa sistem.",
  },
];

export default function Experience() {
  return (
    <section className="section">
      <h2 className="title">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map(
          (exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.2,
              }}
              className="
                glass
                p-8
                rounded-3xl
                card
              "
            >
              <div
                className="
                  flex
                  justify-between
                  flex-wrap
                  gap-3
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  {exp.title}
                </h3>

                <span
                  className="
                    text-cyan-400
                    font-semibold
                  "
                >
                  {exp.duration}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-slate-300
                "
              >
                {exp.description}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}