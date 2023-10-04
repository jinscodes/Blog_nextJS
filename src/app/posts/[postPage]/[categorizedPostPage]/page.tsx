import Image from "next/image";

import MarkdownViewer from "@/components/Post/MarkdownViewer/MarkdownViewer";
import { Waves } from "@/components/Waves/Waves";
import { getPostData } from "@/service/posts";

import st from "./slug.module.scss";

import { log } from "console";
import gif_bg_1 from "../../../../../public/images/backgrounds/1.gif";
import gif_bg_10 from "../../../../../public/images/backgrounds/10.gif";
import gif_bg_11 from "../../../../../public/images/backgrounds/11.gif";
import gif_bg_12 from "../../../../../public/images/backgrounds/12.gif";
import gif_bg_2 from "../../../../../public/images/backgrounds/2.gif";
import gif_bg_3 from "../../../../../public/images/backgrounds/3.gif";
import gif_bg_4 from "../../../../../public/images/backgrounds/4.gif";
import gif_bg_5 from "../../../../../public/images/backgrounds/5.gif";
import gif_bg_6 from "../../../../../public/images/backgrounds/6.gif";
import gif_bg_7 from "../../../../../public/images/backgrounds/7.gif";
import gif_bg_8 from "../../../../../public/images/backgrounds/8.gif";
import gif_bg_9 from "../../../../../public/images/backgrounds/9.gif";

type Prop = {
  params: {
    categorizedPostPage: string;
  };
};

const CategorizedPostPage = async ({
  params: { categorizedPostPage },
}: Prop) => {
  const file = await getPostData(categorizedPostPage);
  const { title, content, next, prev } = file;
  const gifBgArr = [
    gif_bg_1,
    gif_bg_2,
    gif_bg_3,
    gif_bg_4,
    gif_bg_5,
    gif_bg_6,
    gif_bg_7,
    gif_bg_8,
    gif_bg_9,
    gif_bg_10,
    gif_bg_11,
    gif_bg_12,
  ];
  const randomIdx = Math.floor(Math.random() * gifBgArr.length);

  log(file);

  return (
    <section className={st.categorized_post_page}>
      <div className={st.img_container}>
        <div className={st.bg_cover}>
          <p>{title}</p>
        </div>
        <Image
          src={gifBgArr[randomIdx]}
          alt={String(randomIdx)}
          sizes="auto"
          width={0}
          height={0}
          className={st.bg_img}
        />
        <Waves />
      </div>
      <article className={st.content_container}>
        <MarkdownViewer content={content} />
      </article>
    </section>
  );
};

export default CategorizedPostPage;
