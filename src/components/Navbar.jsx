import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Blogs remove kar diye hain jaisa aapne kaha
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#0b1120] text-white py-4 px-6 md:px-12 fixed w-full top-0 z-[100] border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo: Image from public folder */}
        <Link to="/" className="flex items-center">
          <img 
            src="/navlogo.png" 
            alt="Cologixs Logo" 
            className="h-12 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-semibold tracking-wide transition-all duration-300 pb-1 border-b-2 ${
                  isActive 
                  ? 'text-white border-[#e67e22]' 
                  : 'text-gray-300 border-transparent hover:text-[#e67e22]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Action Button: Hover Orange & Link to Contact */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="border-2 border-white text-white px-8 py-2.5 rounded-sm font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#e67e22] hover:border-[#e67e22] active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-[#0b1120] z-[-1] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {navigation.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold hover:text-[#e67e22]"
          >
            {item.name}
          </NavLink>
        ))}
        <Link 
          to="/contact" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-[#e67e22] text-white px-10 py-3 rounded font-bold uppercase"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;