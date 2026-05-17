'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className={`gradient-primary rounded-3xl p-8 sm:p-16 relative overflow-hidden transform transition-smooth ${isVisible ? 'slide-in-up scale-100' : 'scale-95 opacity-0'}`}>
          {/* Background decoration - animated blobs */}
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-white/10 rounded-full blur-3xl float-delayed" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight text-balance">
              Bring your customers services the next level of excellence.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-white text-[#7B6CFF] rounded-full font-semibold hover:shadow-lg transition-smooth hover:scale-110 transform w-full sm:w-auto">
                Learn More
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-smooth hover:scale-110 transform w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
