import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

const FeaturedPosts = async () => {
  const posts = await getAllPosts();

  return (
    <section>
      <h4>Featured Posts</h4>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
