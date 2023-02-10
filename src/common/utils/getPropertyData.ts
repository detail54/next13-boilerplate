const getMarginY = (marginY: TSize<'zero'>): IChangePropertyData[] => {
  return [
    { property: 'marginTop', value: `--margin-${marginY}` },
    { property: 'marginBottom', value: `--margin-${marginY}` },
  ]
}

export const getPropertyData = {
  getMarginY,
}
