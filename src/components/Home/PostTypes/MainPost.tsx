"use client";

import Image from "next/image";
import Link from "next/link";

import { Post } from "@/service/posts";
import st from "./MainPost.module.scss";

interface Prop {
  posts: Post;
}

const MainPost = (posts: Prop) => {
  console.log(posts);
  const { category, date, description, featured, path, title } = posts.posts;

  return (
    <Link href={`/post/${path}`} className={st.main_post}>
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
          <div className={st.category}>{category}</div>
          <h3 className={st.title}>{title}</h3>
          <p className={st.description}>{description}</p>
        </div>
        <div className={st.info}>
          <div>
            <div className={st.profile}></div>
            <span>Jay_H</span>
          </div>
          <span className={st.date}>{date.toString()}</span>
        </div>
      </section>
    </Link>
  );
};

export default MainPost;
