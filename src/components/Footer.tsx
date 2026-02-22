import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-divider py-6 sm:py-8 px-4 sm:px-6 md:px-16">
      <Link
        to="/tentang-kami"
        className="inline-block bg-white text-black text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md underline"
      >
        CV. Surya Prima Mandiri
      </Link>
    </footer>
  );
};

export default Footer;
