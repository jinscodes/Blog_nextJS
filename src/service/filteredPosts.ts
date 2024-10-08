import json from "../../data/posts.json";

export const filteredPosts = (title: string) => {
  const filteredPosts = json.filter((post) => post.title.includes(title));

  return filteredPosts;
};
