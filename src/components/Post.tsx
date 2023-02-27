import React from "react";

type Props = {
  post: {
    media_url: string;
  };
};

const Post = ({ post }: Props) => {
  return (
    <div className="image w-[300px]">
      <img src={post.media_url} alt="" className="w-full h-full" />
    </div>
  );
};

export default Post;
