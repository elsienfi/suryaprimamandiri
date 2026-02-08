import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full py-6 px-8 md:px-16 flex items-center justify-between bg-[#e18237]/80 backdrop-blur-md border-b border-gold/10">
      <Link to="/" className="font-serif text-xl font-semibold text-black">
        Surya Prima Mandiri
      </Link>
      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className={`nav-link pb-1 ${location.pathname === "/" ? "nav-link-active" : ""}`}
        >
          Beranda
        </Link>
        <Link
          to="/tentang-kami"
          className={`nav-link pb-1 ${location.pathname === "/tentang-kami" ? "nav-link-active" : ""}`}
        >
          Tentang Kami
        </Link>
      </nav>
    </header>
  );
};

export default Header;
