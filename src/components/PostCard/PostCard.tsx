import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import st from "./PostCard.module.scss";

interface PostCard {
  post: Post;
}

const PostCard = ({ post }: PostCard) => {
  const { title, description, date, category, path } = post;

  return (
    <Link href={`/posts/${path}`} className={st.link}>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        className={st.img}
        sizes="100vw"
        width={0}
        height={200}
      />
      <div className={st.info_container}>
        <div>
          <time>{date.toString()}</time>
          <span>{category}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PostCard;
