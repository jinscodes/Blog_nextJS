import { readFile } from "fs/promises";
import path from "path";
import { AboutPost, AboutPostData } from "types/aboutPost";

export const getAllPosts = async (): Promise<AboutPost[]> => {
  const filePath = path.join(process.cwd(), "data", "aboutPosts.json");

  return readFile(filePath, "utf-8")
    .then<AboutPost[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date < b.date ? -1 : 1)));
};

export const getPostData = async (fileName: string): Promise<AboutPostData> => {
  const filePath = path.join(
    process.cwd(),
    "data",
    "aboutPosts",
    `${fileName}.md`
  );
  const posts = await getAllPosts(); //
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw Error(`Can't not find the post: ${fileName}`);

  const index = posts.indexOf(post);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
};
