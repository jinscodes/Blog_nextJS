import CategoryPill from "@/components/CategoryPill/CategoryPill";
import { Post } from "@/service/posts";
import st from "./SourcePost.module.scss";

interface Prop {
  post: Post;
}

const SourcePost = ({ post }: Prop) => {
  const { title, description, path } = post;

  return (
    <div
      style={{ backgroundImage: `url('/post/${path}')` }}
      className={st.opensource_card}
    >
      <img src={`post/`} alt="" />
      <div className={st.content_container}>
        <CategoryPill category="git" />
        <div>
          <div className={st.title}>{title}</div>
          <p className={st.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SourcePost;
