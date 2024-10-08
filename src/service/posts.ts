import { readFile } from "fs/promises";
import path from "path";
import { Post, PostData } from "types/post";

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured).slice(0, 5));
};

export const getRecentPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.slice(0, 5));
};

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw Error(`Can't not find the post: ${fileName}`);

  const index = posts.indexOf(post);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
};

export const getOpenSourcePosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) =>
      posts.filter((post) => post.category.includes("OpenSource")).slice(0, 4)
    );
};

export const getErrorPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) =>
      posts.filter((post) => post.category.includes("Error")).slice(0, 4)
    );
};

export const getClassedPosts = async (classedFile: string): Promise<Post[]> => {
  const allPosts = await getAllPosts();

  const filteredPosts = allPosts.filter((posts) =>
    posts.category.includes(classedFile)
  );

  return filteredPosts;
};
