import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface WoodType {
  id: number;
  name: string;
  image: string | string[];
  category: WoodCategory;
}

type WoodCategory = "all" | "lokal" | "import";

const woodTypes: WoodType[] = [
  {
    id: 1,
    name: "Jati Perhutani",
    image: ["/images/Lokal/Jati Perhutani.jpg", "/images/Lokal/JatiPerhutani1.jpg", "/images/Lokal/JatiPerhutani2.jpg"],
    category: "lokal",
  },
  {
    id: 2,
    name: "Mahoni",
    image: ["/images/Lokal/Mahoni.jpg", "/images/Lokal/Mahoni1.jpg", "/images/Lokal/Mahoni2.jpg"],
    category: "lokal",
  },
  {
    id: 3,
    name: "Sungkai",
    image: ["/images/Lokal/Sungkai.jpg", "/images/Lokal/Sungkai1.jpg"],
    category: "lokal",
  },
  {
    id: 4,
    name: "Amara",
    image: ["/images/Lokal/Amara.jpg", "/images/Lokal/Amara1.jpg", "/images/Lokal/Amara2.jpg", "/images/Lokal/Amara3.jpg"],
    category: "lokal",
  },
  {
    id: 5,
    name: "Ebony",
    image: ["/images/Lokal/Ebony.jpg", "/images/Lokal/Ebony1.jpg"],
    category: "lokal",
  },
  {
    id: 6,
    name: "Mindi Kembang",
    image: ["/images/Lokal/MindiK.jpg", "/images/Lokal/MindiK1.jpg", "/images/Lokal/MindiK2.jpg", "/images/Lokal/MindiK3.jpg"],
    category: "lokal",
  },
  {
    id: 7,
    name: "Mindi Lurus",
    image: ["/images/Lokal/MindiL.jpg", "/images/Lokal/MindiL1.jpg", "/images/Lokal/MindiL2.jpg", "/images/Lokal/MindiL3.jpg"],
    category: "lokal",
  },
  {
    id: 8,
    name: "Nyatoh",
    image: ["/images/Lokal/Nyatoh.jpg", "/images/Lokal/Nyatoh2.jpg", "/images/Lokal/Nyatoh3.jpg", "/images/Lokal/Nyatoh4.jpg", "/images/Lokal/Nyatoh5.jpg"],
    category: "lokal",
  },
  {
    id: 9,
    name: "Trembesi",
    image: ["/images/Lokal/Trembesi.jpg", "/images/Lokal/Trembesi1.jpg", "/images/Lokal/Trembesi2.jpg", "/images/Lokal/Trembesi3.jpg", "/images/Lokal/Trembesi4.jpg", "/images/Lokal/Trembesi5.jpg", "/images/Lokal/Trembesi6.jpg"],
    category: "lokal",
  },
  {
    id: 10,
    name: "White Oak Lurus",
    image: ["/images/Impor/WhiteOakL.jpg", "/images/Impor/WhiteOakL1.jpg", "/images/Impor/WhiteOakL2.jpg", "/images/Impor/WhiteOakL3.jpg"],
    category: "import",
  },
  {
    id: 11,
    name: "White Oak Kembang",
    image: ["/images/Impor/WhiteOakK.jpg", "/images/Impor/WhiteOakK1.jpg", "/images/Impor/WhiteOakK2.jpg", "/images/Impor/WhiteOakK3.jpg", "/images/Impor/WhiteOakK4.jpg", "/images/Impor/WhiteOakK5.jpg", "/images/Impor/WhiteOakK6.jpg", "/images/Impor/WhiteOakK7.jpg"],
    category: "import",
  },
  {
    id: 12,
    name: "Walnut Lurus",
    image: ["/images/Impor/WalnutL.jpg", "/images/Impor/WalnutL1.jpg", "/images/Impor/WalnutL2.jpg", "/images/Impor/WalnutL3.jpg", "/images/Impor/WalnutL4.jpg", "/images/Impor/WalnutL5.jpg"],
    category: "import",
  },
  {
    id: 13,
    name: "Walnut Kembang",
    image: ["/images/Impor/WalnutK.jpg", "/images/Impor/WalnutK2.jpg", "/images/Impor/WalnutK3.jpg", "/images/Impor/WalnutK4.jpg"],
    category: "import",
  },
  {
    id: 14,
    name: "Jati Lokal",
    image: ["/images/Lokal/JatiLokal.jpg", "/images/Lokal/JatiLokal1.jpg", "/images/Lokal/JatiLokal2.jpg", "/images/Lokal/JatiLokal3.jpg"],
    category: "lokal",
  },
];

