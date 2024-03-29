import React from "react";

type Props = {
  post: {
    media_url: string
    caption: string
  };
};

const Post = ({ post }: Props) => {
    console.log(post);
  return (
    <div className="image w-[300px] shadow-md">
      <img src={post.media_url} alt={post.caption} className="w-full h-full" />
    </div>
  );
};

export default Post;
