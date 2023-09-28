import { getAllPosts } from "@/service/posts";

import AllPost from "@/components/Post/AllPost/AllPost";
import st from "./PostPage.module.scss";

const Posts = async () => {
  const posts = await getAllPosts();
  // const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className={st.post_page}>
      <div className={st.background}>
        <div className={st.background_cover}>
          <div className={st.title}>
            <span>Do, </span>
            <span>And Practice</span>
            <div className={st.to_be}>
              To Be A <p className={st.programmer}>"PROGRAMMER"</p>
            </div>
          </div>
        </div>
      </div>
      <AllPost posts={posts} />
    </div>
  );
};

export default Posts;
