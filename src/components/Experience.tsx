import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    type: 'education',
    title: 'Bachelor of Computer Applications (BCA)',
    organization: 'Final Year Student',
    date: '2023 - Present',
    description: 'Pursuing a comprehensive curriculum in computer science, focusing on software engineering principles, database management, and modern application development. Active in tech communities and continuous learning.',
    icon: GraduationCap,
  },
  {
    type: 'experience',
    title: 'Flutter & Node.js Developer',
    organization: 'Freelance / Open Source',
    date: '2025 - Present',
    description: 'Architecting and building full-stack applications with beautiful cross-platform UIs in Flutter and robust, scalable RESTful APIs using Node.js and Express.',
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Education <span className="text-gradient">&</span> Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and practical experience in building modern software.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group">

                {/* Mobile/Tablet alignment container */}
                <div className="flex items-center w-full md:w-auto">
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-brand-bg border border-brand-primary/50 text-brand-primary group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all z-10 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                    <item.icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                >
                  <div className="bg-[#131722] p-6 rounded-2xl border border-white/5 hover:border-brand-primary/50 transition-colors">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-brand-secondary bg-brand-secondary/10 rounded-full">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-md text-brand-secondary mb-3 font-medium">
                      {item.organization}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
