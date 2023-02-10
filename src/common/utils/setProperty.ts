import React from 'react'

const getPropertyValue = (property: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(property)
}

const setProperty = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  changePropertyDataList: IChangePropertyData[],
) => {
  changePropertyDataList.forEach((propertyData) => {
    if (ref.current) {
      const value = getPropertyValue(propertyData.value)
      ref.current.style.setProperty(propertyData.property, value)
    }
  })
}

export default setProperty
