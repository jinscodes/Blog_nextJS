import MarkdownViewer from "@/components/MarkdownViewer/MarkdownViewer";
import { getPostData } from "@/service/posts";
import Image from "next/image";

import st from "./slug.module.scss";

import { AiTwotoneCalendar } from "react-icons/ai";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, description, date, path, content } = post;

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
      <section className={st.section}>
        <div className={st.calendar}>
          <AiTwotoneCalendar />
          <p>{date.toString()}</p>
        </div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
};

export default PostPage;
