'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';

// Replace these with your actual photos
const photos = [
  {
    id: 1,
    src: '/images/photos/photo1.jpg',
    alt: 'Photo 1',
    category: 'nature',
  },
  {
    id: 2,
    src: '/images/photos/photo2.jpg',
    alt: 'Photo 2',
    category: 'urban',
  },
  // Add more photos
];

export default function Photography() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Photography Gallery
        </motion.h1>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedPhoto(photo)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 