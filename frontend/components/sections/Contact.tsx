// components/sections/Contact.tsx
import React, { useRef } from 'react'
import SectionLabel from '../ui/SectionLabel'
import api from '../../lib/api'

interface SocialLink {
  label: string
  href: string
  icon: React.ReactNode
  description: string
  color: string
}

const socials: SocialLink[] = [
  {
    label: 'Gmail',
    href: 'mailto:tendledhaneshwari@gmail.com',
    description: 'tendledhaneshwari@gmail.com',
    color: 'hover:border-rose hover:bg-rose/10',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/dhaneshwaritendle',
    description: 'github.com/dhaneshwaritendle',
    color: 'hover:border-white/40 hover:bg-white/10',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhaneshwari-tendle-868b0324a/',
    description: 'www.linkedin.com/in/dhaneshwari-tendle/',
    color: 'hover:border-sky hover:bg-sky/20',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  // {
  //   label: '',
  //   href: '',
  //   description: '',
  //   color: '',
  //   icon: ''
  // },
]

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const btn = btnRef.current
    if (!btn) return

    btn.textContent = 'Sending...'
    btn.disabled = true

    try {
      await api.post('/api/contact', {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      })
      btn.textContent = 'Sent! ✓'
      btn.style.background = '#4a9e6f'
      e.currentTarget.reset()
    } catch {
      btn.textContent = 'Failed — try email instead'
      btn.style.background = '#c07878'
    } finally {
      setTimeout(() => {
        btn.textContent = 'Send message →'
        btn.style.background = ''
        btn.disabled = false
      }, 3000)
    }
  }

  return (

    <section id="contact" className="px-6 md:px-12 py-24 bg-violet-950">

      <div className="max-w-6xl mx-auto px-6 text-center mb-16">

        <SectionLabel text="Let's connect" />
        {/* Header */}
        <h2 className="font-serif text-5xl  text-white">
          Get in <em className="text-accent italic">touch.</em>
        </h2>

        {/* Dark card */}
        <div className="bg-ink rounded-3xl p-10 md:p-14">

          {/* Social links */}
          <p className="text-[#f7f3ee]/50 text-sm font-medium tracking-widest uppercase mb-8">
            Find me on
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 text-[#f7f3ee] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${s.color}`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  {s.icon}
                </div>

                <div>
                  <div className="font-medium text-sm">{s.label}</div>
                  <div className="text-[#f7f3ee]/40 text-xs mt-0.5 truncate">
                    {s.description}
                  </div>
                </div>

                <span className="ml-auto text-[#f7f3ee]/20 text-lg">↗</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-10" />
        </div>

      </div>



    </section>

  )
}