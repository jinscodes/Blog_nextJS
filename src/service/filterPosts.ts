import { Post } from "types/post";
import postsData from "../../data/posts.json";

export const filterPosts = (title: string): Post[] => {
  const trimedTitle: string = title?.toLowerCase().trim();

  const filteredPosts = trimedTitle
    ? postsData.filter((post) => post.title.toLowerCase().includes(trimedTitle))
    : postsData.filter((post) => !post.title.includes("발표")).reverse();

  return filteredPosts;
};
