import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Find the scrolling container (parent of header)
      const scrollContainer = document.querySelector('.overflow-y-scroll');
      if (!scrollContainer) return;
      
      const currentScrollY = scrollContainer.scrollTop;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);

      // Only react to significant scroll movements (more than 20px)
      // This prevents snap scrolling from triggering the header
      if (scrollDelta > 20) {
        // Clear any pending timeout
        clearTimeout(scrollTimeout);
        
        // Set a small delay to ensure it's intentional scrolling
        scrollTimeout = setTimeout(() => {
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            setIsVisible(false);
            setIsOpen(false); // Close menu when hiding
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsVisible(true);
          }
          setLastScrollY(currentScrollY);
        }, 100);
      }
    };

    const scrollContainer = document.querySelector('.overflow-y-scroll');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full py-2 sm:py-4 md:py-6 px-3 sm:px-6 md:px-16 flex items-center justify-between border-b transition-all duration-300 bg-[#802212]/80 border-gold/10 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Brand Text */}
      <span className="text-primary-foreground drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold text-sm sm:text-base md:text-lg">Surya Prima Mandiri</span>

      {/* Menu Button (Always Visible) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 sm:p-2 bg-background text-black hover:bg-white/20 rounded-lg transition-colors border border-amber-950 drop-shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>

      {/* Navigation Menu */}
      {isOpen && (
        <nav className="absolute top-full right-0 min-w-[250px] bg-transparent backdrop-blur-md border-b border-l border-gold/10 rounded-bl-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md ${
                location.pathname === "/"
                  ? "bg-background text-black hover:bg-background/75"
                  : "text-black bg-border hover:bg-black/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/produk"
              className={`block py-2 px-4 rounded-lg transition-colors border border-amber-950 drop-shadow-md ${
                location.pathname === "/produk"
                  ? "bg-background text-black hover:bg-background/75"
                  : "text-black bg-border hover:bg-white/20"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Produk Kami
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
