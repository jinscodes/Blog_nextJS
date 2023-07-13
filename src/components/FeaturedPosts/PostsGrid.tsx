import PostCard from "@/components/PostCard/PostCard";
import { Post } from "@/service/posts";
import st from "./PostGrid.module.scss";

type PostsGridProps = {
  posts: Post[];
};

const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={st.ul}>
      {posts.map((post) => (
        <li key={post.path} className={st.li}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;
