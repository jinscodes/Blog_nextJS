import MainPost from "@/components/Home/PostTypes/MainPost";
import OtherPosts from "@/components/Home/PostTypes/OtherPosts";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import { getRecentPosts } from "@/service/posts";

import st from "./RecentPosts.module.scss";

const RecentPosts = async () => {
  const posts = await getRecentPosts();
  console.log(posts);

  return (
    <div className={st.recent_posts}>
      <HomeTitle content="Recent Posts ⭐️" />
      <div className={st.posts_container}>
        <MainPost post={posts[0]} />
        <div className={st.other_posts_container}>
          {posts.map((post, idx) => (
            <>{idx !== 0 && <OtherPosts post={post} />}</>
          ))}
        </div>
        {/* <OtherPosts post={posts} /> */}
      </div>
    </div>
  );
};

export default RecentPosts;
