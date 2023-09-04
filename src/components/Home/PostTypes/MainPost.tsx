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
    </Link>
  );
};

export default MainPost;
