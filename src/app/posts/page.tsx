import PostTitle from "assets/images/PostTitle.png";
import AllPost from "components/Post/AllPost/AllPosts";

import Image from "next/image";
import { getAllPosts } from "service/posts";
import st from "./PostPage.module.scss";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <div className={st.post_page}>
      <div className={st.background}>
        <div className={st.background_cover}>
          <Image className={st.post_title} src={PostTitle} alt="" />
        </div>
      </div>
      <AllPost posts={posts} title="All Posts" type="all" />
    </div>
  );
};

export default Posts;
