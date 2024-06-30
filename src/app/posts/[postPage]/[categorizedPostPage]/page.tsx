import MarkdownViewer from "components/Post/MarkdownViewer/MarkdownViewer";
import Image from "next/image";

import { Waves } from "components/Waves/Waves";

import { getPostData } from "service/posts";

import gif_bg_1 from "assets/images/backgrounds/1.gif";
import gif_bg_10 from "assets/images/backgrounds/10.gif";
import gif_bg_11 from "assets/images/backgrounds/11.gif";
import gif_bg_12 from "assets/images/backgrounds/12.gif";
import gif_bg_2 from "assets/images/backgrounds/2.gif";
import gif_bg_3 from "assets/images/backgrounds/3.gif";
import gif_bg_4 from "assets/images/backgrounds/4.gif";
import gif_bg_5 from "assets/images/backgrounds/5.gif";
import gif_bg_6 from "assets/images/backgrounds/6.gif";
import gif_bg_7 from "assets/images/backgrounds/7.gif";
import gif_bg_8 from "assets/images/backgrounds/8.gif";
import gif_bg_9 from "assets/images/backgrounds/9.gif";
import Calendar from "assets/svg/Calendar.svg";
import st from "./slug.module.scss";

type Prop = {
  params: {
    categorizedPostPage: string;
  };
};

const CategorizedPostPage = async ({
  params: { categorizedPostPage },
}: Prop) => {
  const categories: string[] = [];
  const file = await getPostData(categorizedPostPage);
  const { title, category, content, date, next, prev } = file;
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
  category.forEach((el) => categories.push(el));

  return (
    <section className={st.categorized_post_page}>
      <div className={st.img_container}>
        <div className={st.bg_cover}>
          <p className={st.category}>{categories.join("/")}</p>
          <div className={st.bg_cover_title}>
            <p className={st.title}>{title}</p>
          </div>
          <div className={st.bg_cover_date}>
            <Image src={Calendar} alt="calendar" />
            <p className={st.date}>{String(date)}</p>
          </div>
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
