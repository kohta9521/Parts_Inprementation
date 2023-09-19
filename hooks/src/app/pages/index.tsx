import styles from '@/app/styles/button.module.css'
import { Button } from '@/app/components/button'
import { useState, createContext } from 'react'

export const ThemeContext = createContext(null)

export default function Home() {
  const [ theme, setTheme ] = useState('light')

  return (
    <>
      <main className={`${styles.main}`}>
        <ThemeContext.Provider value={theme}>
          <div>
            <label>
              <input
                type='checkbox'
                checked={theme === 'dark'}
              onChange={(e) => {
                setTheme(e.target.checked ? 'dark' : 'light')
              }}
              />
              use dark mode
            </label>
          </div>
          <div>
            <Button>Click</Button>
          </div>
        </ThemeContext.Provider>
      </main>
    </>
  )
}