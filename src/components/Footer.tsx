import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-divider py-6 sm:py-8 px-4 sm:px-6 md:px-16 flex justify-center text-center">
      <p className="inline-block bg-[#802212] text-background text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md">
        Tentang{" "}
        <Link to="/tentang-kami" className="underline">
          CV. Surya Prima Mandiri
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
