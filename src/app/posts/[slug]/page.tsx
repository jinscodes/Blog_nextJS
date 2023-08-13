import { getPostData } from "@/service/posts";
import Image from "next/image";

import st from "./slug.module.scss";

import PostContent from "@/components/PostContent/PostContent";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className={st.article}>
      <h1>{title}</h1>
      <div className={st.img_frame}>
        <Image
          src={`/images/posts/${path}.png`}
          alt="path"
          width={0}
          height={0}
          sizes="100vw"
          className={st.img}
        />
      </div>
      <PostContent post={post} />
    </article>
  );
};

export default PostPage;
