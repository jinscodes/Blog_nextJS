import { getAllPosts } from "@/service/posts";

import st from "./PostPage.module.scss";

const Posts = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div className={st.post_page}>
      <div className={st.background}>
        <div className={st.background_cover}>
          <div className={st.title}>
            <span>Practice, </span>
            <span>Practice, </span>
            <span>And Practice</span>
            <p className={st.to_be}>
              To Be A <div className={st.programmer}>"PROGRAMMER"</div>
            </p>
          </div>
        </div>
      </div>
      {/* <h2>Posts</h2> */}
      {/* <FilterablePosts posts={posts} categories={categories} /> */}
      posts page
    </div>
  );
};

export default Posts;
