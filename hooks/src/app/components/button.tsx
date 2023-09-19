import { useContext } from 'react'
import { ThemeContext } from '@/app/pages/index'
import styles from '`/styles/button.module.css'

export const Button = ({ children }) => {
  const theme = useContext(ThemeContext)
  const className = 'button-' + theme

  return (
    <button className={`${styles.button} ${styles[className]}`}>
      {children}
    </button>
  )
}