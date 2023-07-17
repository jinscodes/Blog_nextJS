import PostCard from "@/components/PostCard/PostCard";
import { getRecentPosts } from "@/service/posts";
import st from "./RecentPosts.module.scss";

const RecentPosts = async () => {
  const posts = await getRecentPosts();
  const recentPosts = ["Post1", "Post2", "Post3", "Post4", "Post5"];

  return (
    <div className={st.postsContainer}>
      <h4>Recent Posts</h4>
      <div className={st.cardsContainer}>
        {posts.map((post, idx) => (
          <div className={st.card}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
