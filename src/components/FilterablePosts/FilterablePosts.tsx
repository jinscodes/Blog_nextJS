"use client";

import PostsGrid from "@/components/About/FeaturedPosts/PostsGrid";
import { Categories } from "@/components/Categories/Categories";
import { Post } from "@/service/posts";
import { useState } from "react";

interface Props {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = "All Posts";

export const FilterablePosts = ({ posts, categories }: Props) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section>
      <PostsGrid posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
};
