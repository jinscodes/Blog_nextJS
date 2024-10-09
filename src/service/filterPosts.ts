import { Post } from "types/post";
import json from "../../data/posts.json";

export const filterPosts = (title: string): Post[] => {
  const filteredPosts = json.filter((post) => post.title.includes(title));

  return filteredPosts;
};
