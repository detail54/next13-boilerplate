const formatUrl = (url: string) => {
  const formatedUrl = url.startsWith('/') ? url : `/${url}`

  return process.env.NEXT_PUBLIC_APP_API_SERVER_URL! + formatedUrl
}

const basicApi = async <T>(url: string, option?: RequestInit): Promise<T> => {
  const res = await fetch(formatUrl(url), option)
  return res.json() as Promise<T>
}

const reValidApi = async <T>(
  url: string,
  revalidTime: number,
  option?: Omit<RequestInit, 'next'>,
): Promise<T> => {
  const res = await fetch(formatUrl(url), {
    ...option,
    next: {
      revalidate: revalidTime,
    },
    cache: 'force-cache',
  })

  return res.json() as Promise<T>
}

export { basicApi, reValidApi }
