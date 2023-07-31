import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

export const getAllPosts = async (): Promise<Post[]> => {
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
};

export const getFeaturedPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured));
};

export const getRecentPosts = async (): Promise<Post[]> => {
  return getAllPosts() //
    .then((posts) => posts.filter((post) => post.featured).slice(0, 3));
};

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));

  if (!metadata) throw Error(`Can't not find the post: ${fileName}`);

  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
};
