import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SKILLS = [
  'Git and GitHub familiarity',
  'MongoDB',
  'Front-end development',
  'Flutter framework',
  'Code debugging',
];

export default function TerminalSkills() {
  const [typingComplete, setTypingComplete] = useState(false);
  const command = 'npx skills list --installed';
  const [displayedCommand, setDisplayedCommand] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedCommand(command.slice(0, i));
      i++;
      if (i > command.length) {
        clearInterval(intervalId);
        setTimeout(() => setTypingComplete(true), 500);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-white/10 bg-[#1C1E26]/80 backdrop-blur-md shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#2A2D37] border-b border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-gray-400 font-mono flex items-center gap-2">
              <span className="opacity-50">~</span> 
              <span>skills — bash</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base min-h-[300px]">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-brand-primary">user@deepspace</span>
              <span className="text-white">:</span>
              <span className="text-brand-secondary">~/portfolio</span>
              <span className="text-white">$</span>
              <span className="text-white font-medium">
                {displayedCommand}
                {!typingComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 md:h-5 bg-white ml-1 align-middle"
                  />
                )}
              </span>
            </div>

            {typingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 space-y-3"
              >
                <div className="text-gray-400 mb-4">Fetching verified skills...</div>
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400">✔</span>
                    <span className="text-brand-primary">[{index + 1}]</span>
                    <span className="text-white hover:text-brand-secondary transition-colors cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: SKILLS.length * 0.15 + 0.6 }}
                  className="mt-6 flex items-center gap-2 text-gray-300"
                >
                  <span className="text-brand-primary">user@deepspace</span>
                  <span className="text-white">:</span>
                  <span className="text-brand-secondary">~/portfolio</span>
                  <span className="text-white">$</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-4 md:h-5 bg-white ml-1 align-middle"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
