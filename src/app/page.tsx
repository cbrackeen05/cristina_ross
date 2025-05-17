'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';

const backgrounds = [
  '/images/bg1.jpg',
  '/images/bg2.jpg',
  '/images/bg3.jpg',
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newBg = Math.floor(scrollPosition / window.innerHeight) % backgrounds.length;
      if (newBg !== currentBg) {
        setCurrentBg(newBg);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentBg]);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {backgrounds.map((bg, index) => (
        <motion.div
          key={bg}
          style={{ y }}
          className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bg})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      <div className="relative min-h-screen flex items-center justify-center text-white">
        <div className="text-center space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Explore my projects, photography, and library
          </motion.p>
        </div>
      </div>
    </main>
  );
}
