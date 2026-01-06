import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react'; // Twitter ki jagah Linkedin import kiya
import emailjs from "@emailjs/browser"; // EmailJS import kiya

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState(""); // Email state add ki

  const handleSubscribe = (e) => {
    e.preventDefault();

    // --- EMAILJS SETTINGS ---
    const serviceID = "YOUR_SERVICE_ID"; 
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    const templateParams = {
      user_email: email,
      message: "New Newsletter Subscription Request",
      to_name: "Cologixs Admin",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubscribed(true);
        setEmail(""); // Input clear karna
      })
      .catch((err) => {
        alert("Failed to subscribe. Please check your EmailJS keys.");
        console.error("EmailJS Error:", err);
      });
  };

  // Social Links with real URLs
  const socialLinks = [
    { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=100089565188740" },
    { Icon: Linkedin, url: "https://www.linkedin.com/company/cologixs/" },
    { Icon: Instagram, url: "https://www.instagram.com/cologixs/" }
  ];

  return (
    <footer className="bg-[#0f172a] text-white md:h-[404px] pt-12 pb-6 px-6 md:px-12 border-t border-white/5 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Logo & Social */}
          <div className="md:col-span-4 space-y-4">
            <img src="/navlogo.png" alt="Cologixs" className="h-10 w-auto" />
            <p className="text-gray-400 text-base leading-relaxed max-w-sm">
              Expert guidance to your startup needs, driving growth and innovation.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Subscribe Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0f172a] hover:bg-[#f27c22] hover:text-white transition-all"
                  >
                    <item.Icon size={16} fill={i < 2 ? "currentColor" : "none"} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-lg mb-4">Useful links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <NavLink to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className={({isActive}) => `text-base transition-colors hover:text-[#f27c22] ${isActive ? 'text-[#f27c22]' : 'text-gray-400'}`}>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact Info - NOW WORKING */}
          <div className="md:col-span-6 space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Subscribe for our newsletter</h4>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex h-12 max-w-[380px]">
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Value update logic
                    placeholder="Your email" 
                    className="flex-1 bg-white px-4 py-2 text-gray-900 outline-none rounded-l-sm text-sm placeholder:text-[11px]"
                  />
                  <button type="submit" className="bg-[#f27c22] hover:bg-[#d96a1b] text-white px-6 py-2 font-bold transition-all rounded-r-sm text-sm">
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="bg-[#f27c22] h-24 flex items-center justify-center px-4 text-center rounded-sm animate-zoomIn max-w-[380px]">
                  <p className="text-[#0f172a] text-lg font-bold">
                    Thank you! Your submission has been received!
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Address</h4>
                <p className="text-gray-400 text-sm">Gilgit Office, Nadir Plaza, Zulfiqarabad</p>
              </div>
              <div className="space-y-2">
                <div className="flex flex-col">
                  <h4 className="font-bold text-lg">Email</h4>
                  <a href="mailto:info@cologixs.com" className="text-gray-400 text-sm border-b border-gray-600 w-fit hover:text-[#f27c22]">info@cologixs.com</a>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-lg">Phone</h4>
                  <a href="tel:+923415688937" className="text-gray-400 text-sm border-b border-gray-600 w-fit hover:text-[#f27c22]">+92 3415688937</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto w-full border-t border-white/10 pt-4 flex flex-col md:flex-row justify-center gap-5 items-center text-gray-400 text-sm">
        <p>Developed by <span className="text-white">Alina Alam</span></p>
        <p>© Copyright 2025. All Rights Reserved.</p>
        <Link to="/privacy-policy" className="hover:text-white border-b border-gray-600 hover:border-white">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;