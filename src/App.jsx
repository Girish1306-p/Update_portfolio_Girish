import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import AboutSection from "./AboutSection";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// Importing FontAwesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function App() {

  // FINAL FIXED TYPING EFFECT
  useEffect(() => {
    const roles = [
      "Web Developer",
      "Frontend Designer",
      "UI/UX Designer",
    ];

    let index = 0;
    let charIndex = 0;
    const heading = document.querySelector(".typing-rotate");

    if (!heading) return;

    heading.textContent = ""; // VERY IMPORTANT — Clear on load

    function type() {
      heading.textContent = roles[index].substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === roles[index].length) {
        setTimeout(erase, 1200);
      } else {
        setTimeout(type, 100);
      }
    }

    function erase() {
      heading.textContent = roles[index].substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        index = (index + 1) % roles.length;
        setTimeout(type, 300);
      } else {
        setTimeout(erase, 60);
      }
    }

    type();
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-16 h-[max-content] bg-black min-h-screen">

        {/* HERO SECTION */}
        <section
          id="home"
          className="relative flex flex-col md:flex-row items-center justify-center px-6 py-6 md:px-12 md:py-6 text-white max-w-5xl mx-auto mt-6"
        >
          {/* GLOWING BLOB SHAPES */}
          <div className="hidden md:block absolute -top-10 left-0 w-52 h-52 bg-gradient-to-br from-cyan-500/40 to-blue-500/30 
      rounded-[60%_40%_70%_30%/60%_30%_70%_40%] blur-[70px] animate-blob">
          </div>

          <div className="hidden md:block absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/40 to-pink-500/30 
      rounded-[45%_55%_60%_40%/50%_40%_60%_50%] blur-[80px] animate-blob animation-delay-2000">
          </div>

          <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-br 
      from-blue-400/30 to-cyan-400/20 rounded-[50%_50%_70%_30%/40%_60%_40%_60%] 
      blur-[90px] animate-blob animation-delay-4000">
          </div>

          {/* LEFT SIDE — TEXT CONTENT */}
          <div className="flex-1 flex flex-col justify-center space-y-4 md:pr-4">

            <h1
              className="hero-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug 
      bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-400"
            >
              Hi, I'm Girish Panda
            </h1>

            {/* Typing Effect Text */}
            <h2 className="typing-rotate text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 h-6"></h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-base max-w-sm leading-relaxed w-full">
              Motivated MCA graduate | Frontend Developer | React.js & MERN stack enthusiast.
              Passionate about building modern, responsive, and interactive web applications.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/girish-panda"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl 
                   border border-cyan-400/40 flex items-center justify-center 
                   text-cyan-300 hover:text-white hover:border-cyan-400 
                   transition transform hover:scale-110 hover:shadow-[0_0_12px_rgba(0,255,255,0.5)]"
              >
                <i className="fab fa-linkedin text-lg"></i>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/__natures_creations__"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl 
                   border border-pink-400/40 flex items-center justify-center 
                   text-pink-300 hover:text-white hover:border-pink-500 
                   transition transform hover:scale-110 hover:shadow-[0_0_12px_rgba(255,0,150,0.5)]"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/175YeNpUiD/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl 
                   border border-blue-400/40 flex items-center justify-center 
                   text-blue-300 hover:text-white hover:border-blue-500 
                   transition transform hover:scale-110 hover:shadow-[0_0_12px_rgba(0,140,255,0.5)]"
              >
                <i className="fab fa-facebook text-lg"></i>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9861236806"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl 
                   border border-green-400/40 flex items-center justify-center 
                   text-green-300 hover:text-white hover:border-green-500 
                   transition transform hover:scale-110 hover:shadow-[0_0_12px_rgba(0,255,100,0.5)]"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
            </div>

            {/* CV Button */}
            <a
              href="./Girish_panda.pdf"
              download="Girish_Panda_CV.pdf"
              className="mt-4 inline-block btn-gradient
                 hover:shadow-[0_0_18px_rgba(0,200,255,0.5)]
                 hover:scale-105 transition-all w-max fit-content text-center"
            >
              Download CV <FontAwesomeIcon
                icon={faDownload}
                className="text-white text-md drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]"
              />
            </a>



          </div>

          {/* RIGHT SIDE — PROFILE IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end mt-4 md:mt-0 relative">

            <div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden 
        border-[3px] border-cyan-400/60 shadow-[0_0_30px_rgba(0,255,255,0.35)] 
        animate-float-smooth backdrop-blur-xl"
            >
              <img
                src="/profile_photo.jpg"
                alt="Girish Panda"
                className="w-full h-full object-cover scale-[1.03]"
              />

              <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-pulse"></div>

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br 
          from-white/20 via-transparent to-transparent 
          opacity-40 mix-blend-overlay pointer-events-none"
              ></div>
            </div>

            <div className="absolute -top-8 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-16 -right-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <AboutSection />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* CONTACT SECTION */}
        <Contact />

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
