import Link from "next/link";

import { Post } from "service/posts";

import CategoryPill from "components/CategoryPill/CategoryPill";

import st from "./SourcePost.module.scss";

interface Prop {
  post: Post;
}

const SourcePost = ({ post }: Prop) => {
  const { title, description, path, category } = post;

  return (
    <Link
      href={`/posts/${category}/${path}`}
      style={{ backgroundImage: `url('/images/posts/${path}.png')` }}
      className={st.opensource_card}
    >
      <div className={st.gradient_bg}>
        <div className={st.content_container}>
          <CategoryPill category={category} />
          <div>
            <div className={st.title}>{title}</div>
            <p className={st.description}>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SourcePost;
