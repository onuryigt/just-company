'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import { useMemo } from 'react';

export default function JustCreative() {
  const services = useMemo(() => [
    {
      icon: '🎨',
      title: 'Marka Kimliği',
      description: 'Logo tasarımı, kurumsal kimlik ve marka stratejisi geliştirme hizmetleri.',
    },
    {
      icon: '🖥️',
      title: 'UI/UX Tasarım',
      description: 'Kullanıcı odaklı arayüz tasarımı ve kullanıcı deneyimi optimizasyonu.',
    },
    {
      icon: '📱',
      title: 'Mobil Uygulama Tasarımı',
      description: 'iOS ve Android platformları için modern ve kullanıcı dostu uygulama tasarımları.',
    },
    {
      icon: '🌐',
      title: 'Web Tasarım',
      description: 'Responsive ve modern web siteleri için özel tasarım çözümleri.',
    },
    {
      icon: '📸',
      title: 'Sosyal Medya',
      description: 'Sosyal medya içerik tasarımı ve görsel kimlik yönetimi.',
    },
    {
      icon: '🎬',
      title: 'Motion Design',
      description: 'Animasyon ve hareketli grafik tasarımları ile markanızı canlandırın.',
    },
  ], []);

  const process = useMemo(() => [
    {
      number: '01',
      title: 'Keşif',
      description: 'Marka değerlerinizi ve hedeflerinizi derinlemesine analiz ederiz.',
    },
    {
      number: '02',
      title: 'Strateji',
      description: 'Araştırma sonuçlarına dayalı etkili bir tasarım stratejisi oluştururuz.',
    },
    {
      number: '03',
      title: 'Tasarım',
      description: 'Modern trendler ve marka kimliğinizi harmanlayarak özgün tasarımlar üretiriz.',
    },
    {
      number: '04',
      title: 'İterasyon',
      description: 'Geri bildirimler doğrultusunda tasarımları optimize ederiz.',
    },
  ], []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-pink-500" />
          <m.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5 }}
            className="relative text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">JustCreative</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Markanızı öne çıkaracak yaratıcı tasarım çözümleri sunuyoruz.
            </p>
          </m.div>
        </section>

        {/* Services Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Hizmetlerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern tasarım yaklaşımı ve yaratıcı çözümlerle markanızı bir adım öne taşıyoruz.
              </p>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <m.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Tasarım Sürecimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sistematik ve yenilikçi tasarım sürecimizle projelerinizi hayata geçiriyoruz.
              </p>
            </m.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <m.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUpVariants}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-gray-100 absolute -top-8 left-0">
                    {step.number}
                  </div>
                  <div className="bg-white rounded-3xl p-8 shadow-lg relative z-10">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-600 to-pink-500" />
          <div className="container mx-auto px-4 relative">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Projenizi Başlatalım</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Markanızı bir sonraki seviyeye taşımak için yaratıcı çözümlerimizle tanışın.
              </p>
              <Link href="/contact">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                  İletişime Geçin
                </button>
              </Link>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 