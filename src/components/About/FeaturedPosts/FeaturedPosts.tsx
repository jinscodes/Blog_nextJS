import { getFeaturedPosts } from "@/service/posts";
import st from "./PostGrid.module.scss";
import PostsGrid from "./PostsGrid";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <section className={st.section}>
      <h4 className={st.section_title}>Featured Posts</h4>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
