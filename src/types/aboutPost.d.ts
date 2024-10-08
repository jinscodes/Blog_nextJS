export type AboutPost = {
  title: string;
  date: Date;
  path: string;
  icon: string;
};

export type AboutPostData = AboutPost & {
  content: string;
  next: Post | null;
  prev: Post | null;
};
