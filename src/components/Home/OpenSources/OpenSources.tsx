import { getOpenSourcePosts } from "service/posts";

import SourcePost from "components/Home/PostTypes/SourcePost";
import HomeTitle from "components/HomeTitle/HomeTitle";

import st from "./OpenSources.module.scss";

const OpenSources = async () => {
  const posts = await getOpenSourcePosts();

  return (
    <section className={st.open_sources}>
      <HomeTitle content="Open Sources 📚" />
      <div className={st.source_container}>
        {posts.map((post) => (
          <SourcePost post={post} />
        ))}
      </div>
    </section>
  );
};

export default OpenSources;
