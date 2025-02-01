'use client';

import { useState, useMemo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const fadeInUpVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'service_piujolg',
        'template_zwo21tw',
        form,
        'FIzAbHjKzUVsnqKvc'
      );
      setIsSuccess(true);
      form.reset();
    } catch {
      setError('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex min-h-screen flex-col pt-32 bg-white">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-red-500 to-pink-500" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <m.h1 
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-black text-white mb-8"
            >
              İletişim
            </m.h1>
            <m.p
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Sorularınız için bize ulaşın, en kısa sürede dönüş yapalım.
            </m.p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4">
            <m.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            >
              {/* Form */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                      İsim Soyisim
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="user_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900"
                      placeholder="İsminizi girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="user_email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all text-gray-900"
                      placeholder="Mesajınızı girin"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 px-8 rounded-xl text-white font-semibold ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    } transition-all duration-200`}
                  >
                    {isLoading ? 'Gönderiliyor...' : 'Gönder'}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                  )}
                  {isSuccess && (
                    <p className="text-green-500 text-sm mt-2">
                      Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                    </p>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    İletişim Bilgileri
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Adres</h3>
                        <p className="text-gray-600 mt-1">Manisa Celal Bayar Üniversitesi Teknokent No:109</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">E-posta</h3>
                        <p className="text-gray-600 mt-1">info@justcompany.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Telefon</h3>
                        <p className="text-gray-600 mt-1">+90 (236) 233 66 33</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Konum
                  </h2>
                  <div className="rounded-xl overflow-hidden h-[300px] relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12470.901036099374!2d27.3968992!3d38.609193399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c95dbd382a624c7%3A0xaf5138265fb3975b!2sJust%20Studio!5e0!3m2!1str!2str!4v1738388052268!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 