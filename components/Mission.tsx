'use client';

import { Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const features = [
  'Accessible Healthcare',
  'Patient Engagement',
  'Health Education',
  'Building Trust',
  'Community Involved',
  'Security & Privacy',
];

export default function Mission() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="mission"
      className="py-16 sm:py-24 px-4 relative overflow-hidden bg-animated-gradient"
    >
      {/* Background Blobs */}
      <div
        className="blob-animation blob-2 w-96 h-96 bg-pink-100"
        style={{ left: '0px', bottom: '0px' }}
      />

      <div
        className="blob-animation blob-1 w-80 h-80 bg-purple-200"
        style={{ top: '-50px', right: '10%' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`${
              isVisible ? 'slide-in-left' : 'opacity-0'
            } order-2 md:order-1 transition-smooth`}
          >
            <div className="bg-white rounded-3xl shadow-premium p-6 sm:p-8 h-[420px] sm:h-[500px] relative overflow-hidden transform hover:shadow-[0_25px_80px_rgba(123,108,255,0.15)] transition-all duration-700 group">
              {/* Floating Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7B6CFF]/10 rounded-full blur-3xl" />

              <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-pink-200/20 rounded-full blur-3xl" />

              {/* Decorative Floating Card */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-3xl bg-gradient-to-br from-[#7B6CFF] to-[#A58BFF] opacity-90 rotate-12 group-hover:rotate-6 transition-all duration-700 shadow-[0_20px_40px_rgba(123,108,255,0.35)]" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/healthcare mission.png"
                  alt="Healthcare Mission"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 via-transparent to-transparent" />

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/80 border border-white/40 rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-[#777777] mb-1">
                        Patient Satisfaction
                      </p>

                      <h4 className="text-lg font-bold text-[#121212]">
                        99% Positive Care
                      </h4>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] flex items-center justify-center shadow-md">
                      <Check className="text-white" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div
            className={`${
              isVisible ? 'slide-in-right' : 'opacity-0'
            } order-1 md:order-2 transition-smooth`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Let&apos;s know about our main goal
            </h2>

            <p className="text-[#777777] mb-8 leading-relaxed text-base sm:text-lg">
              Our mission is centered on delivering information about our
              services. The experience that patients receive in our facilities
              is our top priority.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`stagger-item flex items-center gap-3 hover:translate-x-2 transition-smooth ${
                    isVisible ? 'slide-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-md">
                    <Check size={16} className="text-white" />
                  </div>

                  <span className="font-medium text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}