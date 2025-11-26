import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React, TailwindCSS, and Framer Motion. Fully responsive with smooth UI animations.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    img: "/update_portfolio.png",
    live: "#",
    code: "#",
  },
  {
    title: "Cafe Management System",
    description:
      "A complete cafe management system built using HTML, CSS, JavaScript, Python, Django, and MySQL.",
    tech: ["SQLite", "Django", "Python", "HTML", "CSS", "JavaScript"],
    img: "/cafe.png",
    live: "#",
    code: "#",
  },
  {
    title: "Food & Grocery Website",
    description:
      "A full-stack grocery website built using PHP and MySQL with modern frontend UI.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    img: "/grocery.jpg",
    live: "#",
    code: "#",
  },
  {
    title: "Library Management System",
    description:
      "Full MERN stack library system with CRUD operations, authentication, and clean UI.",
    tech: ["React", "Node", "MongoDB", "Express"],
    img: "/library.png",
    live: "#",
    code: "#",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-6 px-6 text-white relative">
      {/* Neon Glow Background Blobs */}
     

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 relative"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="group relative overflow-hidden rounded-2xl
                             bg-white/10 backdrop-blur-2xl 
                             border border-white/20 
                             shadow-xl hover:shadow-cyan-500/40
                             transition-all duration-300
                             w-[90%] sm:w-82 h-[max-content] md:h-[max-content] p-1"
                  style={{ transformStyle: "preserve-3d", transition: "transform 0.4s ease" }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;

                    const rotateX = ((y - centerY) / 25).toFixed(2);
                    const rotateY = ((centerX - x) / 25).toFixed(2);
                    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
                  }}
                >
                  {/* Image */}
                  <div className="h-40 w-full overflow-hidden rounded-t-xl">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col h-[250px] justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-sm mt-2 line-clamp-5">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map((item, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-md border bg-white/10 border-white/20 text-gray-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 mt-3">
                      <a
                        href={project.live}
                        className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                      </a>

                      <a
                        href={project.code}
                        className="flex items-center gap-1 text-sm text-gray-300 hover:text-gray-200"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faCode} /> Code
                      </a>
                    </div>
                  </div>

                  {/* Glow Overlay */}
                  
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
        </Swiper>
          <div className="swiper-button-prev-custom hidden md:flex absolute top-1/2 left-[-55px] w-10 h-10 rounded-full bg-white/10 text-cyan-400 items-center justify-center z-40 hover:bg-cyan-500/20 cursor-pointer">
            &#10094;
          </div>
          <div className="swiper-button-next-custom hidden md:flex absolute top-1/2 right-[-20px] w-10 h-10 rounded-full bg-white/10 text-cyan-400 items-center justify-center z-40 hover:bg-cyan-500/20 cursor-pointer">
            &#10095;
          </div>
      </div>
    </section>
  );
}
