import React from 'react'
// styles

type TInput = 'BasicInput'

interface IProps {
  type?: TInput
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder?: string
  paddingY?: TSize<'zero'>
}

const Input: React.FC<IProps> = ({
  type = 'BasicInput',
  value,
  placeHolder = '',
  onChange,
  paddingY,
}) => {
  return <input value={value} onChange={onChange} placeholder={placeHolder} />
}

export default Input
