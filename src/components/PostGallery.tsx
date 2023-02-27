import Post from './Post';

type Props = {}

const PostGallery = ({images}:any) => {
    
  return (
    <div className="mt-6 image-gallery w-[80%] h-auto mx-auto my-0 grid grid-cols-4 justify-center gap-2">
    {images.map((image:any) => (
        <Post image={image}/>
    ))}
  </div>
  )
}

export default PostGallery;