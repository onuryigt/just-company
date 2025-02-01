'use client';

import { useState, useEffect, useMemo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import InfiniteScroll from '@/components/showcase/InfiniteScroll';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = useMemo(() => 'Make it JUST Perfect', []);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col pt-24 bg-white">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute top-[20%] left-0 w-full z-10 flex justify-center items-center">
            <div className="text-center max-w-5xl mx-auto px-4">
              <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 py-8 leading-tight tracking-tight">
                {text}
                <span className="animate-blink">|</span>
              </h1>
            </div>
          </div>
          <div className="w-full overflow-hidden">
            <InfiniteScroll />
          </div>
        </section>

        {/* Level Up Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-500 to-pink-500" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <m.h2 
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight"
            >
              FİKİRDEN BAŞARIYA<br />
              BİZ VARIZ
            </m.h2>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,0,255,0.1)_0%,rgba(120,0,255,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,0,120,0.1)_0%,rgba(255,0,120,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Hizmetlerimiz</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                İşletmenizi bir adım öne taşıyacak çözümlerimizle tanışın
              </p>
            </m.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* JustFood */}
              <m.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-[400px] rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100/50">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-purple-500 to-pink-500 transform origin-bottom group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-100" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-purple-500 to-pink-500 transform origin-right group-hover:scale-x-100 scale-x-0 transition-transform duration-500 delay-200" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 transform origin-top group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-300" />
                  
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-pink-600">JustFood</h3>
                    <p className="text-gray-600 mb-8 flex-grow">
                      Yenilikçi konseptlerimiz ve benzersiz lezzetlerimizle misafirlerimize unutulmaz deneyimler sunuyoruz.
                    </p>
                    <Link 
                      href="/sectors/justfood" 
                      className="inline-flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      <span>Keşfet</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </m.div>

              {/* JustCode */}
              <m.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-[400px] rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100/50">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-blue-500 to-cyan-500 transform origin-bottom group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-100" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-blue-500 to-cyan-500 transform origin-right group-hover:scale-x-100 scale-x-0 transition-transform duration-500 delay-200" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 transform origin-top group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-300" />
                  
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-cyan-600">JustCode</h3>
                    <p className="text-gray-600 mb-8 flex-grow">
                      Modern web ve mobil uygulamalar geliştiriyoruz. İşletmenizi dijital dünyada bir adım öne çıkaracak yazılım çözümleri.
                    </p>
                    <Link 
                      href="/sectors/justcode" 
                      className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      <span>Keşfet</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </m.div>

              {/* JustCreative */}
              <m.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUpVariants}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-[400px] rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100/50">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-orange-500 to-red-500 transform origin-bottom group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-100" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-l from-orange-500 to-red-500 transform origin-right group-hover:scale-x-100 scale-x-0 transition-transform duration-500 delay-200" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 transform origin-top group-hover:scale-y-100 scale-y-0 transition-transform duration-500 delay-300" />
                  
                  <div className="h-full flex flex-col">
                    <div className="mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-orange-600 to-red-600">JustCreative</h3>
                    <p className="text-gray-600 mb-8 flex-grow">
                      Markanızı öne çıkaracak tasarım çözümleri. Logo tasarımından kurumsal kimliğe kadar tüm görsel ihtiyaçlarınız için yanınızdayız.
                    </p>
                    <Link 
                      href="/sectors/justcreative" 
                      className="inline-flex items-center text-orange-600 font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      <span>Keşfet</span>
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
}
