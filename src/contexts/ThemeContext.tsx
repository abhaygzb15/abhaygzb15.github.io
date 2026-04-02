import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type ThemeId = 'terminal' | 'aurora' | 'neo'

export interface ThemeMeta {
  id: ThemeId
  name: string
  desc: string
  preview: string
}

export const THEMES: ThemeMeta[] = [
  {
    id: 'terminal',
    name: 'Terminal',
    desc: 'Monospace · matrix rain · sharp edges',
    preview: '#00c853',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    desc: 'Glassmorphism · blur cards · purple gradient',
    preview: '#a855f7',
  },
  {
    id: 'neo',
    name: 'Neo',
    desc: 'Neo-brutalist · bold · stark offset borders',
    preview: '#f97316',
  },
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
