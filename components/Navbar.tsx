'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Mission', id: 'mission' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Vision', id: 'vision' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm hover:shadow-md transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleSmoothScroll('home')}
            className="flex items-center gap-2 transform hover:scale-110 transition-smooth"
          >
            <div className="w-8 h-8 rounded-full gradient-primary pulse-glow" />
            <span className="font-bold text-lg hidden sm:inline">Medicare</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSmoothScroll(item.id)}
                className="text-sm hover:text-[#7B6CFF] transition-smooth relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7B6CFF] hover:after:w-full after:transition-smooth"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium hover:text-[#7B6CFF] transition-smooth hover:scale-105 transform">
              Get Started
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white rounded-full text-sm font-medium hover:shadow-lg transition-smooth hover:scale-105 transform">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-white/50 rounded-lg transition-smooth"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/20 pt-4">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => handleSmoothScroll(item.id)}
                className="block w-full text-left text-sm py-2 px-3 hover:text-[#7B6CFF] transition-smooth hover:translate-x-2 hover:bg-white/30 rounded-lg"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full px-4 py-2 mt-2 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white rounded-full text-sm font-medium hover:shadow-lg transition-smooth hover:scale-105 transform">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
