'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = data?.navItems || []

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="link" className="font-inter text-body-md text-on-surface hover:text-secondary transition-colors" />
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-on-surface hover:text-secondary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[72px] z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Nav Drawer */}
      <nav
        className={`fixed top-[72px] right-0 z-50 h-[calc(100vh-72px)] w-72 bg-white shadow-xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          {navItems.map(({ link }, i) => (
            <CMSLink
              key={i}
              {...link}
              appearance="link"
              className="font-inter text-lg font-medium text-on-surface hover:text-secondary hover:bg-primary/5 px-4 py-3 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </nav>
    </>
  )
}
