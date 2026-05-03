import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Container Utama: Menggunakan flex-col untuk mobile, flex-row untuk desktop */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* BAGIAN FOTO PROFIL (Sisi Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow p-1 bg-gradient-to-tr from-primary to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img 
                  src="/fotoazzaki.jpg" // Ganti dengan path foto kamu, misal: /profile.jpg
                  alt="Azzaki Hasanul Arifin"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Dekorasi Aksen di belakang foto */}
            <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />
          </motion.div>

          {/* BAGIAN TULISAN (Sisi Kanan) */}
          <div className="text-center md:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                👋 Welcome To My Portfolio
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi I'M
              <br />
              <span className="text-gradient">Azzaki Hasanul Arifin</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8"
            >
              Saya adalah seorang siswa dari MAN 1 Banda Aceh yang
              saat ini sedang belajar di kelas X-11. Ini adalah portofolio saya:
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-glow"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center md:justify-start justify-center gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/hasanul-ripin/kocak-kocak.git', label: 'GitHub' },
                { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}