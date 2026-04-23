'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Nakato',
    role: 'CEO, TechHub Kampala',
    company: 'TechHub',
    content: 'Ashraf delivered a brand identity that perfectly captures our vision. The technical precision and creative excellence exceeded all expectations.',
    rating: 5,
    avatar: '/assets/testimonials/avatar-1.png',
  },
  {
    id: 2,
    name: 'David Okello',
    role: 'CTO, FinanceFlow',
    company: 'FinanceFlow',
    content: 'Working with Ashraf was transformative. His ability to merge technical architecture with brand design is unmatched in East Africa.',
    rating: 5,
    avatar: '/assets/testimonials/avatar-2.png',
  },
  {
    id: 3,
    name: 'Grace Auma',
    role: 'Founder, Retail Innovations',
    company: 'Retail Innovations',
    content: 'The brand system Ashraf created scales beautifully across all our touchpoints. Professional, responsive, and incredibly talented.',
    rating: 5,
    avatar: '/assets/testimonials/avatar-3.png',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden reveal">
      <div className="max-w-site mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">Client Feedback</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            Trusted <span className="text-indigo-500 italic">Partnerships.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Building long-term relationships with Africa's most ambitious companies.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="glass-premium rounded-2xl md:rounded-3xl p-8 md:p-10 border-white/5 hover:border-indigo-500/30 transition-all duration-700 group"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-amber-500/20 flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base group-hover:text-indigo-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600 text-sm font-mono">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
