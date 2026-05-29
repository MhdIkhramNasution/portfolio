import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      z-50
      "
    >
      <div
        className="
        flex
        gap-3
        glass
        p-3
        rounded-full
        border
        border-white/10
        "
      >
        {[
          "about",
          "skills",
          "projects",
          "contact",
        ].map((item) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            offset={-100}
            className="
            px-5
            py-2
            rounded-full
            cursor-pointer
            capitalize

            hover:bg-cyan-500
            hover:text-black

            transition
            duration-300
            "
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
}