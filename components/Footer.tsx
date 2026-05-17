'use client';

import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const footerLinks = {
  Company: ['About', 'Careers', 'Press', 'Blog'],
  Features: ['Appointments', 'Consultations', 'Records', 'Billing'],
  Solutions: ['Clinics', 'Hospitals', 'Practices', 'Health Systems'],
  'For Researchers': ['Research Portal', 'Data', 'Analytics', 'Reports'],
};

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Instagram, label: 'Instagram' },
];

export default function Footer() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer ref={ref} className="bg-[#F4F4F5] pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="blob-animation blob-2 w-96 h-96 bg-pink-200" style={{ bottom: '0px', right: '0px' }} />
      <div className="blob-animation blob-1 w-80 h-80 bg-purple-100" style={{ top: '50px', left: '-50px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter */}
<div
  className={`mb-12 pb-12 border-b border-[#EAEAEA] ${
    isVisible ? 'slide-in-up' : 'opacity-0'
  } transition-smooth`}
>
  <div className="max-w-2xl mx-auto text-center">
    <h3 className="font-bold text-2xl sm:text-3xl mb-4 text-[#121212]">
      Let&apos;s Connect with us
    </h3>

    <p className="text-[#777777] text-sm sm:text-base mb-6 max-w-lg mx-auto">
      Subscribe to receive healthcare updates, wellness tips, and premium
      medical insights directly in your inbox.
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full flex-1 px-5 py-3.5 rounded-full bg-white/90 backdrop-blur-xl border border-[#EAEAEA] text-sm sm:text-base focus:outline-none focus:border-[#7B6CFF] focus:ring-4 focus:ring-[#7B6CFF]/10 transition-smooth hover:border-[#A58BFF] shadow-sm"
      />

      <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white rounded-full font-semibold hover:shadow-[0_10px_30px_rgba(123,108,255,0.35)] transition-smooth hover:scale-105 transform whitespace-nowrap relative overflow-hidden group">
        <span className="relative z-10">Subscribe</span>

        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </button>
    </div>
  </div>
</div>

        {/* Links Grid */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'} transition-smooth`}>
          {Object.entries(footerLinks).map(([category, links], catIdx) => (
            <div key={category} style={{ animationDelay: `${catIdx * 0.1}s` }}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, idx) => (
                  <li key={link} style={{ animationDelay: `${(catIdx + idx * 0.05) * 0.05}s` }}>
                    <a href="#" className="text-sm text-[#777777] hover:text-[#7B6CFF] transition-smooth hover:translate-x-1">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className={`flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#EAEAEA] ${isVisible ? 'slide-in-up' : 'opacity-0'} transition-smooth`} style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-6 sm:mb-0 transform hover:scale-110 transition-smooth">
            <div className="w-8 h-8 rounded-full gradient-primary pulse-glow" />
            <span className="font-bold">Medicare</span>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  className="text-[#777777] hover:text-[#7B6CFF] transition-smooth hover:scale-125 transform"
                  aria-label={social.label}
                  style={{ transitionDelay: `${idx * 0.05}s` }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <p className={`text-xs text-[#777777] text-center mt-8 ${isVisible ? 'fade-in-up' : 'opacity-0'} transition-smooth`} style={{ animationDelay: '0.3s' }}>
          © 2024 Medicare. All rights reserved. | Privacy Policy | Terms of Service
        </p>
      </div>
    </footer>
  );
}
