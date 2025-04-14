import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import img1 from "../assets/images/homeimage.avif";
import { X } from "lucide-react";

// Gallery Data
const galleryItems = [
  { image: img1, title: "Annual Sports Day", category: "Sports" },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHqWbJqsbkqiarDr4njKprxdSMMEPccmBTQ&s",
    title: "Tech Fest 2023",
    category: "Events",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGY6_itvPMHz9U_33aNeGIEyjfir8raMU8XQ&s",
    title: "Cultural Night",
    category: "Cultural",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsoL1dDwOwsfBntsV5xOk2osC4XLs5LG6e3XkdCGRNb6LM0RRAMV5lOhDnvdscp1vefg&usqp=CAU",
    title: "Workshop Sessions",
    category: "Academics",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA3Oskvk5cvQtdoKq-hbVNvI2l8GNuuRWA2ul4q9LoX34LKQDYRgi8wqO70lO9m3Ohk9o&usqp=CAU",
    title: "Campus Tour",
    category: "Campus",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOlGimLnEkK2J6lkqTyXjDI8s6LzBJXbiFw&s",
    title: "Lab Activities",
    category: "Academics",
  },
];


export default function Gallery() {

  // const [images, setImages] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close popup on Esc key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-mpgin-darkBlue mb-4">
              Our Memories
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing moments of innovation, creativity, and academic
              excellence
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {galleryItems.map((item, index) => (
              <GalleryItem
                key={item.title}
                item={item}
                index={index}
                onClick={() => setSelectedImage(item.image)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img
                src={selectedImage}
                alt="Popup"
                className="w-full h-full object-contain max-h-[80vh] rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-mpgin-blue hover:text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const GalleryItem = ({
  item,
  index,
  onClick,
}: {
  item: any;
  index: number;
  onClick: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className={`group relative cursor-pointer h-[300px] `}
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-mpgin-darkBlue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

    <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
      <h3 className="text-xl font-bold text-white">{item.title}</h3>
      <p className="text-mpgin-blue font-medium">{item.category}</p>
    </div>

    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </motion.div>
);
