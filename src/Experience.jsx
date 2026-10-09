import React from "react";
import { motion } from "framer-motion";

const experience = [
  {
    role: "Computer Science Teacher",
    company: "Bidyarthi Science HS School",
    duration: "05 January 2026 – 18 July 2026",
    points: [
      "Taught DBMS, Web Technology, and Software Engineering to +2 and +3 students.",
      "Explained computer science concepts and supported students with subject-related questions."
    ],
    tech: ["DBMS", "Web Technology", "Software Engineering"],
    tone: "cyan"
  },
  {
    role: "Frontend Developer Intern",
    company: "CodeDais Software and Research Pvt. Ltd., Bhubaneswar",
    duration: "11 August 2025 – 15 November 2025",
    points: [
      "Developed responsive UI components using HTML, CSS, JavaScript, and Tailwind CSS.",
      "Improved UI performance and responsiveness for a better user experience.",
      "Collaborated with team members to enhance frontend functionality and assisted with reporting interfaces for test results."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    tone: "blue"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black px-5 py-12 text-white sm:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-9 text-center text-3xl font-bold md:text-4xl"
        >
          My <span className="text-cyan-400">Experience</span>
        </motion.h2>
        <div className="relative space-y-6 border-l border-cyan-500/30 pl-5 sm:pl-7">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-cyan-300/20 bg-white/[0.045] p-4 shadow-[0_0_24px_rgba(0,200,255,0.05)] transition hover:border-cyan-300/40 hover:shadow-[0_0_26px_rgba(0,200,255,0.10)] sm:p-6"
            >
              <span aria-hidden="true" className="absolute -left-[1.72rem] top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.7)] sm:-left-[2.22rem]" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300 sm:text-xl">{item.role}</h3>
                  <p className="text-sm text-gray-300">{item.company}</p>
                </div>
                <p className="text-xs text-gray-400 sm:max-w-[42%] sm:text-right">{item.duration}</p>
              </div>
              <ul className="mt-4 space-y-2">
                {item.points.map(point => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-gray-300">
                    <span aria-hidden="true" className="text-cyan-400">•</span><span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tech.map(tech => <span key={tech} className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-3 py-1 text-xs text-cyan-200">{tech}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
