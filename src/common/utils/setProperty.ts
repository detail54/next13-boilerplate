import React from 'react'
import { propertyDataGetter } from './propertyDataGetter'

const getChangePropertyDataList = (propertys: IStyleProps): IChangePropertyData[] => {
  const getter = propertyDataGetter(propertys)

  const keys = Object.keys(propertys)
  const changePropertyDataList: IChangePropertyData[] = []

  keys.forEach((key: string) => {
    const data = getter[key]()
    if (data) changePropertyDataList.push(...data)
  })

  return changePropertyDataList
}

const setProperty = <T extends HTMLElement>(ref: React.RefObject<T>, propertys: IStyleProps) => {
  const changePropertyDataList = getChangePropertyDataList(propertys)

  changePropertyDataList.forEach((propertData) => {
    if (ref.current) {
      const value = getComputedStyle(document.documentElement).getPropertyValue(propertData.value)
      ref.current.style.setProperty(propertData.property, value)
    }
  })
}

export default setProperty
