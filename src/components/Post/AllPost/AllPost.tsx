import ClassificationText from "@/components/ClassificationText/ClassificationText";
import PostCard from "@/components/Post/PostCard/PostCard";
import { Post } from "@/service/posts";
import st from "./AllPost.module.scss";

interface Prop {
  posts: Post[];
}

const AllPost = ({ posts }: Prop) => {
  console.log(posts);

  return (
    <div className={st.all_post}>
      <ClassificationText content="분류 전체 보기" />
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

export default AllPost;
