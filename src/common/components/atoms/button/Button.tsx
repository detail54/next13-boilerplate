import React, { useEffect, useRef } from 'react'
// styles
import style from './Button.module.css'
// lib
import cn from 'classnames'
import setProperty from '@/common/utils/setProperty'
// util

export type ButtonType = 'BasicButton' | 'RoundButton'

interface IProps {
  type?: ButtonType
  size: TSize
  styles: TButtonStyleProps
  text: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({ type = 'BasicButton', size, styles, text, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { fontColor, bgColor, marginY, marginX } = styles

  useEffect(() => {
    setProperty(ref, {
      width: size,
      height: size,
      fontColor,
      bgColor,
      marginY,
      marginX,
    })
  }, [])

  return (
    <button
      className={cn(style.basicButton, {
        [style.roundButton]: type === 'RoundButton',
      })}
      ref={ref}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
