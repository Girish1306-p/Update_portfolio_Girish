// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: "", error: "" });

  const stats = [
    { icon: faEnvelope, label: "Email", value: "girish.panda2001@gmail.com", link: "mailto:girish.panda2001@gmail.com", color: "cyan-400" },
    { icon: faPhone, label: "Phone", value: "+91 981236806", link: "tel:+91981236806", color: "green-400" },
    { icon: faWhatsapp, label: "WhatsApp", value: "+91 981236806", link: "https://wa.me/981236806", color: "green-500" },
    { icon: faLinkedin, label: "LinkedIn", value: "Girish Panda", link: "https://www.linkedin.com/in/girish-panda", color: "blue-500" },
  ];

  const validate = () => {
    const e = {};

    // Name: letters and spaces only (min 2)
    if (!form.name || !/^[A-Za-z ]{2,}$/.test(form.name.trim())) {
      e.name = "Name should contain only letters and be at least 2 characters.";
    }

    // Email: simple RFC-ish check
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = "Please enter a valid email address.";
    }

    // Phone: digits only, 10–12 digits
    if (!form.phone || !/^\d{10,12}$/.test(form.phone.trim())) {
      e.phone = "Phone must be 10 to 12 digits.";
    }

    // Subject: non-empty
    if (!form.subject || form.subject.trim().length < 2) {
      e.subject = "Please add a subject.";
    }

    // Message: at least 10 characters
    if (!form.message || form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setStatus({ loading: false, success: "", error: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: false, success: "", error: "" });

    if (!validate()) return;

    setStatus({ loading: true, success: "", error: "" });

    // prepare payload: include year for template if needed
    const payload = { ...form, year: new Date().getFullYear() };

    try {
      await emailjs.send(
        "service_viptc2q",    // your service ID
        "template_wx6s00h",   // your template ID
        payload,
        "W5zBmipcI5ACb3Bx0"   // your public key
      );

      setStatus({ loading: false, success: "Message sent successfully!", error: "" });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });

      // clear success after 4s
      setTimeout(() => setStatus({ loading: false, success: "", error: "" }), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, success: "", error: "Something went wrong. Please try again later." });
    }
  };

  return (
    <section id="contact" className="relative py-6 px-6 md:px-10 bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Get in <span className="text-cyan-400">Touch</span>
        </motion.h2>

        {/* Stat cards */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/8 backdrop-blur-xl border border-white/10 rounded-xl p-3 flex flex-col items-center justify-center text-center hover:shadow-[0_0_18px_rgba(0,255,255,0.12)] transition"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: i * 0.35, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center mb-1">
                <FontAwesomeIcon icon={s.icon} className={`text-${s.color} text-lg mb-1`} />
                <p className="text-gray-300 text-xs font-semibold">{s.label}</p>
              </div>
              <p className="text-white text-[11px] md:text-sm">{s.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/6 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* inline status */}
          {/* inline status */}
{status.error && <div className="text-red-400 text-sm mb-2">{status.error}</div>}
{status.success && <div className="text-green-400 text-sm mb-2">{status.success}</div>}

{/*  Input Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

  <div>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      placeholder="Your Name"
      className="inputBox w-full py-2.5 text-sm"
    />
    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
  </div>

  <div>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Your Email"
      className="inputBox w-full py-2.5 text-sm"
    />
    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
  </div>

</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

  <div>
    <input
      type="text"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      className="inputBox w-full py-2.5 text-sm"
    />
    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
  </div>

  <div>
    <input
      type="text"
      name="subject"
      value={form.subject}
      onChange={handleChange}
      placeholder="Subject"
      className="inputBox w-full py-2.5 text-sm"
    />
    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
  </div>

</div>

<div className="mb-4">
  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Message"
    rows="5"
    className="inputBox w-full py-2.5 text-sm min-h-[120px]"
  />
  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
</div>

{/* Submit Button */}
<div className="flex justify-center">
  <button
    type="submit"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-400
               text-black font-semibold px-6 py-2.5 rounded-lg shadow-md hover:scale-[1.03] transition"
    disabled={status.loading}
  >
    {status.loading ? "Sending..." : "Send Message"}
  </button>
</div>

        </motion.form>
      </div>

      {/* small styles (tailwind utility classes assumed; extra inputBox styling fallback) */}
      <style>{`
        .inputBox {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 10px 12px;
          border-radius: 10px;
          color: #fff;
          font-size: 0.95rem;
          transition: box-shadow .18s, border-color .18s;
        }
        .inputBox:focus {
          outline: none;
          border-color: rgba(34,211,238,0.85);
          box-shadow: 0 6px 18px rgba(34,211,238,0.06);
        }
      `}</style>
    </section>
  );
}
