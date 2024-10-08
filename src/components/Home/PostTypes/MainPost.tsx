"use client";

import Image from "next/image";
import Link from "next/link";

import CategoryPill from "components/CategoryPill/CategoryPill";
import ProfileAndId from "components/ProfileAndId/ProfileAndId";

import { Post } from "types/post";
import st from "./MainPost.module.scss";

interface Prop {
  post: Post;
}

const MainPost = (post: Prop) => {
  const { category, date, description, path, title } = post.post;

  return (
    <Link href={`/posts/${category}/${path}`} className={st.main_post}>
      <Image
        src={`/images/posts/${path}.png`}
        className={st.img}
        alt=""
        width="0"
        height="0"
        sizes="100vw"
      />
      <section className={st.content_container}>
        <div className={st.contents}>
          <div className={st.pill_container}>
            {category.map((el) => (
              <CategoryPill category={el} key={el} />
            ))}
          </div>
          <h3 className={st.title}>{title}</h3>
          <p className={st.description}>{description}</p>
        </div>
        <ProfileAndId date={date} />
      </section>
    </Link>
  );
};

export default MainPost;
