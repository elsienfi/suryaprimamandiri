import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(["section-1", "section-2", "section-3", "section-4"])
  );
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(entry.target.id);
            } else {
              newSet.delete(entry.target.id);
            }
            return newSet;
          });
        });
      },
      { threshold: 0.1 }
    );

    const refs = [section1Ref, section2Ref, section3Ref, section4Ref];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const getAnimationClass = (sectionId: string) => {
    return visibleSections.has(sectionId)
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";
  };

  const backgroundStyles = {
    section1: {
      backgroundImage: window.innerWidth < 640 
        ? "url('/images/mobile-section-1.jpg')"
        : "url('/images/desktop-section-1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    section2: {
      backgroundImage: window.innerWidth < 640 
        ? "url('/images/mobile-section-2.jpg')"
        : "url('/images/desktop-section-2.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    section3: {
      backgroundImage: window.innerWidth < 640 
        ? "url('/images/mobile-section-3.jpg')"
        : "url('/images/desktop-section-3.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    section4: {
      backgroundImage: window.innerWidth < 640 
        ? "url('/images/mobile-section-4.jpg')"
        : "url('/images/desktop-section-4.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
  };

  return (
    <div className="bg-background scroll-smooth overflow-y-scroll snap-y snap-mandatory h-screen">
      <Header />

      <main>
        {/* Section 1: Company Name */}
        <section
          ref={section1Ref}
          id="section-1"
          className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 text-center transition-all duration-1000 relative snap-start ${getAnimationClass("section-1")}`}
          style={backgroundStyles.section1}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <img 
              src="/images/logo_spm.png" 
              alt="Logo Surya Prima Mandiri" 
              className="w-48 sm:w-56 md:w-72 lg:w-80 mx-auto drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Section 2: About */}
        <section
          ref={section2Ref}
          id="section-2"
          className={`min-h-screen flex items-center justify-end px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 transition-all duration-1000 relative snap-start ${getAnimationClass("section-2")}`}
          style={backgroundStyles.section2}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-3xl ml-auto w-full text-right relative z-10">
            <h2 className="heading-primary text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Sentuhan Keindahan Alami <br /> dalam Setiap Lembaran
            </h2>
            <div className="space-y-3 sm:space-y-4 text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm sm:text-base">
              <p>
                Memperindah Suasana Rumah
                </p>
            </div>
          </div>
        </section>

        {/* Section 3: Location & Contact */}
        <section
          ref={section3Ref}
          id="section-3"
          className={`min-h-screen flex items-center justify-start px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-20 transition-all duration-1000 relative snap-start ${getAnimationClass("section-3")}`}
          style={backgroundStyles.section3}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="w-full relative z-10">
            <div className="flex flex-col space-y-8">
              {/* Location */}
              <div className="w-full">
                <h2 className="heading-primary text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl md:text-4xl mb-4 text-left">
                  Lokasi Kami
                </h2>
                <div className="border-4 border-amber-950 drop-shadow-lg p-1 w-96 mb-4 bg-amber-950">
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.78183682085364!2d106.58457510533684!3d-6.251101587056665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fdd644db35b9%3A0x3ff6a95a9c55314e!2sCV.%20Surya%20Prima%20Mandiri!5e0!3m2!1sid!2sid!4v1772332539399!5m2!1sid!2sid" 
                  width="100%" 
                  height="300" 
                  title="CV Surya Prima Mandiri"
                  loading="lazy"
                  style={{ border: 0, display: 'block' }}>
                  </iframe>
                </div>
                <div className="text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm sm:text-base text-left">
                  <p className="font-bold mb-2">Kampung Babakan RT 03/04</p>
                  <p>Binong, Curug, Tangerang 15810</p>
                  <p className="text-sm text-[#e4e0d7]/80 mb-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Dekat Masjid Al-Hidayah</p>
                  <a
                    href="https://maps.google.com/?q=Kampung+Babakan+RT+03/04,+Binong,+Curug,+Tangerang+15810"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-[#a02818] transition-colors font-bold"
                  >
                    <MapPin className="w-4 h-4" />
                    Lihat di Google Maps
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="w-full">
                <h2 className="heading-primary text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-2xl sm:text-3xl md:text-4xl mb-4 text-left">
                  Hubungi Kami
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-sm sm:text-base md:text-lg text-left">
                    Untuk informasi lebih lanjut atau pertanyaan, hubungi kami melalui WhatsApp:
                  </p>
                  <a
                    href="https://wa.me/6289654343198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#e4e0d7] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-[#a02818] transition-colors text-sm sm:text-base"
                  >
                    <img src="/images/WhatsApp.svg" alt="WhatsApp" className="w-4 h-4" />
                    +62 896 5434 3198 (Yoga Wibowo)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CTA to Products */}
        <section
          ref={section4Ref}
          id="section-4"
          className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 text-center transition-all duration-1000 relative snap-start ${getAnimationClass("section-4")}`}
          style={backgroundStyles.section4}
        >
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#e4e0d7] mb-4 sm:mb-6">
              Lihat Katalog Produk Kami
            </h2>
            <p className="text-[#e4e0d7] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Jelajahi berbagai pilihan veneer kayu lokal dan impor berkualitas tinggi. Temukan produk yang sempurna untuk kebutuhan Anda.
            </p>
            <button
              onClick={() => navigate("/produk")}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-primary-foreground text-[#802212] rounded-lg font-bold text-base sm:text-lg hover:bg-primary-foreground/90 transition-colors border-2 border-primary-foreground drop-shadow-lg"
            >
              Lihat Produk Kami
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
