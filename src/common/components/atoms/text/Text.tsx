import React from 'react'
// styles

type TText = 'Text' | 'BoldText'

interface IProps {
  type?: TText
  fontColor?: TFontColor
  paddingY?: TSize<'zero'>
  text: string | number | JSX.Element | undefined
}

const Text: React.FC<IProps> = ({ type = 'Text', fontColor, paddingY, text }) => {
  return <span>{text}</span>
}

export default Text
