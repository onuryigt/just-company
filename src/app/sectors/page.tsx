'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Sectors() {
  const sectors = [
    {
      id: 'justfood',
      title: 'JustFood',
      description: 'Restoran işletmeciliğinde yenilikçi yaklaşımlar.',
      image: '/isletme1.png',
      gradient: 'from-amber-600 to-orange-600',
      link: '/sectors/justfood'
    },
    {
      id: 'justcode',
      title: 'JustCode',
      description: 'Modern web ve mobil uygulamalar geliştiriyoruz. İşletmenizi dijital dünyada bir adım öne çıkaracak yazılım çözümleri.',
      image: '/isletme4.png',
      gradient: 'from-blue-600 to-cyan-600',
      link: '/sectors/justcode'
    },
    {
      id: 'justcreative',
      title: 'JustCreative',
      description: 'Markanızı öne çıkaracak tasarım çözümleri. Logo tasarımından kurumsal kimliğe kadar tüm görsel ihtiyaçlarınız için yanınızdayız.',
      image: '/isletme4.png',
      gradient: 'from-purple-600 to-pink-600',
      link: '/sectors/justcreative'
    }
  ];

  return (
    <main className="flex min-h-screen flex-col pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-500 to-pink-500" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            Sektörlerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Farklı sektörlerde edindiğimiz deneyimlerle işletmelere değer katıyoruz.
          </motion.p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,0,255,0.1)_0%,rgba(120,0,255,0)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,120,0.1)_0%,rgba(255,0,120,0)_100%)]" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <Link href={sector.link} className="block">
                  <div className="relative h-[500px] rounded-3xl p-8 overflow-hidden bg-white shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500" />
                    <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-purple-500 to-pink-500 transform origin-bottom group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-100" />
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-purple-500 to-pink-500 transform origin-right group-hover:scale-x-100 scale-x-0 transition-transform duration-500 delay-200" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 transform origin-top group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-300" />
                    
                    <div className="h-full flex flex-col">
                      <h3 className={`text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r ${sector.gradient}`}>
                        {sector.title}
                      </h3>
                      <p className="text-gray-600 text-lg text-center mb-8 flex-grow">
                        {sector.description}
                      </p>
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center text-lg font-medium bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent group-hover:gap-2 transition-all`}>
                          Daha Fazla Bilgi
                          <svg className={`w-5 h-5 ml-1 bg-gradient-to-r ${sector.gradient} bg-clip-text`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 