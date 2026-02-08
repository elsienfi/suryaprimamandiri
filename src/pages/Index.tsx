import { TreeDeciduous, Sparkles, Infinity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WoodView from "@/components/WoodView";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-8 md:px-16">
          <div className="text-center mb-12">
            <h1 className="heading-primary mb-4">Variasi Kayu Berkualitas</h1>
            <p className="text-body max-w-2xl mx-auto">
              Dengan kayu pilihan terbaik, anda tidak perlu khawatir kayu pesanan anda dimakan usia.
            </p>
          </div>

          <WoodView />
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <FeatureCard
              icon={<TreeDeciduous className="w-8 h-8" />}
              title="Bahan Baku Berkelanjutan"
              description="Kayu yang diambil dari hutan yang dikelola"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Penanganan Andal"
              description="Penanganan kayu yang profesional menjamin kualitas kayu sepanjang alur produksi"
            />
            <FeatureCard
              icon={<Infinity className="w-8 h-8" />}
              title="Tahan Lama"
              description="Kayu yang kuat tidak perlu khawatir termakan usia"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
