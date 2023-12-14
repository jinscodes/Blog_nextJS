import ErrorPost from "components/Home/PostTypes/ErrorPost";
import HomeTitle from "components/HomeTitle/HomeTitle";
import { getErrorPosts } from "service/posts";
import st from "./Err.module.scss";

const Err = async () => {
  const posts = await getErrorPosts();

  return (
    <section className={st.err}>
      <HomeTitle content="Error 🚨" />
      <div className={st.err_container}>
        {posts.map((post) => (
          <ErrorPost post={post} />
        ))}
      </div>
    </section>
  );
};

export default Err;
