import { Post } from "types/post";
import json from "../../data/posts.json";

export const filterPosts = (title: string): Post[] => {
  const trimedTitle: string = title?.trim();
  let filteredPosts;

  if (!trimedTitle) {
    const excludePresentation = json.filter(
      (post) => !post.title.includes("발표")
    );
    filteredPosts = excludePresentation.reverse();
  } else {
    filteredPosts = json.filter((post) => post.title.includes(trimedTitle));
  }

  return filteredPosts;
};
