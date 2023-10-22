import ClassificationText from "components/ClassificationText/ClassificationText";
import PostCard from "components/Post/PostCard/PostCard";
import { Post } from "service/posts";

import st from "./AllPosts.module.scss";

interface Prop {
  posts: Post[];
  title: string;
}

const AllPosts = ({ posts, title }: Prop) => {
  return (
    <div className={st.all_post}>
      <ClassificationText content={title} />
      <div className={st.postcard_container}>
        {posts.map((post) => (
          <>
            <PostCard post={post} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
