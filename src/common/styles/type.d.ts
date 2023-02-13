type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TZeroSize = TSize | 'zero'
type TFontSize = 'xxs' | 'xs' | 'small' | 'base' | 'large' | 'xl' | 'xxl' | 'xxxl' | 'titleSize'
type TFontWeight = 100 | 200 | 300 | 400 | 500 | 600
type TFontColor = 'theme' | 'grey' | 'white' | 'black'
type TColor =
  | 'black-1'
  | 'black-2'
  | 'black-3'
  | 'black-4'
  | 'navy-1'
  | 'navy-2'
  | 'navy-3'
  | 'navy-4'
  | 'orange-1'
  | 'orange-2'
  | 'orange-3'
  | 'orange-4'
  | 'grey-1'
  | 'grey-2'
  | 'grey-3'
  | 'grey-4'
  | 'white'

interface IStyleProps {
  width?: TSize
  height?: TSize
  fontColor?: TFontColor
  fontSize?: TFontSize
  bgColor?: TColor
  marginX?: TZeroSize
  marginY?: TZeroSize
  paddingX?: TZeroSize
  paddingY?: TZeroSize
}

type TButtonStyleProps = Pick<IStyleProps, 'marginX' | 'marginY' | 'fontColor' | 'bgColor'>
