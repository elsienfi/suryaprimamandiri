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
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="heading-primary mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl">Variasi Veneer Berkualitas</h1>
            <p className="text-body text-black max-w-2xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
              Dengan veneer pilihan terbaik, dinding anda terlihat semakin menawan.
            </p>
          </div>

          <WoodView />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
