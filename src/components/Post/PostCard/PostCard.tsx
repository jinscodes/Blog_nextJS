import { Post } from "@/service/posts";
import st from "./PostCard.module.scss";

interface Prop {
  post: Post;
}

const PostCard = ({ post }: Prop) => {
  const { title, path, description, category, date } = post;

  return (
    <div className={st.post_card}>
      <img src={`/images/posts/${path}.png`} alt={path} className={st.img} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <div>{category}</div>
        <div>{String(date)}</div>
      </div>
    </div>
  );
};

export default PostCard;
