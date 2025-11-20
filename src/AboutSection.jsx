import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function AboutSection() {
  return (
      <section
          id="about"
          className="relative py-6 px-6 md:px-12 text-white max-w-6xl mx-auto"
      >
          {/* Glow Background Blobs */}
          <div className="absolute top-10 left-0 w-36 h-36 bg-cyan-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-0 w-48 h-48 bg-purple-500/25 blur-3xl rounded-full"></div>

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center 
    bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              About Me
          </h2>

          {/* Content Wrapper */}
          <div className="grid md:grid-cols-2 gap-12 relative z-10">

              {/* LEFT SIDE — ABOUT TEXT */}
              <div className="space-y-4 border-l-4 border-cyan-400 pl-5">
                  <p className="text-gray-300 text-[15px] leading-relaxed text-justify">
                      Hi there
                      I am MCA graduate from College of IT and Management
                      Education, Bhubaneswar. I completed my BCA from Institute of
                      Technical Education and Research (SOA University), Bhubaneswar.
                  </p>

                  <p className="text-gray-300 text-[15px] leading-relaxed text-justify">
                      I’m from Papadahandi, Nabarangpur.
                      I love building modern, responsive and visually engaging web
                      interfaces using React, JavaScript and TailwindCSS.
                  </p>

                  <p className="text-gray-300 text-[15px] leading-relaxed text-justify">
                      I enjoy learning new technologies, improving UI/UX, and turning
                      ideas into functional, clean & well-designed web products.
                  </p>
              </div>

              {/* RIGHT SIDE — SKILLS GRID */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 w-full">

                  {/* Frontend */}
                  <div className="w-full block break-inside-avoid-column p-4 rounded-xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-lg transition hover:scale-[1.04]
      hover:shadow-cyan-500/20 hover:bg-white/10 duration-300">

                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-cyan-300">
                          <FontAwesomeIcon icon={faLaptopCode} /> Frontend
                      </h4>

                      <ul className="space-y-1 text-[14px] text-gray-200">
                          <li className="flex items-center gap-2"><FontAwesomeIcon icon={faHtml5} className="text-orange-500" /> HTML</li>
                          <li className="flex items-center gap-2"><FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" /> CSS</li>
                          <li className="flex items-center gap-2"><FontAwesomeIcon icon={faJs} className="text-yellow-400" /> JavaScript</li>
                          <li className="flex items-center gap-2"><FontAwesomeIcon icon={faBootstrap} className="text-purple-400" /> Bootstrap</li>

                          {/* TailwindCSS */}
                          <li className="flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                  className="w-5 h-5 text-cyan-400" fill="currentColor">
                                  <path d="M12 4c-3.2 0-5.2 1.6-6 4 1.2-1.6 2.6-2.2 
            4.2-1.8 0.9 0.2 1.6 0.9 2.3 1.6 1.2 1.2 2.6 
            2.4 5.5 2.4 3.2 0 5.2-1.6 6-4-1.2 1.6-2.6 
            2.2-4.2 1.8-0.9-0.2-1.6-0.9-2.3-1.6C16.3 5.2 
            14.9 4 12 4zM6 12c-3.2 0-5.2 1.6-6 4 
            1.2-1.6 2.6-2.2 4.2-1.8 0.9 0.2 1.6 0.9 
            2.3 1.6 1.2 1.2 2.6 2.4 5.5 2.4 3.2 0 
            5.2-1.6 6-4-1.2 1.6-2.6 2.2-4.2 1.8-0.9-0.2-1.6-0.9-2.3-1.6C10.3 
            13.2 8.9 12 6 12z"/>
                              </svg>
                              TailwindCSS
                          </li>
                      </ul>
                  </div>

                  {/* Framework */}
                  <div className="w-full block break-inside-avoid-column p-4 rounded-xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-lg transition hover:scale-[1.04]
      hover:shadow-blue-500/20 hover:bg-white/10 duration-300">

                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-blue-300">
                          <FontAwesomeIcon icon={faReact} /> Framework
                      </h4>

                      <ul className="space-y-1 text-[14px] text-gray-200">
                          <li className="flex items-center gap-2">
                              <FontAwesomeIcon icon={faReact} className="text-cyan-400" /> ReactJS
                          </li>
                      </ul>
                  </div>

                  {/* Database */}
                  <div className="w-full block break-inside-avoid-column p-4 rounded-xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-lg transition hover:scale-[1.04]
      hover:shadow-green-500/20 hover:bg-white/10 duration-300">

                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-green-300">
                          <FontAwesomeIcon icon={faDatabase} /> Database
                      </h4>

                      <ul className="space-y-1 text-[14px] text-gray-200">
                          <li className="flex items-center gap-2">
                              <FontAwesomeIcon icon={faDatabase} className="text-green-400" /> MongoDB
                          </li>
                      </ul>
                  </div>

                  {/* Backend */}
                  <div className="w-full block break-inside-avoid-column p-4 rounded-xl bg-white/5 border border-white/10 
      backdrop-blur-xl shadow-lg transition hover:scale-[1.04]
      hover:shadow-purple-500/20 hover:bg-white/10 duration-300">

                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-purple-300">
                          <FontAwesomeIcon icon={faNodeJs} /> Backend
                      </h4>

                      <ul className="space-y-1 text-[14px] text-gray-200">
                          <li className="flex items-center gap-2">
                              <FontAwesomeIcon icon={faNodeJs} className="text-green-400" /> Node.js
                          </li>
                      </ul>
                  </div>

              </div>



          </div>
      </section>

  );
}
