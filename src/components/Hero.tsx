import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, X, Info } from 'lucide-react';


export default function Hero() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen -z-10" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] mix-blend-screen -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 hidden md:block w-32 h-32 rounded-full overflow-hidden border-2 border-brand-primary/30 p-1 bg-white/5 backdrop-blur-sm"
        >
          {/* Avatar placeholder with an astro/developer vibe */}
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-secondary to-brand-primary flex items-center justify-center">
            <a href="https://github.com/Alansherhan" target='_blank' rel="noopener noreferrer"><span className="text-4xl"><Github /></span></a>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Building <span className="text-gradient">seamless</span> mobile experiences. <br className="hidden md:block" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-xl md:text-2xl text-gray-400 font-mono mb-10 max-w-3xl"
        >
          Final-year BCA Student <span className="text-brand-primary">|</span> Flutter & Node.js Developer.
          {/* <span className="text-brand-secondary">|</span> */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-6 w-full sm:w-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brand-primary/10 border border-brand-primary hover:bg-brand-primary/20 rounded-lg transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white rounded-lg transition-all"
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                View CV
              </span>
            </a>
            <button
              onClick={() => setIsAboutOpen(true)}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-brand-secondary bg-brand-secondary/10 border border-brand-secondary/30 hover:bg-brand-secondary/20 rounded-lg transition-all"
            >
              <span className="flex items-center gap-2">
                <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
                More About Me
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* About Me Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl p-8 rounded-2xl bg-[#131722] border border-brand-secondary/30 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close About Modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h2 className="text-3xl font-bold text-white mb-6">About <span className="text-gradient">Me</span></h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed font-sans">
                <p>
                  Hi, I'm <strong className="text-white">Alan Sherhan KP</strong>, a Final-year BCA student deeply passionate about crafting elegant mobile and web solutions. My journey in tech is driven by an obsession with creating seamless user experiences and robust backend architectures.
                </p>
                <p>
                  Specializing as a <strong>Flutter & Node.js Developer</strong>, I bridge the gap between beautiful front-end designs and scalable server-side systems. Whether I'm building integrated disaster management platforms like ReliefFlow or community-driven utility apps, I thrive on solving complex problems.
                </p>
                <p>
                  I am a strong believer in continuous learning. I constantly explore new technologies and best practices, aiming to expand my skill set to build more efficient, accessible, and scalable solutions.
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        {/* y<span className="text-sm font-mono text-gray-500">Scroll</span> */}
        <div className="w-[1px] h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
