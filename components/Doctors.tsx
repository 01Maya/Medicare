'use client';

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  GraduationCap,
  BriefcaseMedical,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Image from 'next/image';

const doctors = [
  {
    name: 'Martin',
    specialty: 'General Practitioner',
    image: '/doctor-martin.jpg',
    experience: '12 Years Experience',
    degree: 'MBBS, MD',
    rating: '4.9',
    description:
      'Dedicated general practitioner focused on preventive healthcare and patient wellness.',
  },
  {
    name: 'Kuldeep Dash',
    specialty: 'Cardiologist',
    image: '/doctor-kuldeep.jpg',
    experience: '15 Years Experience',
    degree: 'MBBS, DM Cardiology',
    rating: '5.0',
    description:
      'Expert cardiologist specializing in advanced heart treatments and patient care.',
  },
  {
    name: 'Shelly',
    specialty: 'Dermatologist',
    image: '/doctor-shelly.jpg',
    experience: '10 Years Experience',
    degree: 'MBBS, MD Dermatology',
    rating: '4.8',
    description:
      'Professional dermatologist providing modern skin and cosmetic treatments.',
  },
  {
    name: 'Andrew',
    specialty: 'Neurologist',
    image: '/doctor-andrew.jpg',
    experience: '18 Years Experience',
    degree: 'MBBS, DM Neurology',
    rating: '4.9',
    description:
      'Experienced neurologist focused on neurological disorders and advanced care.',
  },
];

