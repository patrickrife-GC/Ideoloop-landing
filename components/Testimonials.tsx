'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: "I have all these insights but I freeze when I try to write them down. Ideoloop just... gets it. The content actually sounds like me.",
    author: "Sarah M.",
    role: "Independent Consultant",
  },
  {
    quote: "Spent hours every week trying to repurpose my ideas into different formats. Now I talk for 10 minutes and have content ready for a week.",
    author: "Marcus J.",
    role: "Content Creator",
  },
  {
    quote: "The hard part wasn't having ideas. It was turning them into something I'd actually post. This solved that.",
    author: "Alex T.",
    role: "Personal Brand Coach",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          From Real Users
        </h2>
        <p className="text-gray-600 text-center mb-12">
          See what early testers are saying
        </p>

        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg min-h-64 flex flex-col justify-between">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            "{testimonials[current].quote}"
          </p>
          <div>
            <p className="font-semibold text-gray-900">
              {testimonials[current].author}
            </p>
            <p className="text-gray-600 text-sm">
              {testimonials[current].role}
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-primary w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
