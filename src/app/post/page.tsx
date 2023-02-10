import { getPostList } from './postApi'
import * as S from './Posts.styles'

const Posts = async () => {
  const postList: IPost[] = await getPostList()

  return (
    <main>
      {postList.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </main>
  )
}

export default Posts