export default function Doctors() {
  const [current, setCurrent] = useState(1);

  const [selectedDoctor, setSelectedDoctor] = useState<
    (typeof doctors)[0] | null
  >(null);

  const { ref, isVisible } = useScrollReveal();

  const nextSlide = () => {
    setCurrent((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  return (
    <section
      ref={ref}
      id="doctors"
      className="py-16 sm:py-24 px-4 relative overflow-hidden bg-animated-gradient"
    >
      {/* Background Blobs */}
      <div
        className="blob-animation blob-3 w-96 h-96 bg-purple-100"
        style={{ right: '0px', top: '0px' }}
      />

      <div
        className="blob-animation blob-2 w-80 h-80 bg-pink-100"
        style={{ left: '-100px', bottom: '50px' }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-14 ${
            isVisible ? 'slide-in-down' : 'opacity-0'
          } transition-smooth`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Meet our expert doctors
          </h2>

          <p className="text-[#777777] max-w-xl mx-auto">
            Professional healthcare specialists ready to provide premium medical
            care and support.
          </p>
        </div>

        {/* ================= MOBILE CAROUSEL ================= */}
        <div className="block sm:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {doctors.map((doctor, i) => (
                <div
                  key={i}
                  className={`w-full flex-shrink-0 flex justify-center px-2 ${
                    isVisible ? 'slide-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    onClick={() => setSelectedDoctor(doctor)}
                    className={`group relative w-full max-w-[320px] rounded-[32px] overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                      i === current
                        ? 'border-[#7B6CFF] shadow-[0_25px_80px_rgba(123,108,255,0.28)]'
                        : 'border-[#B9ACFF]/40'
                    } bg-white/10 backdrop-blur-xl`}
                  >
                    {/* Image */}
                    <div className="relative h-[420px] overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="100vw"
                      />

                      {/* Dynamic Overlay */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          i === current
                            ? 'bg-gradient-to-t from-[#7B6CFF]/90 via-[#7B6CFF]/20 to-transparent'
                            : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                        }`}
                      />

                      {/* Dynamic Glow */}
                      <div
                        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-44 h-44 blur-3xl rounded-full transition-all duration-700 ${
                          i === current
                            ? 'bg-[#7B6CFF]/30 opacity-100'
                            : 'bg-white/10 opacity-0 group-hover:opacity-40'
                        }`}
                      />

                      {/* Rating */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-medium">
                        {doctor.rating} ★ Rating
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">
                          {doctor.name}
                        </h3>

                        <p className="text-white/80 text-sm mb-3">
                          {doctor.specialty}
                        </p>

                        <p className="text-sm font-medium text-white/90 group-hover:text-[#CFC7FF] transition-all duration-500">
                          View Details →
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg flex items-center justify-center hover:bg-[#7B6CFF] hover:text-white transition-all duration-500"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {doctors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-500 rounded-full ${
                    current === index
                      ? 'w-8 h-2 bg-[#7B6CFF]'
                      : 'w-2 h-2 bg-[#D6D1FF]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg flex items-center justify-center hover:bg-[#7B6CFF] hover:text-white transition-all duration-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP CAROUSEL ================= */}
        <div className="hidden sm:flex items-center justify-between gap-4">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCurrent((c) => (c === 0 ? doctors.length - 1 : c - 1))
            }
            className="p-2 hover:bg-[#EAEAEA] rounded-full transition-smooth hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Desktop Cards */}
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4">
              {doctors.map((doctor, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`flex-shrink-0 w-64 transition-all duration-500 cursor-pointer ${
                    i === current
                      ? 'scale-100 opacity-100'
                      : 'scale-75 opacity-50'
                  } ${isVisible ? 'slide-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div
                    className={`group rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                      i === current
                        ? 'border-[#7B6CFF] shadow-[0_25px_80px_rgba(123,108,255,0.28)]'
                        : 'border-[#B9ACFF]/40 hover:border-[#7B6CFF]/70'
                    }`}
                  >
                    <div className="relative h-90 flex flex-col justify-end overflow-hidden">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 256px, 256px"
                      />

                      {/* Dynamic Overlay */}
                      <div
                        className={`absolute inset-0 transition-all duration-500 ${
                          i === current
                            ? 'bg-gradient-to-t from-[#7B6CFF]/90 via-[#7B6CFF]/20 to-transparent'
                            : 'bg-gradient-to-t from-black/80 via-black/20 to-transparent'
                        }`}
                      />

                      {/* Dynamic Glow */}
                      <div
                        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 w-44 h-44 blur-3xl rounded-full transition-all duration-700 ${
                          i === current
                            ? 'bg-[#7B6CFF]/30 opacity-100'
                            : 'bg-white/10 opacity-0 group-hover:opacity-40'
                        }`}
                      />

                      {/* Rating */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-medium">
                        {doctor.rating} ★ Rating
                      </div>

                      {/* Content */}
                      <div className="relative p-6 text-white">
                        <h3 className="font-bold text-lg">
                          {doctor.name}
                        </h3>

                        <p className="text-sm text-white/80 mb-2">
                          {doctor.specialty}
                        </p>

                        <p className="text-xs font-medium text-white/90 group-hover:text-[#E9E4FF] transition-all duration-500">
                          View Details →
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setCurrent((c) =>
                c === doctors.length - 1 ? 0 : c + 1
              )
            }
            className="p-2 hover:bg-[#EAEAEA] rounded-full transition-smooth hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4">
          <div className="relative w-full max-w-3xl rounded-[32px] overflow-hidden bg-white shadow-[0_25px_100px_rgba(0,0,0,0.2)] animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-[#7B6CFF] hover:text-white flex items-center justify-center shadow-md transition-all duration-300"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-[320px] sm:h-[420px] md:h-full">
                <Image
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/70 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    {selectedDoctor.name}
                  </h3>

                  <p className="text-white/80">
                    {selectedDoctor.specialty}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <div className="space-y-5">
                  {/* Experience */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F8FA]">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6CFF]/10 flex items-center justify-center">
                      <BriefcaseMedical
                        className="text-[#7B6CFF]"
                        size={22}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-[#777777]">
                        Experience
                      </p>

                      <h4 className="font-semibold">
                        {selectedDoctor.experience}
                      </h4>
                    </div>
                  </div>

                  {/* Degree */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F8FA]">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6CFF]/10 flex items-center justify-center">
                      <GraduationCap
                        className="text-[#7B6CFF]"
                        size={22}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-[#777777]">
                        Degree
                      </p>

                      <h4 className="font-semibold">
                        {selectedDoctor.degree}
                      </h4>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F8FA]">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6CFF]/10 flex items-center justify-center">
                      <Star
                        className="text-[#7B6CFF]"
                        size={22}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-[#777777]">
                        Rating
                      </p>

                      <h4 className="font-semibold">
                        {selectedDoctor.rating} / 5.0
                      </h4>
                    </div>
                  </div>

                  {/* About */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8F8FA]">
                    <div className="w-12 h-12 rounded-xl bg-[#7B6CFF]/10 flex items-center justify-center flex-shrink-0">
                      <Award
                        className="text-[#7B6CFF]"
                        size={22}
                      />
                    </div>

                    <div>
                      <p className="text-sm text-[#777777] mb-1">
                        About Doctor
                      </p>

                      <p className="text-sm leading-relaxed text-[#555555]">
                        {selectedDoctor.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-3 py-4 rounded-full bg-gradient-to-r from-[#7B6CFF] to-[#A58BFF] text-white font-semibold hover:shadow-[0_15px_40px_rgba(123,108,255,0.35)] hover:scale-[1.02] transition-all duration-500">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}