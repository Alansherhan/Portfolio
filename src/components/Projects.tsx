import { motion } from 'framer-motion';
import { Github, Download } from 'lucide-react';

const PROJECTS = [
  {
    title: 'ReliefFlow',
    description: 'A comprehensive disaster management system integrating an intuitive Flutter frontend with a robust Node.js backend.',
    role: 'Full-Stack Developer',
    features: [
      'Real-time volunteer and resource tracking',
      'Scalable RESTful API for rapid data syncing',
      'Intuitive crisis response dashboard'
    ],
    tech: ['Flutter', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Alansherhan/RelieFlow',
    downloads: [
      { url: 'https://github.com/Alansherhan/RelieFlow/releases/tag/apps', label: 'Download APK' }
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Azan Tracker',
    description: 'A sleek prayer time utility app delivering accurate geographic-based schedules and customizable alerts.',
    role: 'Mobile Developer',
    features: [
      'Accurate geolocation-based prayer times',
      'Customizable notifications and alerts',
      'Sleek, minimalistic UI design'
    ],
    tech: ['Flutter', 'Dart', 'Location API'],
    github: 'https://github.com/Alansherhan/azantracker',
    downloads: [
      { url: 'https://github.com/Alansherhan/azantracker/releases/download/Azan/app-release.apk', label: 'Download APK' }
    ],
    color: 'from-brand-secondary/20 to-purple-500/20',
  },
  {
    title: 'Lost & Found',
    description: 'A community-driven recovery app that helps users post and claim lost items securely and efficiently.',
    role: 'Frontend Developer',
    features: [
      'Secure item posting and claiming flows',
      'Integrated map views for location context',
      'Real-time community matching'
    ],
    tech: ['Flutter', 'Firebase', 'Google Maps'],
    github: 'https://github.com/Alansherhan/Lost-Found',
    downloads: [
      { url: '#', label: 'Download APK' }
    ],
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work in mobile development, backend engineering, and system design.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#131722] rounded-2xl p-6 border border-white/5 hover:border-brand-primary/50 transition-all flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity -z-10 rounded-2xl`} />

              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-bg flex items-center justify-center border border-white/10 group-hover:border-brand-primary/30 transition-colors">
                  <span className="text-2xl font-mono text-brand-primary">0{i + 1}</span>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap gap-5 items-center w-auto lg:w-auto mt-2 lg:mt-0">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 lg:p-1 bg-white/5 rounded-lg lg:bg-transparent" aria-label="Github repository">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.downloads.map((dl, idx) => (
                    <div key={idx} className="relative group/dl flex items-center justify-center">
                      {/* Mobile view - chip style */}
                      <a href={dl.url} className="lg:hidden flex items-center gap-2 px-3 py-1.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded-lg text-xs font-medium hover:bg-brand-primary/20 transition-colors">
                        <Download className="w-4 h-4" />
                        {dl.label}
                      </a>

                      {/* Desktop view - icon with tooltip */}
                      <a href={dl.url} target="_blank" rel="noopener noreferrer" className="hidden lg:block text-gray-400 hover:text-brand-primary transition-colors" aria-label={`Download ${dl.label}`}>
                        <Download className="w-5 h-5" />
                      </a>
                      <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#2A2D37] border border-white/10 text-xs text-white rounded opacity-0 group-hover/dl:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-xl">
                        {dl.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-6 flex-grow">
                <p className="text-sm font-semibold text-white mb-2 font-mono">
                  Role: <span className="text-brand-secondary font-sans">{project.role}</span>
                </p>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-brand-primary mr-2 mt-0.5">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-brand-secondary bg-brand-secondary/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
