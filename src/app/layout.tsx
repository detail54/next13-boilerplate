'use client'

import { Inter } from '@next/font/google'
import { useTheme } from '@/common/hooks/useTheme'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'
import darkTheme from '@/common/styles/DarkTheme.module.css'
import ligthTheme from '@/common/styles/LightTheme.module.css'
import 'normalize.css'
import '@/common/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [theme, , toggleTheme] = useTheme()

  return (
    <html
      lang='ko'
      className={`${inter.className} ${theme === 'dark' ? darkTheme.theme : ligthTheme.theme}`}
    >
      <head />
      <body>
        {theme && (
          <>
            <Header
              changeThemeButtonText={theme === 'dark' ? 'ligth mode' : 'dark mode'}
              onChangeTheme={toggleTheme}
            />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}

export default RootLayout
