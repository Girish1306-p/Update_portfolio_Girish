import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 relative overflow-hidden">

  {/* Neon Glow Blobs */}
  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/20 blur-[120px] rounded-full"></div>
  <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500/20 blur-[150px] rounded-full"></div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

    {/* Brand Section */}
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold tracking-wide">
        Girish <span className="text-cyan-400">Panda</span>
      </h2>
      <p className="text-gray-400 text-sm leading-snug">
        Frontend Developer • React.js • UI/UX  
        Creating modern, aesthetic, and high-performance web experiences.
      </p>
    </div>

    {/* Quick Links */}
    <div className="flex flex-col gap-2">
      <h3 className="text-base font-semibold text-cyan-400 mb-1">Quick Links</h3>

      <a href="#home" className="footerLink">Home</a>
      <a href="#about" className="footerLink">About</a>
      <a href="#projects" className="footerLink">Projects</a>
      <a href="#contact" className="footerLink">Contact</a>
    </div>

    {/* Contact */}
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-cyan-400 mb-1">Reach Me</h3>

      <div className="flex items-center gap-2 text-sm text-gray-300">
        <FontAwesomeIcon icon={faEnvelope} className="text-cyan-300 text-base" />
        <a href="mailto:girish.panda2001@gmail.com" className="hover:text-white transition">
          girish.panda2001@gmail.com
        </a>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-300">
        <FontAwesomeIcon icon={faPhone} className="text-green-300 text-base" />
        <a href="tel:+91981236806" className="hover:text-white transition">
          +91 981236806
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3 mt-1">
  {[faGithub, faLinkedin, faTwitter, faInstagram].map((icon, index) => (
    <a
      key={index}
      href="#"
      className="w-8 h-8 flex items-center justify-center rounded-full 
                 bg-white/5 border border-white/10 backdrop-blur-sm
                 text-gray-300 hover:text-cyan-400 
                 hover:bg-cyan-400/10 hover:border-cyan-400/40
                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,255,0.4)]
                 hover:-translate-y-1"
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
    </a>
  ))}
</div>

    </div>
  </div>

  {/* Bottom Line */}
  <div className="relative z-10 mt-8 pt-4 border-t border-white/10 text-center">
  <p className="text-[11px] md:text-[12px] text-gray-400 tracking-wide">
    © {new Date().getFullYear()} 
    <span className="mx-1 text-cyan-400 font-semibold hover:tracking-wider transition-all duration-300">
      Girish Panda
    </span>
    | Crafted with passion & precision.
  </p>

  <p className="text-[10px] md:text-[11px] text-gray-500 mt-1 italic">
    Designed & Developed by <span className="text-cyan-300">Girish</span> — Frontend Developer & UI/UX Designer
  </p>
</div>


  {/* Footer Hover Link Style */}
  <style>{`
    .footerLink {
      color: #c8c8c8;
      font-size: 0.9rem;
      transition: 0.3s ease;
    }
    .footerLink:hover {
      color: white;
      transform: translateX(4px);
    }
  `}</style>

</footer>

  );
}
