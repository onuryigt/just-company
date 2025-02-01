'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const timelineItems = [
    {
      year: 2014,
      title: 'JUST',
      description: 'Yolculuğumuzun başlangıcı. Bir hayalin temellerini attık.',
      logo: '/isletme4.png',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      year: 2016,
      title: 'KARAALİ PİDECİSİ',
      description: 'Geleneksel lezzetleri modern bir yaklaşımla buluşturduk.',
      logo: '/isletme2.png',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      year: 2018,
      title: 'JUSTCREATİVE',
      description: 'Yaratıcı çözümlerle markaları geleceğe taşımaya başladık.',
      logo: '/isletme4.png',
      gradient: 'from-rose-600 to-red-600',
    },
    {
      year: 2021,
      title: 'JUSTCODE',
      description: 'Teknoloji dünyasına adım atarak dijital dönüşüme öncülük ettik.',
      logo: '/isletme4.png',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      year: 2022,
      title: 'PİZZA LOCALE',
      description: 'Eşsiz Pizza Locale lezzetini Manisa ile buluşturduk.',
      logo: '/isletme1.png',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      year: 2024,
      title: 'DİRTY FİVE',
      description: 'Hamburgere yeni.',
      logo: '/isletme3.png',
      gradient: 'from-violet-600 to-indigo-600',
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col pt-32 bg-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-500 to-pink-500" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <m.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-black text-white mb-8"
            >
              Hikayemiz
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              2014&apos;ten beri yenilikçi yaklaşımımız ve tutkumuzla sektöre yön veriyoruz.
            </m.p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,0,255,0.1)_0%,rgba(120,0,255,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,120,0.1)_0%,rgba(255,0,120,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="space-y-32">
              {timelineItems.map((item, index) => (
                <m.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="w-1/2">
                    <div className={`inline-flex items-center space-x-4 bg-gradient-to-r ${item.gradient} px-6 py-2 rounded-full text-white font-bold mb-6`}>
                      <span className="text-2xl">{item.year}</span>
                    </div>
                    <h3 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                      <Image
                        src={item.logo}
                        alt={item.title}
                        fill
                        className="object-contain p-8"
                        style={{
                          filter: item.logo === '/isletme2.png' ? 'none' : 'brightness(0)',
                        }}
                      />
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-500 to-pink-500" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black text-white mb-16"
            >
              Değerlerimiz
            </m.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Yenilikçilik</h3>
                <p className="text-white/80">
                  Her projemizde yeni fikirler ve yaklaşımlar geliştiriyoruz.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Mükemmellik</h3>
                <p className="text-white/80">
                  En iyisini sunmak için sürekli kendimizi geliştiriyoruz.
                </p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Sürdürülebilirlik</h3>
                <p className="text-white/80">
                  Uzun vadeli başarı için sürdürülebilir çözümler üretiyoruz.
                </p>
              </m.div>
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 
