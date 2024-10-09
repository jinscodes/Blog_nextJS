export type Post = {
  title: string;
  description: string;
  date: Date | string;
  category: string[];
  path: string;
  featured: boolean | undefined;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};
