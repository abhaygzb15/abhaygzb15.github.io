import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeId = 'terminal' | 'modern' | 'cyberpunk'

export interface ThemeMeta {
  id: ThemeId
  name: string
  desc: string
  preview: string   // accent hex for the swatch dot
}

export const THEMES: ThemeMeta[] = [
  { id: 'terminal',  name: 'Terminal',    desc: 'Retro hacker aesthetic',        preview: '#00c853' },
  { id: 'modern',    name: 'Modern Dark', desc: 'Warm dark with orange accents', preview: '#f97316' },
  { id: 'cyberpunk', name: 'Cyberpunk',   desc: 'Dark navy with cyan glow',      preview: '#06b6d4' },
]

interface ThemeContextType {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'terminal', setTheme: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    return (localStorage.getItem('portfolio-theme') as ThemeId) || 'terminal'
  })

  const setTheme = (t: ThemeId) => {
    setThemeState(t)
    document.documentElement.setAttribute('data-theme', t)
    localStorage.setItem('portfolio-theme', t)
  }

  // Apply on first render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
