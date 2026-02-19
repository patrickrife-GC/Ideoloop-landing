'use client'

import { useState } from 'react'

type FormData = {
  firstName: string
  email: string
  whoAreYou: string
  whoAreYouOther: string
  publishPlatform: string
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const WHO_OPTIONS = [
  { value: 'Consultant / Coach', label: 'Consultant / Coach' },
  { value: 'Executive / Leader', label: 'Executive / Leader' },
  { value: 'Entrepreneur / Founder', label: 'Entrepreneur / Founder' },
  { value: 'Creator / Thought Leader', label: 'Creator / Thought Leader' },
  { value: 'Other', label: 'Other' },
]

const PLATFORM_OPTIONS = [
  { value: 'LinkedIn', label: 'LinkedIn' },
  { value: 'X (Twitter)', label: 'X (Twitter)' },
  { value: 'Newsletter', label: 'Newsletter' },
  { value: 'Podcast', label: 'Podcast' },
  { value: 'Other', label: 'Other' },
]

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    email: '',
    whoAreYou: '',
    whoAreYouOther: '',
    publishPlatform: '',
  })
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    const whoValue =
      formData.whoAreYou === 'Other' ? formData.whoAreYouOther : formData.whoAreYou

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          whoAreYou: whoValue,
          publishPlatform: formData.publishPlatform,
        }),
      })

      const data = await res.json()

      if (res.status === 409 || data.alreadySubscribed) {
        setErrorMessage("You're already on the list. We'll be in touch soon.")
        setFormState('error')
        return
      }

      if (!res.ok) {
        throw new Error(data.message || 'Unexpected error')
      }

      setFormState('success')
    } catch (err) {
      console.error('Waitlist submission error:', err)
      setErrorMessage(
        'Something went wrong. Please try again or email us at hello@ideoloop.ai'
      )
      setFormState('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors'

  if (formState === 'success') {
    return (
      <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">You're on the list.</h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We'll be in touch when your spot opens. In the meantime, keep talking — the ideas aren't going anywhere.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            You've got more to say than you think.
          </h2>
          <p className="text-lg text-gray-500">
            Join the waitlist for early access. Invite-only beta — limited spots.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              required
              placeholder="Your first name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={inputClass}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>

          {/* Who are you? */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">Who are you?</p>
            <div className="space-y-2">
              {WHO_OPTIONS.map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="whoAreYou"
                    value={opt.value}
                    required
                    checked={formData.whoAreYou === opt.value}
                    onChange={(e) => setFormData({ ...formData, whoAreYou: e.target.value })}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary/30"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
            {formData.whoAreYou === 'Other' && (
              <input
                type="text"
                required
                placeholder="Please describe"
                value={formData.whoAreYouOther}
                onChange={(e) => setFormData({ ...formData, whoAreYouOther: e.target.value })}
                className={`${inputClass} mt-3`}
              />
            )}
          </div>

          {/* Where do you publish most? */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">Where do you publish most?</p>
            <div className="space-y-2">
              {PLATFORM_OPTIONS.map((opt) => (
                <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="publishPlatform"
                    value={opt.value}
                    required
                    checked={formData.publishPlatform === opt.value}
                    onChange={(e) => setFormData({ ...formData, publishPlatform: e.target.value })}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary/30"
                  />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Error message */}
          {formState === 'error' && errorMessage && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full py-4 bg-terracotta text-white rounded-full font-semibold text-lg hover:bg-terracotta-dark transition-colors shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === 'submitting' ? 'Submitting…' : 'Get Early Access'}
          </button>

          <p className="text-center text-sm text-gray-400">
            No credit card. No spam. Just early access when your spot opens.
          </p>
        </form>
      </div>
    </section>
  )
}
