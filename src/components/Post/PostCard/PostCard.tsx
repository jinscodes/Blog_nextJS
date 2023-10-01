import CategoryPill from "@/components/CategoryPill/CategoryPill";
import ProfileAndId from "@/components/ProfileAndId/ProfileAndId";
import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import st from "./PostCard.module.scss";

interface Prop {
  post: Post;
}

const PostCard = ({ post }: Prop) => {
  const { title, path, description, category, date } = post;

  return (
    <Link href={`/posts/${path}`} className={st.post_card}>
      <Image src={`/images/posts/${path}.png`} alt={path} className={st.img} />
      <div className={st.contents_container}>
        <div className={st.category}>
          <CategoryPill category={category} />
        </div>
        <p className={st.title}>{title}</p>
        <p className={st.description}>{description}</p>

        <ProfileAndId date={date} size="sm" />
      </div>
    </Link>
  );
};

export default PostCard;
