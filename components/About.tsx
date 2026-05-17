'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Activity,
  Users,
  ShieldCheck,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function About() {
  const [count100, setCount100] = useState(0);
  const [count25m, setCount25m] = useState(0);
  const [count99, setCount99] = useState(0);

  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    if (!isVisible) return;

    const intervals = [
      setInterval(
        () => setCount100((c) => (c < 100 ? c + 5 : 100)),
        30
      ),

      setInterval(
        () => setCount25m((c) => (c < 25 ? c + 1 : 25)),
        30
      ),

      setInterval(
        () => setCount99((c) => (c < 99 ? c + 3 : 99)),
        30
      ),
    ];

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      id="about"
      className="py-16 sm:py-24 px-4 relative overflow-hidden bg-animated-gradient"
    >
      {/* Background Blobs */}
      <div
        className="blob-animation blob-1 w-96 h-96 bg-pink-200/40"
        style={{ top: '0px', right: '0px' }}
      />

      <div
        className="blob-animation blob-3 w-80 h-80 bg-purple-100/50"
        style={{ bottom: '100px', left: '-50px' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
          {/* LEFT CONTENT */}
          <div
            className={`lg:col-span-4 glass rounded-[32px] p-8 sm:p-10 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${
              isVisible ? 'slide-in-left' : 'opacity-0'
            } transition-smooth`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1] mb-6 text-[#121212]">
              Your Trusted Healthcare Providers
            </h2>

            <p className="text-[#777777] leading-relaxed mb-8 max-w-sm">
              Public clinics and private facilities have embraced our
              platform. We route all medical services efficiently with
              premium healthcare support.
            </p>

            {/* Button */}
            <button className="group px-6 py-3.5 bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white rounded-full font-semibold hover:shadow-[0_15px_40px_rgba(123,108,255,0.35)] transition-all duration-500 hover:scale-105 flex items-center gap-3">
              Make a Schedule

              <div className="w-8 h-8 rounded-full bg-white text-[#7B6CFF] flex items-center justify-center group-hover:translate-x-1 transition-all duration-500">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>

          {/* CENTER CARD */}
          <div
            className={`lg:col-span-4 glass rounded-[32px] overflow-hidden relative bg-gradient-to-br from-[#B79CFF] via-[#9E8CFF] to-[#7B6CFF] p-6 shadow-[0_25px_80px_rgba(123,108,255,0.18)] ${
              isVisible ? 'fade-in-up' : 'opacity-0'
            } transition-smooth`}
          >
            {/* Glow */}
            <div className="absolute -top-20 -right-10 w-60 h-60 bg-white/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <p className="text-white text-xl font-semibold mb-2 leading-snug">
                Very fast and accurate service with us
              </p>

              <p className="text-white/70 text-sm leading-relaxed mb-8">
                Connect with professional doctors who are ready to help
                you manage your health.
              </p>

              {/* Mock App Card */}
              <div className="bg-white rounded-[28px] p-5 shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Top */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#777777]">
                      Welcome Back
                    </p>

                    <h4 className="font-bold text-[#121212]">
                      Hi, Madihu
                    </h4>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF]" />
                </div>

                {/* Appointment Card */}
                <div className="rounded-[24px] bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] p-5 text-white relative overflow-hidden">
                  <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full" />

                  <p className="text-sm opacity-80 mb-2">
                    Appointment
                  </p>

                  <h4 className="font-semibold text-lg mb-4">
                    7 October 2025
                  </h4>

                  <div className="flex items-center justify-between">
                    <p className="text-xs opacity-80">
                      09:00 AM - 10:00 AM
                    </p>

                    <div className="w-10 h-10 rounded-full bg-white text-[#7B6CFF] flex items-center justify-center shadow-lg">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div
            className={`lg:col-span-4 glass rounded-[32px] p-6 sm:p-7 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] ${
              isVisible ? 'slide-in-right' : 'opacity-0'
            } transition-smooth`}
          >
            <h3 className="text-2xl font-bold text-[#121212] leading-snug mb-3">
              Analysis your physical performance from anywhere
            </h3>

            <p className="text-[#777777] text-sm leading-relaxed mb-8">
              Body mass index measurements and advanced medical
              performance analytics.
            </p>

            {/* Graph */}
            <div className="flex items-end justify-between gap-3 h-48">
              {[
                {
                  name: 'Alex',
                  height: 'h-32',
                  color: 'bg-[#00C896]',
                },
                {
                  name: 'Hamilton',
                  height: 'h-24',
                  color: 'bg-[#4DB5FF]',
                },
                {
                  name: 'Jenny',
                  height: 'h-20',
                  color: 'bg-pink-300',
                },
                {
                  name: 'Methio',
                  height: 'h-28',
                  color: 'bg-yellow-300',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 group"
                >
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF]" />

                  {/* Bar */}
                  <div
                    className={`w-8 ${item.height} ${item.color} rounded-full transition-all duration-700 group-hover:scale-y-110`}
                  />

                  <p className="text-xs text-[#555555] font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div
            className={`glass rounded-[28px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(123,108,255,0.12)] transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? 'slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-4xl font-bold text-[#121212]">
                  {count100}%
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#7B6CFF]/10 flex items-center justify-center">
                <ShieldCheck
                  size={22}
                  className="text-[#7B6CFF]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[#777777] text-sm">
                Our Doctors Certified
              </p>

              <span className="text-[#D1D1D1] font-bold text-2xl">
                001
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`glass rounded-[28px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(123,108,255,0.12)] transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? 'slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-4xl font-bold text-[#121212]">
                  {count25m}M+
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#7B6CFF]/10 flex items-center justify-center">
                <Users
                  size={22}
                  className="text-[#7B6CFF]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[#777777] text-sm">
                Happy global users
              </p>

              <span className="text-[#D1D1D1] font-bold text-2xl">
                002
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`glass rounded-[28px] bg-white/80 backdrop-blur-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(123,108,255,0.12)] transition-all duration-500 hover:-translate-y-1 ${
              isVisible ? 'slide-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-4xl font-bold text-[#121212]">
                  {count99}%
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[#7B6CFF]/10 flex items-center justify-center">
                <Activity
                  size={22}
                  className="text-[#7B6CFF]"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-[#777777] text-sm">
                Satisfying treatment
              </p>

              <span className="text-[#D1D1D1] font-bold text-2xl">
                003
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}