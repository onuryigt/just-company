'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JustCode() {
  const projects = [
    {
      id: 1,
      title: 'Just Gıda Yönetim Uygulaması',
      description: 'Just Gıda işletmesi için geliştirilmiş kapsamlı yönetim paneli uygulaması. Stok takibi, sipariş yönetimi, müşteri ilişkileri ve raporlama gibi temel işlevleri içerir.',
      features: [
        { icon: '📦', text: 'Stok Yönetimi' },
        { icon: '🛍️', text: 'Sipariş Takibi' },
        { icon: '👥', text: 'Müşteri Yönetimi' },
        { icon: '📊', text: 'Raporlama' },
        { icon: '🔔', text: 'Gerçek Zamanlı Bildirimler' },
        { icon: '📱', text: 'Mobil Uyumlu Arayüz' },
      ],
      technologies: {
        backend: ['Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'TypeScript'],
        frontend: ['React.js', 'Material-UI', 'Socket.IO Client', 'TypeScript', 'Vite'],
      },
      image: '/justgida-dashboard.png',
      gradient: 'from-blue-600 to-cyan-600',
      link: 'https://justgida.com',
    },
    {
      id: 2,
      title: 'Çelik Denizcilik Web Sitesi',
      description: 'Modern ve profesyonel bir kurumsal web sitesi tasarımı. Denizcilik sektöründe öncü olan Çelik Denizcilik için geliştirilen bu platform, şirketin hizmetlerini ve değerlerini etkili bir şekilde yansıtıyor.',
      features: [
        { icon: '🚢', text: 'Filo Yönetimi' },
        { icon: '🌐', text: 'Çok Dilli Destek' },
        { icon: '📱', text: 'Responsive Tasarım' },
        { icon: '📊', text: 'Online Rezervasyon' },
      ],
      technologies: {
        frontend: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion'],
      },
      image: '/celik-website.png',
      gradient: 'from-indigo-600 to-blue-600',
      link: 'https://celiklashing.com',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">JustCode</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Modern web ve mobil uygulamalar geliştirerek işletmelerin dijital dönüşümüne öncülük ediyoruz.
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Projelerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Her biri kendi alanında öncü olan müşterilerimiz için geliştirdiğimiz özel çözümler.
            </p>
          </motion.div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <h3 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${project.gradient}`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">{project.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <span>{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    {project.technologies.backend && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.backend.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.frontend.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Değerlerimiz</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Modern teknolojiler ve yenilikçi yaklaşımlarla müşterilerimizin dijital dönüşümüne öncülük ediyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🚀',
                title: 'İnovasyon',
                description: 'En son teknolojileri kullanarak yenilikçi çözümler üretiyoruz.',
              },
              {
                icon: '🎯',
                title: 'Kalite',
                description: 'Her projemizde en yüksek kalite standartlarını hedefliyoruz.',
              },
              {
                icon: '🤝',
                title: 'İşbirliği',
                description: 'Müşterilerimizle yakın işbirliği içinde çalışarak başarıya ulaşıyoruz.',
              },
              {
                icon: '💡',
                title: 'Çözüm Odaklı',
                description: 'Karmaşık problemlere pratik ve etkili çözümler sunuyoruz.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 