'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JustFood() {
  const restaurants = [
    {
      id: 'karaali',
      title: 'KARAALİ PİDECİSİ',
      year: '2016',
      description: 'Geleneksel lezzetleri modern bir yaklaşımla buluşturduk.',
      image: '/isletme2.png',
      gradient: 'from-amber-600 to-orange-600'
    },
    {
      id: 'pizzalocale',
      title: 'PİZZA LOCALE',
      year: '2022',
      description: 'Eşsiz Pizza Locale lezzetini Manisa ile buluşturduk.',
      image: '/isletme1.png',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 'dirtyfive',
      title: 'DİRTY FİVE',
      year: '2024',
      description: 'Yenilikçi konseptimizle Burger tutkunlarının yeni adresi.',
      image: '/isletme3.png',
      gradient: 'from-violet-600 to-indigo-600'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-orange-500 to-red-500" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            JustFood
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Her damak tadına uygun, benzersiz lezzetler ve unutulmaz deneyimler sunuyoruz.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,0,255,0.1)_0%,rgba(120,0,255,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,120,0.1)_0%,rgba(255,0,120,0)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Restoranlarımız
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her biri kendi alanında uzmanlaşmış, özgün konseptlere sahip restoranlarımızla misafirlerimize en iyi hizmeti sunuyoruz.
            </p>
          </motion.div>

          <div className="space-y-32">
            {restaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2">
                  <div className={`inline-flex items-center space-x-4 bg-gradient-to-r ${restaurant.gradient} px-6 py-2 rounded-full text-white font-bold mb-6`}>
                    <span className="text-2xl">{restaurant.year}</span>
                  </div>
                  <h3 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${restaurant.gradient}`}>
                    {restaurant.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {restaurant.description}
                  </p>
                </div>
                <div className="w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={restaurant.image}
                      alt={restaurant.title}
                      fill
                      className="object-cover"
                      style={{
                        filter: restaurant.image === '/isletme2.png' ? 'none' : 'brightness(0)',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 via-orange-500 to-red-500" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-16 text-white"
          >
            Değerlerimiz
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Kalite</h3>
              <p className="text-white/80">
                En kaliteli malzemelerle, en lezzetli yemekleri hazırlıyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Hijyen</h3>
              <p className="text-white/80">
                Mutfaklarımızda en yüksek hijyen standartlarını uyguluyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">İnovasyon</h3>
              <p className="text-white/80">
                Geleneksel lezzetleri modern dokunuşlarla buluşturuyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 