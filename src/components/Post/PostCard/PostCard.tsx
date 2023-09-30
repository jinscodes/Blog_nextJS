import CategoryPill from "@/components/CategoryPill/CategoryPill";
import ProfileAndId from "@/components/ProfileAndId/ProfileAndId";
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
      <div className={st.contents_container}>
        <CategoryPill category={category} />
        <p className={st.title}>{title}</p>
        <p className={st.description}>{description}</p>
        <ProfileAndId date={date} size="sm" />
      </div>
    </div>
  );
};

export default PostCard;
