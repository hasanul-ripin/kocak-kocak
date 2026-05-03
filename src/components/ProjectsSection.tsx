import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  // ... (Data projects tetap sama)
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern yang ada di HP bisa digunakan untuk belanja online.',
    tags: ['Shopee', 'Lazada', 'Tokopedia'],
    image: '🛒',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: 'https://github.com/hasanul-ripin/kocak-kocak.git',
    demo: 'https://www.tokopedia.com/',
  },
  {
    title: 'Learning Platform',
    description: 'Platform pembelajaran online yang mempermudah kamu dalam belajar.',
    tags: ['Ruang Guru', 'Duoligo', 'Quipper'],
    image: '📚',
    color: 'from-purple-500/20 to-pink-500/20',
    github: 'https://github.com/hasanul-ripin/kocak-kocak.git',
    demo: 'https://app.ruangguru.com/',
  },
  {
    title: 'Social Media Platform',
    description: 'Platform yang sangat berguna untuk social media dan sharing-sharing.',
    tags: ['WhatsApp', 'TikTok', 'Instagram'],
    image: '📊',
    color: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/hasanul-ripin/kocak-kocak.git',
    demo: 'https://www.instagram.com/',
  },
  {
    title: 'AI Platform',
    description: 'Situs atau APK berbasis AI untuk mempermudah mencari informasi.',
    tags: ['ChatGPT', 'Gemini', 'GoogleAI'],
    image: '🤖',
    color: 'from-green-500/20 to-teal-500/20',
    github: 'https://github.com/hasanul-ripin/kocak-kocak.git',
    demo: 'https://gemini.google.com/',
  },
  {
    title: 'Video Editing Tutorial',
    description: 'Video tutorial yang mempermudah pengerjaan suatu tugas.',
    tags: ['TikTok', 'Instagram', 'YouTube'],
    image: '🎬',
    color: 'from-red-500/20 to-orange-500/20',
    isContent: true,
    youtube: 'https://www.youtube.com/',
  },
  {
    title: 'Coding Tips & Tricks',
    description: 'Konten tips & tricks dalam melakukan proggaming atau coding.',
    tags: ['Instagram', 'TikTok', 'YouTube'],
    image: '💡',
    color: 'from-cyan-500/20 to-blue-500/20',
    isContent: true,
    youtube: 'https://www.youtube.com/',
  },
];

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 80, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 80, damping: 20 });

  // Mengurangi derajat rotasi di mobile nantinya bisa menggunakan media query di CSS
  // Namun di sini kita set nilai standar yang aman
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    // Cek jika device memiliki pointer fine (mouse), bukan touch
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    x.set( (e.clientX - rect.left) / rect.width - 0.5);
    y.set( (e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group h-full perspective-1000"
    >
      <div className="h-full p-4 md:p-6 glass rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-100 flex flex-col">
        {/* Kontainer Gambar Responsif */}
        <div className={`aspect-[16/10] sm:aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color} shrink-0`}>
          <motion.span 
            className="text-5xl md:text-6xl inline-block select-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {project.image}
          </motion.span>
        </div>
        
        {/* Area Konten */}
        <div className="flex flex-col flex-grow space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base md:text-lg font-bold group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
            {project.isContent && (
              <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-primary/10 text-primary font-bold shrink-0">
                CONTENT
              </span>
            )}
          </div>
          
          <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 md:line-clamp-3">
            {project.description}
          </p>
          
          {/* Tags Responsif */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[10px] md:text-xs rounded-md bg-slate-100 text-slate-600 font-medium border border-slate-200/50">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Tombol Aksi Responsif */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.github && (
              <Button variant="outline" size="sm" className="rounded-full text-xs h-8 md:h-9 flex-grow sm:flex-grow-0" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-3.5 w-3.5 mr-1.5" /> Code</a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" className="rounded-full text-xs h-8 md:h-9 flex-grow sm:flex-grow-0" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-3.5 w-3.5 mr-1.5" /> Demo</a>
              </Button>
            )}
            {project.youtube && (
              <Button size="sm" variant="default" className="rounded-full text-xs h-8 md:h-9 flex-grow sm:flex-grow-0 bg-red-600 hover:bg-red-700" asChild>
                <a href={project.youtube} target="_blank" rel="noopener noreferrer"><Play className="h-3.5 w-3.5 mr-1.5 fill-current" /> Watch</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary text-sm md:text-base font-bold uppercase tracking-wider mb-2 block">My Work</span>
          <h2 className="font-display text-2xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">Projects &amp; Karya</h2>
          <div className="w-16 md:w-24 h-1.5 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Grid System Responsif: 1 kolom di HP, 2 di Tablet, 3 di Laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}