import React from 'react'
// components
import Button from '@/common/components/atoms/button/Button'
// style
import styles from './Header.module.css'

interface IProps {
  changeThemeButtonText: string
  onChangeTheme: () => void
}

const Header: React.FC<IProps> = ({ changeThemeButtonText, onChangeTheme }) => {
  return (
    <header className={styles.header}>
      header
      <Button
        type='RoundButton'
        size='xl'
        styles={{ bgColor: 'orange-4' }}
        text={changeThemeButtonText}
        onClick={onChangeTheme}
      />
    </header>
  )
}

export default Header
