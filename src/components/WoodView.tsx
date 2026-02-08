import { useState } from "react";
import { ChevronLeft, ChevronRight, Grid2X2, Columns3 } from "lucide-react";

interface WoodType {
  id: number;
  name: string;
  description: string;
  image: string;
  category: WoodCategory;
}

type ViewMode = "carousel" | "grid-title" | "grid-detail";
type WoodCategory = "all" | "lokal" | "import";

const woodTypes: WoodType[] = [
  {
    id: 1,
    name: "Kayu Jati Perhutani",
    description: "Kayu jati pilihan dengan kualitas terbaik, tahan lama hingga puluhan tahun. Cocok untuk furniture berkelas tinggi.",
    image: "/images/Jati Perhutani.jpg",
    category: "lokal",
  },
  {
    id: 2,
    name: "Kayu Mahoni",
    description: "Kayu mahoni dengan tekstur halus dan warna merah kecoklatan yang elegan. Ideal untuk interior mewah.",
    image: "/images/Mahoni.jpg",
    category: "lokal",
  },
  {
    id: 3,
    name: "Kayu Sungkai",
    description: "Kayu sungkai dengan serat indah dan daya tahan yang baik. Pilihan tepat untuk berbagai kebutuhan.",
    image: "/images/Sungkai.jpg",
    category: "lokal",
  },
  {
    id: 4,
    name: "Kayu Amara",
    description: "Kayu amara dengan serat indah dan daya tahan yang baik. Pilihan tepat untuk berbagai kebutuhan.",
    image: "/images/Amara.jpg",
    category: "lokal",
  },
];

const WoodView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid-title");
  const [categoryFilter, setCategoryFilter] = useState<WoodCategory>("all");

  const filteredWoodTypes =
    categoryFilter === "all"
      ? woodTypes
      : woodTypes.filter((wood) => wood.category === categoryFilter);
  const filteredCount = filteredWoodTypes.length;
  const currentWood = filteredWoodTypes[currentIndex] ?? filteredWoodTypes[0];

  const goToPrevious = () => {
    if (filteredCount === 0) {
      return;
    }
    setCurrentIndex((prev) => (prev === 0 ? filteredCount - 1 : prev - 1));
  };

  const goToNext = () => {
    if (filteredCount === 0) {
      return;
    }
    setCurrentIndex((prev) => (prev === filteredCount - 1 ? 0 : prev + 1));
  };

  const handleSelectWood = (index: number) => {
    setCurrentIndex(index);
    setViewMode("carousel");
  };

  const handleFilterChange = (filter: WoodCategory) => {
    setCategoryFilter(filter);
    setCurrentIndex(0);
  };

  const filterButtons = (
    <div className="flex justify-start gap-2 mb-4">
      <button
        onClick={() => handleFilterChange("all")}
        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
          categoryFilter === "all"
            ? "bg-navy text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Semua
      </button>
      <button
        onClick={() => handleFilterChange("lokal")}
        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
          categoryFilter === "lokal"
            ? "bg-navy text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Lokal
      </button>
      <button
        onClick={() => handleFilterChange("import")}
        className={`px-3 py-2 rounded-lg text-sm transition-colors ${
          categoryFilter === "import"
            ? "bg-navy text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Import
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* View Toggle Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          onClick={() => setViewMode("grid-title")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            viewMode === "grid-title"
              ? "bg-navy text-primary-foreground"
              : "bg-border text-foreground hover:bg-border/80"
          }`}
          aria-label="Grid title view"
        >
          <Grid2X2 className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Simple</span>
        </button>
        <button
          onClick={() => setViewMode("carousel")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            viewMode === "carousel"
              ? "bg-navy text-primary-foreground"
              : "bg-border text-foreground hover:bg-border/80"
          }`}
          aria-label="Carousel view"
        >
          <Columns3 className="w-4 h-4" />
          <span className="hidden sm:inline text-sm">Detailed</span>
        </button>
      </div>

      {/* Carousel View */}
      {viewMode === "carousel" && (
        <div className="relative w-full">
          {filterButtons}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={currentWood?.image}
              alt={currentWood?.name}
              className="w-full h-[480px] md:h-[620px] object-cover transition-opacity duration-500"
            />
            
            {/* Overlay with text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-2">
                {currentWood?.name}
              </h3>
              <p className="text-primary-foreground/90 text-sm md:text-base max-w-xl">
                {currentWood?.description}
              </p>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="carousel-button absolute left-4 top-1/2 -translate-y-1/2 bg-white/80"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="carousel-button absolute right-4 top-1/2 -translate-y-1/2 bg-white/80"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {filteredWoodTypes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-navy" : "bg-border"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Grid Title Only View (Title + Image) */}
      {viewMode === "grid-title" && (
        <div>
          {filterButtons}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWoodTypes.map((wood, index) => (
              <div
                key={wood.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => handleSelectWood(index)}
              >
                <div className="relative overflow-hidden bg-muted h-64">
                  <img
                    src={wood.image}
                    alt={wood.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-4">
                    <h3 className="text-lg font-serif font-bold text-primary-foreground">
                      {wood.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grid Detail View (Title + Description + Image) */}
      {viewMode === "grid-detail" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {woodTypes.map((wood) => (
            <div
              key={wood.id}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative overflow-hidden bg-muted h-48">
                <img
                  src={wood.image}
                  alt={wood.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/80 to-transparent p-5">
                  <h3 className="text-lg font-serif font-bold text-primary-foreground mb-2">
                    {wood.name}
                  </h3>
                  <p className="text-sm text-primary-foreground/90 line-clamp-3 min-h-[72px]">
                    {wood.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WoodView;
