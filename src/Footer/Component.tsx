import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []
  const { tagline, email, phone, address, linkedIn, facebook, twitter, instagram, copyright } =
    footerData || {}

  const socialLinks = [
    { url: linkedIn, icon: Linkedin, label: 'LinkedIn' },
    { url: facebook, icon: Facebook, label: 'Facebook' },
    { url: twitter, icon: Twitter, label: 'Twitter' },
    { url: instagram, icon: Instagram, label: 'Instagram' },
  ].filter((s) => s.url)

  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-primary via-[#1a4a7a] to-[#0f2d4a] text-white">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 100%, rgba(91,184,254,0.1) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Logo />
            </Link>
            {tagline && (
              <p className="mb-6 text-sm leading-relaxed text-white/70">{tagline}</p>
            )}
            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3">
                {socialLinks.map(({ url, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          {navItems.length > 0 && (
            <div>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-3">
                {navItems.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    className="text-sm text-white/70 transition-colors hover:text-secondary"
                  />
                ))}
              </nav>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-secondary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{phone}</span>
                </a>
              )}
              {address && (
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="whitespace-pre-line">{address}</span>
                </div>
              )}
            </div>
          </div>

          {/* Newsletter or CTA placeholder */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Stay Connected
            </h4>
            <p className="mb-4 text-sm text-white/70">
              Get the latest updates on sports technology innovation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/50">{copyright || '© 2025 MTW Sports. All rights reserved.'}</p>
          <p className="text-xs text-white/30">
            Building the future of sports in Southeast Asia
          </p>
        </div>
      </div>
    </footer>
  )
}
