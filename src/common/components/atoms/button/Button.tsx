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
  styles: TButtonStyleProps
  text: string
  onClick: () => void
}

const Button: React.FC<IProps> = ({ type = 'BasicButton', styles, text, onClick }) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { size, fontColor, bgColor, marginY, marginX } = styles

  useEffect(() => {
    const changPropertyDataList: IChangePropertyData[] = []

    changPropertyDataList.push({ property: 'width', value: `--button-width-${size}` })
    changPropertyDataList.push({ property: 'height', value: `--button-height-${size}` })

    if (fontColor) {
      changPropertyDataList.push({ property: 'color', value: `--font-color-${fontColor}` })
    }
    if (bgColor) {
      changPropertyDataList.push({ property: 'backgroundColor', value: `--color-${bgColor}` })
    }
    if (marginY) {
      changPropertyDataList.push({ property: 'marginTop', value: `--margin-${marginY}` })
      changPropertyDataList.push({ property: 'marginBottom', value: `--margin-${marginY}` })
    }
    if (marginX) {
      changPropertyDataList.push({ property: 'marginLeft', value: `--margin-${marginY}` })
      changPropertyDataList.push({ property: 'marginRight', value: `--margin-${marginY}` })
    }

    setProperty(ref, changPropertyDataList)
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
