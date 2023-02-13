interface IChangePropertyData {
  property: string
  value: string
}

type TPropertyDataGetter = { [key: string]: () => IChangePropertyData[] | undefined }
