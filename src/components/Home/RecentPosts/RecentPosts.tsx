import HomeTitle from "@/components/HomeTitle/HomeTitle";
import st from "./RecentPosts.module.scss";

const RecentPosts = () => {
  return (
    <div className={st.recent_posts}>
      <HomeTitle content="Recent Posts ⭐️" />
      <div className={st.posts_container}>
        <div>first post</div>
        <div>
          <div>second post</div>
          <div>third post</div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
