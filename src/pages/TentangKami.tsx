import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";

const TentangKami = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 py-12 md:py-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-primary mb-8">CV Surya Prima Mandiri</h1>
          
          <div className="space-y-6 text-body text-foreground">
            <p>
              Di Surya Prima Mandiri, anda dapat memesan veneer kayu dengan kualitas terbaik. Dengan variasi kayu lokal anda dapat memilih kayu yang sesuai untuk pemakaian anda. Kayu kami dipilih dengan ketelitian untuk memastikan kepuasan anda.
            </p>
            
            <p className="text-foreground font-bold">
              Tunggu apa lagi? Lihat katalog produk kami, pilih produk kami, kontak narahubung kami!
            </p>
          </div>

          {/* Address Card */}
          <div className="card-address mt-10">
            <h2 className="font-serif font-semibold text-xl text-heading mb-4">Alamat Kami</h2>
            <div className="text-body space-y-1">
              <p>Kampung Babakan RT 03/04, Binong, Curug, Tangerang 15810</p>
              <p>Dekat Masjid Al-Hidayah</p>
            </div>
            
            {/* Map Preview */}
            <div className="mt-4 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.6!3d-6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDAuMCJTIDEwNsKwMzYnMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi CV Surya Prima Mandiri"
              ></iframe>
            </div>
            
            <a 
              href="https://maps.google.com/?q=Kampung+Babakan+RT+03/04,+Binong,+Curug,+Tangerang+15810" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-gold hover:text-gold/80 transition-colors font-bold"
            >
              <MapPin className="w-4 h-4" />
              Lihat di Google Maps
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-8">
            <p className="text-foreground font-bold">
              Untuk informasi lebih lanjut hubungi{" "}
              <a href="https://wa.me/6289654343198" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">
                +62 896 5434 3198
              </a>{" "}
              (Yoga Wibowo)
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TentangKami;
