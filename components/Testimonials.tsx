'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: "I have all these insights but I freeze when I try to write them down. Ideoloop just... gets it. The content actually sounds like me.",
    author: "Sarah M.",
    role: "Independent Consultant",
    initials: "SM",
    color: "bg-violet-500",
  },
  {
    quote: "Spent hours every week trying to repurpose my ideas into different formats. Now I talk for 10 minutes and have content ready for a week.",
    author: "Marcus J.",
    role: "Content Creator",
    initials: "MJ",
    color: "bg-amber-500",
  },
  {
    quote: "The hard part wasn't having ideas. It was turning them into something I'd actually post. This solved that.",
    author: "Alex T.",
    role: "Personal Brand Coach",
    initials: "AT",
    color: "bg-primary",
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          From Real Users
        </h2>
        <p className="text-gray-500 text-center mb-12">
          See what early testers are saying
        </p>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg min-h-64 flex flex-col justify-between">
          <div>
            <Stars />
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "{testimonials[current].quote}"
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-full ${testimonials[current].color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-sm font-bold">{testimonials[current].initials}</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-primary w-8' : 'bg-gray-300 w-3'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
