"use client";

import ClassificationText from "components/ClassificationText/ClassificationText";
import PostCard from "components/Post/PostCard/PostCard";

import arrow from "assets/svg/Arrow.svg";
import search from "assets/svg/Search.svg";
import Image from "next/image";
import { useState } from "react";
import { Post } from "types/post";
import st from "./AllPosts.module.scss";

interface Prop {
  posts: Post[];
  title: string;
  type?: "all";
}

const AllPosts = ({ posts, title, type }: Prop) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  return (
    <div className={st.all_post}>
      <ClassificationText content={title} />

      {type === "all" && (
        <div className={st.serach_container}>
          <Image src={search} alt="search-glass" />
          <p>Search</p>
          <input
            className={st.search}
            onChange={(e) => {
              if (e.currentTarget.value.length !== 0) {
                setIsEmpty(true);
              } else {
                setIsEmpty(false);
              }
            }}
          />
          {isEmpty && (
            <Image src={arrow} alt="right-arrow" className={st.right_arrow} />
          )}
        </div>
      )}

      <div className={st.postcard_container}>
        {posts.map((post, idx) => (
          <PostCard post={post} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