const WoodView = () => {
  const [categoryFilter, setCategoryFilter] = useState<WoodCategory>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWood, setSelectedWood] = useState<WoodType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredWoodTypes =
    categoryFilter === "all"
      ? woodTypes
      : woodTypes.filter((wood) => wood.category === categoryFilter);
  
  // Keyboard navigation for modal
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        goToPreviousImage();
      } else if (e.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, currentImageIndex, selectedWood]);
  
  // Helper function to get the first image
  const getFirstImage = (image: string | string[]) => {
    return Array.isArray(image) ? image[0] : image;
  };

  // Helper function to get all images as array
  const getAllImages = (image: string | string[]) => {
    return Array.isArray(image) ? image : [image];
  };

  const handleSelectWood = (wood: WoodType) => {
    setSelectedWood(wood);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWood(null);
    setCurrentImageIndex(0);
  };

  const goToPreviousImage = () => {
    if (!selectedWood) return;
    const images = getAllImages(selectedWood.image);
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    if (!selectedWood) return;
    const images = getAllImages(selectedWood.image);
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleFilterChange = (filter: WoodCategory) => {
    setCategoryFilter(filter);
  };

  const filterButtons = (
    <div className="flex flex-wrap justify-start gap-2 mb-4">
      <button
        onClick={() => handleFilterChange("all")}
        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors border-2 border-amber-950 drop-shadow-md ${
          categoryFilter === "all"
            ? "bg-[#802212] text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Semua
      </button>
      <button
        onClick={() => handleFilterChange("lokal")}
        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors border-2 border-amber-950 drop-shadow-md ${
          categoryFilter === "lokal"
            ? "bg-[#802212] text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Lokal
      </button>
      <button
        onClick={() => handleFilterChange("import")}
        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors border-2 border-amber-950 drop-shadow-md ${
          categoryFilter === "import"
            ? "bg-[#802212] text-primary-foreground"
            : "bg-border text-foreground hover:bg-border/80"
        }`}
      >
        Import
      </button>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-0">
      {/* Grid View */}
      <div>
        {filterButtons}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredWoodTypes.map((wood) => (
            <div
              key={wood.id}
              className="rounded-lg overflow-visible shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group border-2 border-amber-950 drop-shadow-md"
              onClick={() => handleSelectWood(wood)}
            >
              <div className="relative overflow-hidden bg-muted h-48 sm:h-56 md:h-64">
                <img
                  src={getFirstImage(wood.image)}
                  alt={wood.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#802212]/60 to-transparent p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-primary-foreground">
                    {wood.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedWood && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>

            {/* Image container */}
            <div className="relative">
              <img
                src={getAllImages(selectedWood.image)[currentImageIndex]}
                alt={selectedWood.name}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4 sm:p-6 rounded-b-lg">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {selectedWood.name}
                </h3>
              </div>

              {/* Navigation buttons - only show if multiple images */}
              {getAllImages(selectedWood.image).length > 1 && (
                <>
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white border-2 border-amber-950 drop-shadow-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 hover:bg-white border-2 border-amber-950 drop-shadow-lg transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image indicators */}
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                    {getAllImages(selectedWood.image).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all border border-white ${
                          idx === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WoodView;
