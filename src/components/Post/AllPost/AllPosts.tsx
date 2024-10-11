"use client";

import ClassificationText from "components/ClassificationText/ClassificationText";
import PostCard from "components/Post/PostCard/PostCard";

import arrow from "assets/svg/Arrow.svg";
import search from "assets/svg/Search.svg";
import Image from "next/image";
import { KeyboardEvent, useEffect, useState } from "react";
import { filterPosts } from "service/filterPosts";
import { Post } from "types/post";
import st from "./AllPosts.module.scss";

interface Prop {
  posts: Post[];
  title: string;
}

const AllPosts = ({ posts, title }: Prop) => {
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>();
  const [searchWord, setSearchWord] = useState<string>();
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  const handleClick = () => {
    const filteredPosts = filterPosts(searchWord!);

    setDisplayedPosts(filteredPosts);
  };

  const activeEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    setDisplayedPosts(posts);
  }, []);

  return (
    <div className={st.all_post}>
      <ClassificationText content={title} />

      <div className={st.serach_container}>
        <Image src={search} alt="search-glass" />
        <p>Search</p>
        <input
          className={st.search}
          onKeyDown={(e) => activeEnter(e)}
          onChange={(e) => {
            if (e.currentTarget.value.length !== 0) {
              setIsEmpty(true);
            } else {
              setIsEmpty(false);
            }
            setSearchWord(e.currentTarget.value);
          }}
        />
        {isEmpty && (
          <Image
            src={arrow}
            alt="right-arrow"
            className={st.right_arrow}
            onClick={() => handleClick()}
          />
        )}
      </div>

      <div className={st.postcard_container}>
        {displayedPosts?.map((post, idx) => (
          <PostCard post={post} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
