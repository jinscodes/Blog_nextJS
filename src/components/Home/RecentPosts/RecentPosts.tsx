import { getRecentPosts } from "service/posts";

import MainPost from "components/Home/PostTypes/MainPost";
import OtherPosts from "components/Home/PostTypes/OtherPosts";
import HomeTitle from "components/HomeTitle/HomeTitle";

import st from "./RecentPosts.module.scss";

const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <section className={st.recent_posts}>
      <HomeTitle content="Recent Posts ⭐️" />
      <div className={st.posts_container}>
        <MainPost post={posts[0]} />
        <div className={st.other_posts_container}>
          {posts.map((post, idx) => (
            <>{idx !== 0 && idx < 3 && <OtherPosts post={post} key={idx} />}</>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
