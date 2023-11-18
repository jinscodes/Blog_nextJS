import Image from "next/image";
import Link from "next/link";

import { Post } from "service/posts";

import CategoryPill from "components/CategoryPill/CategoryPill";
import ProfileAndId from "components/ProfileAndId/ProfileAndId";

import st from "./PostCard.module.scss";

interface Prop {
  post: Post;
}

const PostCard = ({ post }: Prop) => {
  const { title, path, description, category, date } = post;

  return (
    <Link href={`/posts/${category}/${path}`} className={st.post_card}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={path}
        className={st.img}
        sizes="auto"
        width={0}
        height={0}
      />
      <div className={st.contents_container}>
        <div className={st.category}>
          {category.map((el) => (
            <CategoryPill category={el} key={el} />
          ))}
        </div>
        <p className={st.title}>{title}</p>
        <p className={st.description}>{description}</p>

        <ProfileAndId date={date} size="sm" />
      </div>
    </Link>
  );
};

export default PostCard;
