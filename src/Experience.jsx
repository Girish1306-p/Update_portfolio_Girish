import React from "react";
import { motion } from "framer-motion";

const experience = {
  role: "Frontend Developer Intern",
  company: "CodeDais Software and Research Pvt. Ltd.",
  duration: "11 Aug 2025 - 15 Nov 2025",
  points: [
    "Developed fully responsive web interfaces using HTML, CSS, JavaScript, TailwindCSS, and Bootstrap.",
    "Built reusable UI components and optimized frontend workflow.",
    "Collaborated with senior developers to improve UI/UX consistency.",
    "Enhanced website speed and implemented mobile-first designs.",
    "Worked on real-world client projects and improved overall user experience."
  ],
  tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Bootstrap"],
};

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-4 md:px-6 text-white bg-black relative">
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          My <span className="text-cyan-400">Experience</span>
        </motion.h2>

        {/* Timeline Wrapper */}
        <div className="relative border-l border-cyan-500/30 pl-8">

          {/* Timeline Glow Line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500/20 blur-[2px]"></div>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative mb-10"
          >
            {/* Dot */}
            <div className="absolute -left-5 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]"></div>

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-cyan-300/20 p-6 rounded-2xl shadow-xl 
                            hover:shadow-cyan-500/40 transition-all duration-300">

              {/* Company Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                  <i className="fas fa-building text-cyan-300 text-lg"></i>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cyan-300">{experience.role}</h3>
                  <p className="text-gray-300 text-sm">{experience.company}</p>
                  <p className="text-gray-400 text-xs">{experience.duration}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 mt-4">
                {experience.points.map((pt, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-cyan-400">•</span> {pt}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {experience.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 
                               border border-cyan-400/30 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
