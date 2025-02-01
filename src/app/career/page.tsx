'use client';

import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const departments = [
  { id: 'justfood', name: 'Just Food' },
  { id: 'justcode', name: 'Just Code' },
  { id: 'justcreative', name: 'Just Creative' },
];

const positions = {
  justfood: [
    'Restoran Müdürü',
    'Şef',
    'Garson',
    'Mutfak Personeli',
    'Diğer',
  ],
  justcode: [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Project Manager',
    'Diğer',
  ],
  justcreative: [
    'Grafik Tasarımcı',
    'Motion Designer',
    'Art Director',
    'Sosyal Medya Uzmanı',
    'Diğer',
  ],
};

export default function Career() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    experience: '',
    education: '',
    message: '',
    portfolio: '',
    linkedin: '',
    github: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xdkazzkn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: '',
          position: '',
          experience: '',
          education: '',
          message: '',
          portfolio: '',
          linkedin: '',
          github: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const department = e.target.value;
    setSelectedDepartment(department);
    setFormData(prev => ({
      ...prev,
      department,
      position: '',
    }));
  };

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-center text-white px-4 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kariyer Fırsatları</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Yenilikçi ve dinamik ekibimizin bir parçası olun
            </p>
          </m.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">10+</p>
                <p className="text-gray-600 mt-2">Açık Pozisyon</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">35+</p>
                <p className="text-gray-600 mt-2">Mutlu Çalışan</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">3</p>
                <p className="text-gray-600 mt-2">Farklı Sektör</p>
              </m.div>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">10+</p>
                <p className="text-gray-600 mt-2">Yıllık Deneyim</p>
              </m.div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-center mb-2">Başvuru Formu</h2>
              <p className="text-gray-600 text-center mb-12">
                Kariyerinizde yeni bir sayfa açmak için formu doldurun
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Kişisel Bilgiler */}
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Ad Soyad</span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Adınız Soyadınız"
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">E-posta</span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Telefon</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="0555 555 55 55"
                      />
                    </label>
                  </div>

                  {/* İş Bilgileri */}
                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Departman</span>
                      <select
                        required
                        value={formData.department}
                        onChange={handleDepartmentChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Seçiniz</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Pozisyon</span>
                      <select
                        required
                        value={formData.position}
                        onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        disabled={!selectedDepartment}
                      >
                        <option value="">Seçiniz</option>
                        {selectedDepartment && positions[selectedDepartment as keyof typeof positions].map((pos) => (
                          <option key={pos} value={pos}>
                            {pos}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-gray-700 text-sm font-medium mb-1 block">Deneyim</span>
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Seçiniz</option>
                        <option value="0-1">0-1 Yıl</option>
                        <option value="1-3">1-3 Yıl</option>
                        <option value="3-5">3-5 Yıl</option>
                        <option value="5+">5+ Yıl</option>
                      </select>
                    </label>
                  </div>
                </div>

                {/* Eğitim ve Mesaj */}
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700 text-sm font-medium mb-1 block">Eğitim Bilgileri</span>
                    <input
                      type="text"
                      required
                      value={formData.education}
                      onChange={(e) => setFormData(prev => ({ ...prev, education: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Üniversite, Bölüm, Mezuniyet Yılı"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 text-sm font-medium mb-1 block">Neden Bizimle Çalışmak İstiyorsunuz?</span>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all h-32"
                      placeholder="Motivasyonunuzu ve hedeflerinizi bizimle paylaşın"
                    />
                  </label>
                </div>

                {/* Sosyal Medya ve Portfolio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="block">
                    <span className="text-gray-700 text-sm font-medium mb-1 block">Portfolio URL</span>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="https://portfolio.com"
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 text-sm font-medium mb-1 block">LinkedIn URL</span>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="https://linkedin.com/in/..."
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700 text-sm font-medium mb-1 block">GitHub URL</span>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="https://github.com/..."
                    />
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : (
                      'Başvuruyu Gönder'
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-green-600 bg-green-50 py-3 px-6 rounded-xl inline-block"
                    >
                      Başvurunuz başarıyla alındı. En kısa sürede size dönüş yapacağız.
                    </m.p>
                  )}

                  {submitStatus === 'error' && (
                    <m.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 text-red-600 bg-red-50 py-3 px-6 rounded-xl inline-block"
                    >
                      Başvuru gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                    </m.p>
                  )}
                </div>
              </form>
            </m.div>
          </div>
        </section>
      </main>
    </LazyMotion>
  );
} 