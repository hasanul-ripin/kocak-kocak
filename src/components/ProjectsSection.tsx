import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern yang ada di HP bisa digunakan untuk belanja online.',
    tags: ['Shopee', 'Lazada', 'Tokopedia', 'TikTok Shop'],
    image: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Learning Platform',
    description: 'Platform pembelajaran online yang mempermudah kamu dalam belajar.',
    tags: ['Ruang Guru', 'Duolingo', 'Zenius', 'Quipper'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'Platform yang sangat berguna untuk social media dan sharing-sharing.',
    tags: ['WhatsApp', 'Instagram', 'TikTok', 'Facebook'],
    image: '📊',
    color: 'from-orange-500/20 to-red-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Platform',
    description: 'Situs atau APK berbasis AI untuk mempermudah mencari informasi.',
    tags: ['Google', 'ChatGPT', 'Gemini', 'Meta AI'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Video tutorial yang sudah tersebar di banyak platform yang dapat mempermudah pengerjaan suatu tugas.',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips & tricks dalam melakukan proggaming atau coding.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-white/10">
                
                {/* --- BAGIAN IMAGE DENGAN ANIMASI --- */}
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  
                  {/* Dekorasi Partikel Latar Belakang */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3] 
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-white/10 blur-2xl rounded-full"
                  />

                  {/* Emoji Utama dengan Animasi Melayang */}
                  <motion.span 
                    className="text-6xl z-10"
                    animate={{ 
                      y: [0, -12, 0],
                      rotate: index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5] // Rotasi bergantian kiri/kanan
                    }}
                    transition={{ 
                      duration: 3 + (index * 0.2), // Kecepatan sedikit berbeda tiap card
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.2, rotate: 0 }} // Membesar saat kursor di atasnya
                  >
                    {project.image}
                  </motion.span>
                </div>
                
                {/* --- BAGIAN TEKS --- */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Tombol Aksi */}
                  <div className="flex gap-2 pt-2">
                    {project.github && project.github !== '#' && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github}>
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <Button size="sm" className="rounded-full" asChild>
                        <a href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.youtube && project.youtube !== '#' && (
                      <Button size="sm" className="rounded-full bg-red-600 hover:bg-red-700" asChild>
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Watch
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}