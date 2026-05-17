'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="home"
      className="pt-32 pb-20 px-4 relative overflow-hidden bg-animated-gradient"
    >
      {/* Background Blobs */}
      <div
        className="blob-animation blob-1 w-96 h-96 bg-purple-200/60"
        style={{ top: '100px', left: '-100px' }}
      />

      <div
        className="blob-animation blob-2 w-80 h-80 bg-pink-100/70"
        style={{ bottom: '50px', right: '-80px' }}
      />

      <div
        className="blob-animation blob-3 w-72 h-72 bg-purple-100/70"
        style={{ top: '300px', right: '100px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= TEXT CONTENT ================= */}
        <div
          className={`text-center mb-14 sm:mb-16 ${
            isVisible ? 'fade-in-up' : 'opacity-0'
          } transition-smooth`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance max-w-5xl mx-auto">
            Discover Our Mission and Values in
            <span className="gradient-text block mt-3">
              Patient-Centered Healthcare
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#777777] max-w-2xl mx-auto mb-8 leading-relaxed">
            We are dedicated to providing you with world-class healthcare
            services at your convenience.
          </p>

          <button className="px-8 py-3.5 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white rounded-full font-semibold hover:shadow-[0_15px_40px_rgba(123,108,255,0.35)] transition-all duration-500 hover:scale-105">
            Get Started
          </button>
        </div>

        {/* ================= IMAGE LAYOUT ================= */}
        <div className="relative mt-10 sm:mt-16">
          {/* Main Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left Small Image */}
            <div
              className={`lg:col-span-2 ${
                isVisible ? 'slide-in-left' : 'opacity-0'
              } transition-smooth`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] rounded-[28px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
                <Image
                  src="/doctor-hero.jpg"
                  alt="Healthcare professional"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            {/* Center Large Image */}
            <div
              className={`lg:col-span-8 ${
                isVisible ? 'scale-in' : 'opacity-0'
              } transition-smooth`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative h-[320px] sm:h-[420px] lg:h-[560px] rounded-[36px] overflow-hidden bg-white shadow-[0_25px_80px_rgba(123,108,255,0.12)] group">
                <Image
                  src="/patient-care.jpg"
                  alt="Patient receiving medical care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent" />

                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/85 border border-white/40 rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-xs text-[#777777] mb-1">
                    Trusted Healthcare
                  </p>

                  <h4 className="text-lg font-bold text-[#121212]">
                    100% Patient Satisfaction
                  </h4>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white px-5 py-3 rounded-2xl shadow-[0_15px_40px_rgba(123,108,255,0.35)] backdrop-blur-xl">
                  <p className="text-xs opacity-90">
                    Premium Care
                  </p>

                  <h4 className="font-semibold">
                    24/7 Support
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Small Image */}
            <div
              className={`lg:col-span-2 ${
                isVisible ? 'slide-in-right' : 'opacity-0'
              } transition-smooth`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] rounded-[28px] overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] group">
                <Image
                  src="/medical-team.jpg"
                  alt="Medical team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Floating Decorative Element */}
          <div className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#7B6CFF]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}