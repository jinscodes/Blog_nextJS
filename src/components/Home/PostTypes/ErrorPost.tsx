import CategoryPill from "components/CategoryPill/CategoryPill";
import ProfileAndId from "components/ProfileAndId/ProfileAndId";
import Link from "next/link";
import { Post } from "service/posts";
import st from "./ErrorPost.module.scss";

interface Prop {
  post: Post;
}

const ErrorPost = ({ post }: Prop) => {
  return (
    <Link
      href={`/posts/${post.category}/${post.path}`}
      className={st.errorPost}
    >
      <div className={st.inner_post_container}>
        <div className={st.category_container}>
          {post.category.map((el) => (
            <CategoryPill category={el} />
          ))}
        </div>
        <div className={st.post_info_container}>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <ProfileAndId date={post.date} size="sm" />
        </div>
      </div>
      <img
        className={st.post_image}
        src={`/images/posts/${post.path}.png`}
        alt=""
      />
      {/* <div className={st.inner_post_container}>
        <div className={st.category_container}>
          {post.category.map((el) => (
            <CategoryPill category={el} />
          ))}
        </div>
        <div className={st.post_info_container}>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <div>
            <ProfileAndId date={post.date} size="sm" />
          </div>
        </div>
      </div>
      <img
        className={st.img}
        src={`/images/posts/${post.path}.png`}
        alt={post.path}
      /> */}
    </Link>
  );
};

export default ErrorPost;
