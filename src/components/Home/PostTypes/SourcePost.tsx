import Link from "next/link";

import CategoryPill from "components/CategoryPill/CategoryPill";

import { Post } from "types/post";
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
          <div className={st.pill_container}>
            {category.map((el, idx) => (
              <CategoryPill category={el} key={idx} />
            ))}
          </div>
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
