import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <Link
        to="/"
        className="text-2xl font-extrabold text-purple-600"
      >
        ABTalks
      </Link>

      <button className="rounded-full p-2 hover:bg-gray-200 transition">
        <Menu size={24} />
      </button>
    </nav>
  );
}

export default Navbar;