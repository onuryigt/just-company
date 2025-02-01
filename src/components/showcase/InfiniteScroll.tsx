'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ScrollItem {
  id: number;
  image: string;
}

// Sadece yemekX.jpg formatındaki görselleri ekliyoruz
const items: ScrollItem[] = [
  { id: 1, image: '/urun/yemek1.jpg' },
  { id: 2, image: '/urun/yemek2.jpg' },
  { id: 3, image: '/urun/yemek3.jpg' },
  { id: 4, image: '/urun/yemek4.jpg' },
  { id: 5, image: '/urun/yemek5.jpg' },
  { id: 6, image: '/urun/yemek6.jpg' },
  { id: 7, image: '/urun/yemek7.jpg' },
  { id: 8, image: '/urun/yemek8.jpg' },
  { id: 9, image: '/urun/yemek9.jpg' },
];

const logos = [
  { id: 1, image: '/isletme1.png' },
  { id: 2, image: '/isletme2.png' },
  { id: 3, image: '/isletme3.png' },
];

export default function InfiniteScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [logoPosition, setLogoPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    const SCROLL_SPEED = 1;
    const LOGO_SPEED = 0.3;
    const CARD_WIDTH = 408; // 400px card + 8px gap
    const LOGO_WIDTH = 832; // 800px logo + 32px gap
    const TOTAL_CARD_WIDTH = CARD_WIDTH * items.length;
    const TOTAL_LOGO_WIDTH = LOGO_WIDTH * logos.length;

    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev + SCROLL_SPEED;
        if (newPosition >= TOTAL_CARD_WIDTH) {
          return 0;
        }
        return newPosition;
      });

      setLogoPosition((prev) => {
        const newPosition = prev + LOGO_SPEED;
        if (newPosition >= TOTAL_LOGO_WIDTH) {
          return 0;
        }
        return newPosition;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Üstte dönen logolar */}
      <div
        className="flex gap-32 absolute top-[20%] -translate-y-1/2 z-20"
        style={{
          transform: `translate3d(-${logoPosition}px, -50%, 0)`,
          transition: 'transform 0.8s linear',
        }}
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <motion.div
            key={`logo-${logo.id}-${index}`}
            className="flex-none w-[800px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative aspect-square p-12 flex items-center justify-center">
              <Image
                src={logo.image}
                alt={`Logo ${logo.id}`}
                width={700}
                height={700}
                className="w-full h-full object-contain opacity-20 hover:opacity-30 transition-opacity duration-300"
                style={{
                  filter: logo.image === '/isletme2.png' ? 'none' : 'brightness(0)',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ürün kartları */}
      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-8 absolute top-[65vh] -translate-y-1/2"
          style={{
            transform: `translate3d(-${scrollPosition}px, 0, 0)`,
            transition: 'transform 0.8s linear',
          }}
        >
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <motion.div
              key={`item-${item.id}-${index}`}
              className="flex-none w-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
                <Image
                  src={item.image}
                  alt={`Item ${item.id}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-30" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-30" />
    </div>
  );
} 