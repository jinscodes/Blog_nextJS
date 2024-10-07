import ClassificationText from "components/ClassificationText/ClassificationText";
import PostCard from "components/Post/PostCard/PostCard";
import { Post } from "service/posts";

import search from "assets/svg/Search.svg";
import Image from "next/image";
import st from "./AllPosts.module.scss";

interface Prop {
  posts: Post[];
  title: string;
  type?: "all";
}

const AllPosts = ({ posts, title, type }: Prop) => {
  console.log(type);

  return (
    <div className={st.all_post}>
      <ClassificationText content={title} />

      {type === "all" && (
        <div className={st.serach_container}>
          <Image src={search} alt="search-glass" />
          <p>Search</p>
          <input className={st.search} />
        </div>
      )}

      <div className={st.postcard_container}>
        {posts.map((post, idx) => (
          <>
            <PostCard post={post} key={idx} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
