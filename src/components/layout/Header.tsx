'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="relative bg-white mx-4 mt-4 rounded-2xl shadow-[0_10px_50px_-12px_rgba(0,0,0,0.35)]">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center -my-8">
              <Image 
                src="/isletme4.png" 
                alt="Just Logo" 
                width={200} 
                height={80} 
                className="w-auto h-28"
                style={{
                  filter: 'brightness(0)', // Logoyu siyah yapar
                }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Sektörler Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setOpenMenu('sectors')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="px-4 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-1 text-gray-600 hover:text-gray-900">
                  Sektörler
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {openMenu === 'sectors' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl py-2 mt-2"
                    >
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
                        <Link href="/sectors" className="block">
                          <h4 className="font-semibold text-gray-900">Tüm Sektörler</h4>
                          <p className="text-sm text-gray-500">Sektörlerimiz hakkında genel bilgi</p>
                        </Link>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Link href="/sectors/justfood" className="block">
                          <h4 className="font-semibold text-gray-900">JustFood</h4>
                          <p className="text-sm text-gray-500">Restoran & Cafe İşletmeciliği</p>
                        </Link>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Link href="/sectors/justcode" className="block">
                          <h4 className="font-semibold text-gray-900">JustCode</h4>
                          <p className="text-sm text-gray-500">Yazılım Geliştirme (Web & Mobil uygulamalar)</p>
                        </Link>
                      </div>
                      <div className="px-4 py-3 hover:bg-gray-50 transition-colors">
                        <Link href="/sectors/justcreative" className="block">
                          <h4 className="font-semibold text-gray-900">JustCreative</h4>
                          <p className="text-sm text-gray-500">Tasarım (UI/UX ve Grafik tasarım)</p>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/about" className="px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900">
                Hakkımızda
              </Link>

              <Link href="/contact" className="px-4 py-2 rounded-full hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900">
                İletişim
              </Link>

              <div className="h-6 w-px bg-gray-200 mx-2" />

              <Link 
                href="/career" 
                className="ml-2 px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors font-medium"
              >
                Kariyer →
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-50 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white rounded-b-2xl"
            >
              <div className="px-6 py-4 space-y-2 border-t border-gray-100">
                <Link 
                  href="/sectors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
                >
                  Sektörler
                </Link>
                <Link 
                  href="/sectors/justfood"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors ml-4"
                >
                  JustFood
                </Link>
                <Link 
                  href="/sectors/justcode"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors ml-4"
                >
                  JustCode
                </Link>
                <Link 
                  href="/sectors/justcreative"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-lg transition-colors ml-4"
                >
                  JustCreative
                </Link>
                <Link 
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
                >
                  Hakkımızda
                </Link>
                <Link 
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 hover:text-gray-900"
                >
                  İletişim
                </Link>
                <Link 
                  href="/career"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600 transition-colors text-center font-medium"
                >
                  Kariyer →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 