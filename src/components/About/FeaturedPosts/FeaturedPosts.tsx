import Carousel from "@/components/Carousel/Carousel";
import { getFeaturedPosts } from "@/service/posts";
import st from "./FeaturedPosts.module.scss";

const FeaturedPosts = async () => {
  const posts = await getFeaturedPosts();

  return (
    <div className={st.carousel_container}>
      <div className={st.postsContainer}>
        <h4>Featured Posts</h4>
        <Carousel posts={posts} />
        {/* <div className={st.cardsContainer}>
          {posts.map((post, idx) => (
            <div key={idx} className={st.card}>
              <PostCard post={post} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedPosts;
