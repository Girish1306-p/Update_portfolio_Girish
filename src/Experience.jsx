import React from "react";
import { motion } from "framer-motion";

const experience = {
  role: "Frontend Developer Intern",
  company: "CodeDais Software and Research Pvt. Ltd.",
  duration: "11 Aug 2025 - 15 Nov 2025",
  description:
    "Worked on responsive web applications, implementing modern UI/UX using HTML, CSS, JavaScript, TailwindCSS, and Bootstrap. Built reusable components and enhanced frontend functionality.",
  tech: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Bootstrap"],
};

export default function Experience() {
  return (
    <section id="experience" className="py-6 px-4 md:px-6 text-white relative bg-black">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center"
        >
          My <span className="text-cyan-400">Experience</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-cyan-400/30"></div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-10 md:pl-16 flex flex-col md:flex-row items-start"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-0 w-4 h-4 bg-cyan-400 rounded-full mt-1.5"></div>

            {/* Experience Content */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <h3 className="text-xl font-semibold text-cyan-300">{experience.role}</h3>
              <p className="text-gray-300 text-sm mt-1">{experience.company}</p>
              <p className="text-gray-400 text-xs mt-1">{experience.duration}</p>
              <p className="text-gray-300 mt-3 text-sm">{experience.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-md border bg-white/10 border-white/20 text-gray-200"
                  >
                    {item}
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
