type TSize<T = string> = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | T
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

interface ITheme {
  calcRem: (size: number) => string
  fontSizes: Record<TFontSize, string>
  fontWeight: Record<TSize, TFontWeight>
  buttonWidth: Record<TSize, string>
  buttonHeight: Record<TSize, string>
  breakPoint: Record<TSize, string>
  paddings: Record<TSize<'zero'>, string>
  margins: Record<TSize<'zero'>, string>
  colors: Record<TColor, string>
  fontColors: Record<TFontColor, string>
  backgroundColor: string
}

interface IStyleProps {
  size?: TSize
  fontColor?: TFontColor
  fontSize?: TFontSize
  fontWeight?: TFontWeight
  bgColor?: TColor
  mediaSize?: TSize
  marginX?: TSize<'zero'>
  marginY?: TSize<'zero'>
  paddingX?: TSize<'zero'>
  paddingY?: TSize<'zero'>
}

type TButtonStyleProps = Pick<IStyleProps, 'marginX', 'marginY', 'bgColor', 'fontColor', 'size'>
interface IBoareStyleProps extends IStyleProps {
  height: number
}
