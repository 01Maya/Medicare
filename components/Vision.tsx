'use client';

import {
  Brain,
  Stethoscope,
  Video,
  Sparkles,
  Baby,
  Activity,
  Ambulance,
  ShieldPlus,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    title: 'Mental Health',
    desc: 'Professional mental health support',
    icon: Brain,
  },
  {
    title: 'Diagnostic Services',
    desc: 'Advanced diagnostic testing',
    icon: Stethoscope,
  },
  {
    title: 'Telehealth Services',
    desc: 'Remote consultations',
    icon: Video,
  },
  {
    title: 'Beyond Medicine',
    desc: 'Holistic wellness programs',
    icon: Sparkles,
  },
  {
    title: 'Pediatric Care',
    desc: 'Specialized child healthcare',
    icon: Baby,
  },
  {
    title: 'Physical Therapy',
    desc: 'Home-based physical therapy',
    icon: Activity,
  },
  {
    title: 'Emergency Services',
    desc: '24/7 emergency support',
    icon: Ambulance,
  },
  {
    title: 'Future of Care',
    desc: 'Innovative medical solutions',
    icon: ShieldPlus,
  },
];

export default function Vision() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="vision"
      className="py-16 sm:py-24 px-4 relative overflow-hidden bg-animated-gradient"
    >
      {/* Animated Background Blobs */}
      <div
        className="blob-animation blob-1 w-96 h-96 bg-purple-200"
        style={{ top: '0px', left: '0px' }}
      />

      <div
        className="blob-animation blob-3 w-80 h-80 bg-pink-100"
        style={{ bottom: '-50px', right: '10%' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div
          className={`text-center mb-12 ${
            isVisible ? 'slide-in-down' : 'opacity-0'
          } transition-smooth`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Here are some key vision
          </h2>

          <p className="text-[#777777]">
            Services designed for your wellness
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className={`stagger-item glass rounded-2xl p-6 border border-white/40 bg-white/60 backdrop-blur-xl hover:shadow-[0_20px_60px_rgba(123,108,255,0.15)] hover:border-[#7B6CFF]/40 hover:bg-white/80 transition-smooth group cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] relative overflow-hidden ${
                  isVisible ? 'slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Gradient Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B6CFF]/0 via-[#A58BFF]/0 to-pink-200/0 group-hover:from-[#7B6CFF]/5 group-hover:via-[#A58BFF]/10 group-hover:to-pink-200/10 transition-all duration-500 rounded-2xl" />

                {/* Icon */}
                <div className="relative z-10 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7B6CFF]/15 to-[#A58BFF]/20 flex items-center justify-center shadow-sm group-hover:shadow-[0_10px_30px_rgba(123,108,255,0.25)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon
                      size={26}
                      className="text-[#7B6CFF] transition-all duration-500 group-hover:text-[#6A5AF9]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-2 text-[#121212] group-hover:text-[#7B6CFF] transition-smooth">
                    {service.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#777777]">
                    {service.desc}
                  </p>
                </div>

                {/* Decorative Blur Circle */}
                <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-[#A58BFF]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}