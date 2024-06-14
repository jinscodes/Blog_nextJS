"use client";

import Image from "next/image";
import Link from "next/link";

import { Post } from "service/posts";

import CategoryPill from "components/CategoryPill/CategoryPill";
import ProfileAndId from "components/ProfileAndId/ProfileAndId";

import { useEffect, useState } from "react";
import st from "./OtherPosts.module.scss";

interface Prop {
  post: Post;
}

const OtherPosts = ({ post }: Prop) => {
  const [postTitle, setPostTitle] = useState<string>("");
  const { title, description, date, category, path } = post;

  useEffect(() => {
    if (title.length > 32) {
      setPostTitle(title.slice(0, 32).concat("..."));
    } else {
      setPostTitle(title);
    }
  }, []);

  return (
    <Link href={`/posts/${category}/${path}`} className={st.other_posts}>
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
          <div className={st.pill_container}>
            {category.map((el) => (
              <CategoryPill category={el} key={el} />
            ))}
          </div>
          <div className={st.title}>{postTitle}</div>
          <div className={st.description}>{description}</div>
        </div>
        <div className={st.profileId_container}>
          <ProfileAndId date={date} size="sm" />
        </div>
      </section>
    </Link>
  );
};

export default OtherPosts;
