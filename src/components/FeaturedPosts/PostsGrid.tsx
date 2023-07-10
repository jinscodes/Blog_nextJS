import { Post } from "@/service/posts";

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}
    </ul>
  );
};

export default PostsGrid;
