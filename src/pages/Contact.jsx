import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import emailjs from "@emailjs/browser"; // EmailJS import kiya

const Contact = () => {
  // Form State logic
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state add ki

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // --- EMAILJS SETTINGS ---
    const serviceID = "YOUR_SERVICE_ID"; 
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      from_name: formData.firstName + " " + formData.lastName,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_name: "Cologixs Admin",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
        setLoading(false);
        setFormData({ firstName: "", lastName: "", phone: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        alert("Failed to send email. Please check your EmailJS keys.");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <div className="animate-fadeIn font-sans overflow-x-hidden bg-white">
      
      {/* 1. CONTACT HERO SECTION - Aligned to Navbar */}
      <section className="relative bg-gradient-to-r from-[#213252] to-[#0b1120] md:h-[600px] flex items-center pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 md:h-[310px] flex flex-col justify-between items-start text-left order-2 md:order-1">
            <div className="space-y-4 mt-5">
              <span className="text-[#f27c22] font-bold uppercase tracking-[0.2em] text-[13px]">
                CONTACT
              </span>
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight tracking-tight max-w-md">
                Always searching for improved solutions.
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mt-4 mb-6 md:my-0">
              Reach out for inquiries, support, or to schedule a consultation.
              We're here to assist you.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3 font-bold text-sm rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-[#f27c22]/10"
            >
              Know More
            </Link>
          </div>

          <div className="w-full mt-10 md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="overflow-hidden shadow-2xl rounded-sm">
              <img
                src="/map.png"
                alt="Contact Map"
                className="w-full md:w-[493px] h-[310px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT INFO SECTION - Aligned Container */}
      <section className="py-24 px-6 md:px-12 md:h-[268px] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center items-start">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[#1a1f2e] md:mt-[-30px]">
              <MapPin size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1a1f2e] text-xl font-bold">Address</h3>
            <p className="text-gray-500 text-base leading-relaxed max-w-[220px]">
              Cologixs Office Nadir Plaza Nadir Chock Zulfirqabad Gilgit
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[#1a1f2e] md:mt-[-30px]">
              <Mail size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1a1f2e] text-xl font-bold">Email</h3>
            <a
              href="mailto:info.cologixs@gmail.com"
              className="text-gray-500 text-base border-b border-gray-400 hover:text-[#f27c22] transition-colors"
            >
              info.cologixs@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[#1a1f2e] md:mt-[-30px]">
              <Phone size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1a1f2e] text-xl font-bold">Phone</h3>
            <p className="text-gray-500 text-base">+92 3415688937</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[#1a1f2e] md:mt-[-32px]">
              <Clock size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-[#1a1f2e] text-xl font-bold">Opening hours</h3>
            <div className="text-gray-500 text-base space-y-1">
              <p>Mon-Fri: 9 AM - 06 PM</p>
              <p>Sat-Sun: day off</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SECTION - Aligned Container */}
      <section className="bg-[#f3f5f7] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="w-full md:w-5/12 md:h-[560px] h-[300px] bg-white shadow-xl rounded-sm overflow-hidden">
            <img src="/foam-img.png" alt="Consulting" className="w-full h-full object-cover" />
          </div>

          <div className="w-full md:w-7/12 md:h-[560px] h-auto bg-white p-8 md:p-10 shadow-xl rounded-sm flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-sm block mb-1">BUSINESS CONSULTING</span>
              <h2 className="text-[#1a1f2e] text-3xl md:text-4xl font-bold">Get in touch</h2>
            </div>

            {submitted && (
              <div className="bg-green-100 text-green-700 p-4 rounded mb-4 font-bold animate-fadeIn text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#1a1f2e] font-bold text-xs">First Name</label>
                  <input type="text" name="firstName" required placeholder="First name" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[#1a1f2e] font-bold text-xs">Last Name</label>
                  <input type="text" name="lastName" required placeholder="Last name" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#1a1f2e] font-bold text-xs">Your Phone</label>
                  <input type="tel" name="phone" required placeholder="Your phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[#1a1f2e] font-bold text-xs">Your Email</label>
                  <input type="email" name="email" required placeholder="Your email" value={formData.email} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[#1a1f2e] font-bold text-xs">Subject</label>
                <input type="text" name="subject" placeholder="Example Text" value={formData.subject} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[#1a1f2e] font-bold text-xs">Your Message</label>
                <textarea name="message" rows="2" placeholder="Your Message" value={formData.message} onChange={handleChange} className="w-full border border-gray-200 px-4 py-2.5 outline-none focus:border-[#f27c22] text-sm transition-all resize-none" />
              </div>
              <div className="pt-2">
                <button type="submit" disabled={loading} className="bg-[#f27c22] hover:bg-[#d96a1b] text-white px-8 py-3.5 font-bold text-base rounded-sm transition-all duration-300 transform active:scale-95 shadow-lg shadow-[#f27c22]/20 w-full md:w-auto disabled:opacity-50">
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;