import { getPostData } from "@/service/posts";
import Image from "next/image";

import st from "./slug.module.scss";

import AdjacentPostCard from "@/components/AdjacentPostCard/AdjacentPostCard";
import PostContent from "@/components/PostContent/PostContent";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

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
      <section className={st.adjacent}>
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default PostPage;
