'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ShowcaseItem {
  image: string;
  category: string;
}

const showcaseItems: { [key: string]: ShowcaseItem[] } = {
  food: [
    { image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', category: 'Restoran Menüsü' },
    { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187', category: 'Sipariş Yönetimi' },
    { image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543', category: 'Müşteri Deneyimi' },
    { image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', category: 'Analitik Raporlar' },
  ],
  code: [
    { image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3', category: 'Web Uygulamaları' },
    { image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6', category: 'Mobil Uygulamalar' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', category: 'Dashboard Tasarımı' },
    { image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', category: 'API Entegrasyonu' },
  ],
  creative: [
    { image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5', category: 'Logo Tasarımı' },
    { image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d', category: 'Kurumsal Kimlik' },
    { image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5', category: 'Sosyal Medya' },
    { image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490', category: 'UI/UX Tasarım' },
  ],
};

export default function ScrollingShowcase() {
  const [currentCategory, setCurrentCategory] = useState<string>('food');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory((prev) => {
        if (prev === 'food') return 'code';
        if (prev === 'code') return 'creative';
        return 'food';
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setCurrentCategory('food')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === 'food'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            JustFood
          </button>
          <button
            onClick={() => setCurrentCategory('code')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === 'code'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            JustCode
          </button>
          <button
            onClick={() => setCurrentCategory('creative')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              currentCategory === 'creative'
                ? 'bg-black text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            JustCreative
          </button>
        </div>

        <div className="relative">
          <motion.div
            key={currentCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {showcaseItems[currentCategory].map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 