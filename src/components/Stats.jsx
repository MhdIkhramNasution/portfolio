import { motion } from "framer-motion";

const stats = [
  {
    value: "01+",
    label: "Project Completed",
  },
  {
    value: "04+",
    label: "Years Experience",
  },
  {
    value: "08+",
    label: "Technologies",
  },
];

export default function Stats() {
  return (
    <section className="section">
      <div
        className="
          grid
          md:grid-cols-3
          gap-8
        "
      >
        {stats.map(
          (item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
              }}
              className="
                glass
                p-10
                rounded-3xl
                text-center
              "
            >
              <h1
                className="
                  text-6xl
                  font-black
                  gradient-text
                "
              >
                {item.value}
              </h1>

              <p
                className="
                  mt-4
                  text-slate-300
                "
              >
                {item.label}
              </p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}