import { reValidApi } from '@/common/api/api'
import URLS from '@/common/api/urls'

export const getPostList = async () => {
  return await reValidApi<IPost[]>(URLS.POSTS, 5)
}
