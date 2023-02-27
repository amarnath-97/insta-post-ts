import Post from './Post';

type Props = {
    posts: never[]
}

const PostList = ({posts}: Props) => {
    
  return (
    <div className="mt-6 image-gallery w-[80%] h-auto mx-auto my-0 grid grid-cols-4 justify-center gap-2">
    {posts.map((post) => (
        <Post post={post}/>
    ))}
  </div>
  )
}

export default PostList;