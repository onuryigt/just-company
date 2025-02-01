'use client';

import { motion } from 'framer-motion';
import Image from "next/image"

interface StoryCard {
  image: string;
  name: string;
  category: string;
  gradient?: string;
}

interface StatCard {
  number: string;
  title: string;
  gradient: string;
}

const stories: StoryCard[] = [
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    name: 'Ayşe Yılmaz',
    category: 'Fitness',
    gradient: 'from-pink-400 to-rose-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    name: 'Ahmet Demir',
    category: 'Eğitim',
    gradient: 'from-cyan-400 to-blue-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    name: 'Mehmet Kaya',
    category: 'Tasarım & Sanat',
    gradient: 'from-yellow-400 to-amber-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    name: 'Zeynep Şahin',
    category: 'İş & Pazarlama',
    gradient: 'from-red-400 to-rose-600',
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    name: 'Can Yıldız',
    category: 'Kariyer',
    gradient: 'from-purple-400 to-violet-600',
  },
];

const stats: StatCard[] = [
  {
    number: '₺8B+',
    title: 'YARATICILARIMIZIN KAZANCI',
    gradient: 'from-red-500 to-purple-600',
  },
  {
    number: '100K+',
    title: 'YARATICI İŞLETME',
    gradient: 'from-emerald-400 to-teal-600',
  },
  {
    number: '75M+',
    title: 'HİZMET VERİLEN MÜŞTERİ',
    gradient: 'from-violet-400 to-purple-600',
  },
  {
    number: '1000+',
    title: 'MİLYONER YARATICI',
    gradient: 'from-pink-400 to-rose-600',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${story.gradient} opacity-10`} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold mb-2 text-black">{story.name}</h3>
                  <span className="inline-block px-4 py-1 bg-black/10 rounded-full text-sm backdrop-blur-sm">
                    {story.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${stat.gradient} rounded-3xl p-6 text-white aspect-square flex flex-col justify-end`}
            >
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm font-medium leading-tight">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 