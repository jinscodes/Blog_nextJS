"use client";

import Image from "next/image";
import Link from "next/link";

import CategoryPill from "@/components/CategoryPill/CategoryPill";
import ProfileAndId from "@/components/ProfileAndId/ProfileAndId";
import { Post } from "@/service/posts";
import st from "./OtherPosts.module.scss";

interface Prop {
  post: Post;
}

const OtherPosts = ({ post }: Prop) => {
  console.log(post);
  const { title, description, date, category, path } = post;

  return (
    <Link href={`/post/${path}`} className={st.other_posts}>
      <Image
        className={st.img}
        height="0"
        width="0"
        sizes="100vw"
        src={`/images/posts/${path}.png`}
        alt={path}
      />
      <section className={st.content_container}>
        <div className={st.pill_and_title}>
          <CategoryPill category={category} />
          <div>{title}</div>
        </div>
        <div className={st.profileId_container}>
          <ProfileAndId date={date} size="sm" />
        </div>
      </section>
    </Link>
  );
};

export default OtherPosts;
