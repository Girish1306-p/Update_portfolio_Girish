import { useState } from "react";
import Logo from "../assets/logo-girish.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img src={Logo} alt="Logo" className="w-14 h-14 object-contain" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 font-bold text-xl 
              group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.4)] transition">
              Girish.
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
            {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-sm font-medium px-4 py-1 w-max rounded-full 
                  backdrop-blur-xl bg-white/10 border border-white/20 
                  shadow-[0_0_10px_rgba(255,255,255,0.1)]
                  hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-300
                  hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] 
                  transition-all duration-300
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white transition"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <>
                  <path d="M6 18L18 6" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full min-h-screen w-[65%] 
          bg-black/95 backdrop-blur-xl border-r border-white/10 
          z-[999] transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <span className="text-white text-xl font-semibold tracking-wide">MENU</span>
          <button onClick={() => setOpen(false)} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-3 p-6 text-gray-200">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                text-lg font-medium px-5 py-2 rounded-full 
                border border-white/20
                hover:border-cyan-400 hover:text-cyan-300 
                hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]
                transition-all duration-300
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Background overlay when sidebar is open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[99]"
        ></div>
      )}
    </header>
  );
}
