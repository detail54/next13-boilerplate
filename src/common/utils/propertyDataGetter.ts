const getMarginY = (marginY: TZeroSize): IChangePropertyData[] => {
  return [
    { property: 'marginTop', value: `--margin-${marginY}` },
    { property: 'marginBottom', value: `--margin-${marginY}` },
  ]
}

const getMarginX = (marginX: TZeroSize): IChangePropertyData[] => {
  return [
    { property: 'marginLeft', value: `--margin-${marginX}` },
    { property: 'marginRight', value: `--margin-${marginX}` },
  ]
}

const getPaddingY = (paddingY: TZeroSize): IChangePropertyData[] => {
  return [
    { property: 'paddingTop', value: `--padding-${paddingY}` },
    { property: 'paddingBottom', value: `--padding-${paddingY}` },
  ]
}

const getPaddingX = (paddingX: TZeroSize): IChangePropertyData[] => {
  return [
    { property: 'paddingLeft', value: `--padding-${paddingX}` },
    { property: 'paddingRight', value: `--padding-${paddingX}` },
  ]
}

const getBgColor = (bgColor: TColor): IChangePropertyData[] => {
  return [{ property: 'backgroundColor', value: `--color-${bgColor}` }]
}

const getFontColor = (color: TFontColor): IChangePropertyData[] => {
  return [{ property: 'color', value: `--font-color-${color}` }]
}

const getFontSize = (size: TFontSize): IChangePropertyData[] => {
  return [{ property: 'fontSize', value: `--font-size-${size}` }]
}

const getButtonWidth = (width: TSize): IChangePropertyData[] => {
  return [{ property: 'width', value: `--button-width-${width}` }]
}

const getButtonHeight = (height: TSize): IChangePropertyData[] => {
  return [{ property: 'height', value: `--button-height-${height}` }]
}

export const propertyDataGetter = (propertys: IStyleProps): TPropertyDataGetter => {
  const { width, height, fontColor, fontSize, bgColor, marginX, marginY, paddingX, paddingY } =
    propertys

  return {
    width: () => width && getButtonWidth(width),
    height: () => height && getButtonHeight(height),
    fontColor: () => fontColor && getFontColor(fontColor),
    fontSize: () => fontSize && getFontSize(fontSize),
    bgColor: () => bgColor && getBgColor(bgColor),
    marginX: () => marginX && getMarginX(marginX),
    marginY: () => marginY && getMarginY(marginY),
    paddingX: () => paddingX && getPaddingX(paddingX),
    paddingY: () => paddingY && getPaddingY(paddingY),
  }
}
