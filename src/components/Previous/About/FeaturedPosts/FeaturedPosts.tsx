import Carousel from "@/components/Previous/Carousel/Carousel";
import { getFeaturedPosts } from "@/service/posts";
import st from "./FeaturedPosts.module.scss";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <div className={st.carousel_container}>
      <div className={st.postsContainer}>
        <h4 className={st.title}>Featured Posts</h4>
        <Carousel posts={posts} />
      </div>
    </div>
  );
};

export default FeaturedPosts;
