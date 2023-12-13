import HomeTitle from "components/HomeTitle/HomeTitle";
import { getErrorPosts } from "service/posts";
import st from "./Err.module.scss";

const Err = async () => {
  const posts = await getErrorPosts();

  console.log(posts);

  return (
    <section className={st.err}>
      <HomeTitle content="Error 🚨" />
      <div className={st.err_container}>
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>
    </section>
  );
};

export default Err;
