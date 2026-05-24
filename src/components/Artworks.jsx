import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

// Using the provided image filenames from the public/artworks folder
const artworks = [
  "WhatsApp Image 2026-05-24 at 10.15.32 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.33 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.34 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.34 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.35 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.37 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.39 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.40 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.40 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.41 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.41 AM (2).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.41 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.42 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.42 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.43 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.44 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.44 AM (2).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.44 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.45 AM (1).jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.45 AM.jpeg",
  "WhatsApp Image 2026-05-24 at 10.15.46 AM.jpeg"
];

const Artworks = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="artworks" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Creative Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Artworks Collection
          </h2>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {artworks.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden shadow-soft"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`/portfolio/artworks/${image}`}
                alt={`Artwork ${idx + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                // For GitHub Pages, use relative path if base is set, or process.env.PUBLIC_URL
                // Since this is Vite, the base path matters. Assuming default or /portfolio/
                onError={(e) => {
                  // Fallback if base path differs
                  e.target.src = `/artworks/${image}`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={`/portfolio/artworks/${selectedImage}`}
              alt="Selected Artwork"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                e.target.src = `/artworks/${selectedImage}`;
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Artworks;
