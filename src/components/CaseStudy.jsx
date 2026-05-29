import { motion } from "framer-motion";
import homecycle from "../assets/homecycle.png";

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="section"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">
          Case Study
        </h2>

        <div
          className="
          glass
          rounded-3xl
          overflow-hidden
          "
        >
          <img
            src={homecycle}
            alt="HomeCycle"
            className="
            w-full
            object-cover
            "
          />

          <div className="p-10">

            <h3
              className="
              text-4xl
              font-black
              gradient-text
              "
            >
              HomeCycle
            </h3>

            <p
              className="
              text-slate-300
              mt-6
              leading-8
              "
            >
              HomeCycle merupakan aplikasi
              mobile yang membantu pengguna
              mengelola bahan makanan,
              memonitor masa simpan,
              serta mengurangi food waste
              melalui sistem inventory
              management dan prediksi masa
              pakai bahan makanan.
            </p>

            <div
              className="
              grid
              md:grid-cols-2
              gap-8
              mt-10
              "
            >
              <div>
                <h4
                  className="
                  text-cyan-400
                  text-2xl
                  font-bold
                  mb-4
                  "
                >
                  Problem
                </h4>

                <ul className="space-y-2 text-slate-300">
                  <li>• Pengguna lupa stok makanan.</li>
                  <li>• Food waste masih tinggi.</li>
                  <li>• Tidak ada monitoring masa simpan.</li>
                  <li>• Bahan makanan sering terbuang.</li>
                </ul>
              </div>

              <div>
                <h4
                  className="
                  text-pink-400
                  text-2xl
                  font-bold
                  mb-4
                  "
                >
                  Solution
                </h4>

                <ul className="space-y-2 text-slate-300">
                  <li>• Inventory Management.</li>
                  <li>• Expired Food Tracking.</li>
                  <li>• QR Scanner.</li>
                  <li>• Food Lifecycle Prediction.</li>
                </ul>
              </div>
            </div>

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
              "
            >
              <span className="glass px-4 py-2 rounded-full">
                Flutter
              </span>

              <span className="glass px-4 py-2 rounded-full">
                Firebase
              </span>

              <span className="glass px-4 py-2 rounded-full">
                Dart
              </span>

              <span className="glass px-4 py-2 rounded-full">
                GitHub
              </span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}