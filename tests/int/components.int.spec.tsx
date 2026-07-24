import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

import { Logo } from '@/components/Logo/Logo'

describe('Logo Component', () => {
  it('renders with default variant', () => {
    render(<Logo />)
    const img = screen.getByAltText('MTW Sports')
    expect(img).toBeDefined()
    expect(img.getAttribute('src')).toBe('/mtw-logo.png')
  })

  it('renders white variant', () => {
    render(<Logo variant="white" />)
    const img = screen.getByAltText('MTW Sports')
    expect(img.getAttribute('src')).toBe('/mtw-logo-white.png')
  })

  it('applies custom className', () => {
    render(<Logo className="custom-class" />)
    const img = screen.getByAltText('MTW Sports')
    expect(img.className).toContain('custom-class')
  })

  it('has correct dimensions', () => {
    render(<Logo />)
    const img = screen.getByAltText('MTW Sports')
    expect(img.getAttribute('width')).toBe('160')
    expect(img.getAttribute('height')).toBe('40')
  })
})
