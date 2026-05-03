import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Rocket, Waves, Cake, GraduationCap, Layout, Quote } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Siswa MAN 1 Banda Aceh",
    category: "Pendidikan",
    description: "Saat ini saya sedang menuntut ilmu di MAN 1 Banda Aceh, salah satu sekolah terbaik di Aceh.",
    motivation: "Pendidikan adalah senjata paling mematikan di dunia, karena dengan itu Anda bisa mengubah dunia.",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-emerald-500 to-teal-800"
  },
  {
    id: 2,
    title: "Kebanggaan Kelas X-11",
    category: "Identitas",
    description: "Aktif belajar dan berkolaborasi sebagai siswa di kelas X-11 untuk meraih prestasi akademik.",
    motivation: "Disiplin adalah jembatan antara tujuan dan pencapaian.",
    icon: Layout,
    color: "bg-gradient-to-br from-indigo-600 to-purple-900"
  },
  {
    id: 3,
    title: "Lahir 20 Juni 2010",
    category: "Biodata",
    description: "Lahir di Banda Aceh. Menjalani masa muda dengan semangat belajar yang tinggi.",
    motivation: "Waktu Anda terbatas, jangan habiskan dengan menjalani hidup orang lain.",
    icon: Cake,
    color: "bg-gradient-to-br from-orange-500 to-red-700"
  },
  {
    id: 4,
    title: "Masa Depan Jadi CEO",
    category: "Cita-cita",
    description: "Cita-cita besar saya adalah menjadi seorang CEO yang inovatif dan membawa perubahan.",
    motivation: "Pemimpin besar tidak lahir dari kemudahan, mereka lahir melalui perjuangan yang tak henti.",
    icon: Rocket,
    color: "bg-gradient-to-br from-blue-600 to-blue-900"
  },
  {
    id: 5,
    title: "Hobi Berenang",
    category: "Hobi",
    description: "Di luar jam sekolah, saya menghabiskan waktu dengan berenang agar tetap bugar dan fokus.",
    motivation: "Jangan takut untuk terjun ke dalam tantangan, karena di sanalah kekuatan Anda diuji.",
    icon: Waves,
    color: "bg-gradient-to-br from-cyan-500 to-blue-700"
  }
];

export default function CarouselSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Bungkus fungsi dalam useCallback agar stabil
  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // LOGIKA GESER OTOMATIS
  useEffect(() => {
    const autoPlayTimer = setInterval(() => {
      nextStep();
    }, 5000); // Geser setiap 5 detik

    // Membersihkan timer saat komponen tidak aktif atau saat index berubah
    return () => clearInterval(autoPlayTimer);
  }, [nextStep, index]); 

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    })
  };

  const CurrentIcon = slides[index].icon;

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Quote className="h-5 w-5" />
                <span className="font-medium tracking-wider uppercase text-sm">Motivation & Profile</span>
              </div>
              <h2 className="font-display text-4xl font-bold">Tentang Azzaki</h2>
            </div>
            
            <div className="flex gap-2">
              <button onClick={prevStep} className="p-3 rounded-xl glass hover:bg-primary/10 transition-all z-20">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={nextStep} className="p-3 rounded-xl glass hover:bg-primary/10 transition-all z-20">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[480px] md:min-h-[400px] w-full overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
                className={`absolute inset-0 w-full h-full ${slides[index].color} flex items-center p-8 md:p-16`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  <div className="order-2 md:order-1 text-left">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="bg-white/20 px-3 py-1 rounded-md text-white text-xs font-bold mb-4 inline-block backdrop-blur-sm">
                        {slides[index].category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 italic leading-tight">
                        {slides[index].title}
                      </h3>
                      <p className="text-white/90 text-lg mb-6 max-w-md leading-relaxed">
                        {slides[index].description}
                      </p>
                      
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="pl-4 border-l-2 border-white/50 py-1 mt-4"
                      >
                        <p className="text-white font-medium italic text-sm md:text-base opacity-90 uppercase tracking-wide">
                          "{slides[index].motivation}"
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="order-1 md:order-2 flex justify-center md:justify-end opacity-20 md:opacity-30">
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <CurrentIcon size={240} strokeWidth={1} color="white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    i === index ? "w-12 bg-white" : "w-3 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}