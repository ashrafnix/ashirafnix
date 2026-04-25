'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope, but most brand identity projects take 4-6 weeks, while full-stack applications typically require 8-12 weeks. We provide detailed timelines during the discovery phase.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! While based in Kampala, Uganda, we work with clients across Africa and globally. We use modern collaboration tools and maintain clear communication across time zones.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Next.js, TypeScript, Node.js, and modern design tools like Figma. Our tech stack is always evolving to include the best tools for each project.',
  },
  {
    question: 'Can you handle both design and development?',
    answer: 'Yes! We offer end-to-end services from brand identity design to full-stack application development. This integrated approach ensures consistency and quality across all touchpoints.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Pricing depends on project scope, complexity, and timeline. We offer project-based pricing and retainer options. Contact us for a detailed quote tailored to your needs.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer maintenance packages and ongoing support. This includes updates, bug fixes, performance optimization, and feature enhancements as your business grows.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-32 lg:py-40 relative overflow-hidden reveal">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="s-label justify-center">Common Questions</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-4 md:mb-6">
            FAQ<span className="text-indigo-500 italic">.</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working together.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-premium rounded-2xl border border-border-subtle hover:border-accent-indigo/30 transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white group-hover:text-indigo-400 transition-colors pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-all duration-500 ${
                    openIndex === index ? 'rotate-180 bg-indigo-500/20' : ''
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-slate-500 mb-6">Still have questions?</p>
          <a
            href="/contact"
            className="btn-primary px-8 py-4 rounded-2xl inline-flex items-center gap-2 group"
          >
            Get in Touch
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
