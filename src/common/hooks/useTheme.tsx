import { useEffect, useState } from 'react'

type ThemeType = 'dark' | 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeType>()

  useEffect(() => {
    if (typeof window !== undefined) {
      setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      )
    }
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return [theme, setTheme, toggleTheme] as const
}
