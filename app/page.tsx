'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Doctors from '@/components/Doctors';
import Vision from '@/components/Vision';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#F8F8FA] text-[#121212]">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Doctors />
      <Vision />
      <CTA />
      <Footer />
    </main>
  );
}
