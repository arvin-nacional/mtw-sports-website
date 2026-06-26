'use client'

import React, { createContext, use, useEffect } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'

const theme: Theme = 'light'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const setTheme = (_themeToSet: Theme | null) => {
    // Theme switching is disabled — light mode only
  }

  useEffect(() => {
    if (canUseDOM) {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
