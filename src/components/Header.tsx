import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full py-4 sm:py-6 px-4 sm:px-8 md:px-16 flex items-center justify-between bg-[#802212]/80 backdrop-blur-md border-b border-gold/10">
      <Link to="/" className="flex items-center h-12 sm:h-14 border border-amber-950 rounded-lg bg-background p-1 drop-shadow-md">
        <img 
          src="/images/logo_spm.png" 
          alt="Surya Prima Mandiri Logo"
          className="h-full object-contain"
        />
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-4 md:gap-8">
        <Link
          to="/"
          className={`py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md text-sm md:text-base ${
            location.pathname === "/"
              ? "bg-background text-black hover:bg-background/75"
              : "text-black bg-border hover:bg-white/20"
          }`}
        >
          Beranda        </Link>
        <Link
          to="/tentang-kami"
          className={`py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md text-sm md:text-base ${
            location.pathname === "/tentang-kami"
              ? "bg-background text-black hover:bg-background/75"
              : "text-black bg-border hover:bg-white/20"
          }`}
        >
          Tentang Kami
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden p-2 bg-background text-black hover:bg-white/20 rounded-lg transition-colors border border-amber-950 drop-shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#802212]/80 backdrop-blur-md border-b border-gold/10 sm:hidden">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md ${
                location.pathname === "/"
                  ? "bg-background text-black hover:bg-background/75"
                  : "text-black bg-border hover:bg-white/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/tentang-kami"
              className={`block py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md ${
                location.pathname === "/tentang-kami"
                  ? "bg-background text-black hover:bg-background/75"
                  : "text-black bg-border hover:bg-white/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Tentang Kami
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
