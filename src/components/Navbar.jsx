function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5">
      <h1 className="text-2xl font-bold text-purple-500">
        ABTalks
      </h1>

      <button className="rounded-full bg-purple-600 px-5 py-2 text-white font-medium hover:bg-purple-700 transition">
        Join
      </button>
    </nav>
  );
}

export default Navbar;