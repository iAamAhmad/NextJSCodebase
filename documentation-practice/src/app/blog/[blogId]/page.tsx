import React from "react";

const BlogPage = ({ params }: { params: { blogId: string } }) => {
  return (
    <div>
      <h1>Details About Blog : {params.blogId}</h1>
    </div>
  );
};

export default BlogPage;
