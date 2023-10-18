import Image from "next/image";

import AllPost from "components/Post/AllPost/AllPosts";
import { Waves } from "components/Waves/Waves";
import { getClassedPosts } from "service/posts";
import bg from "../../../../public/images/backgrounds/1.gif";

import st from "./slug.module.scss";

type Props = {
  params: {
    postPage: string;
  };
};

const PostPage = async ({ params: { postPage } }: Props) => {
  const classedPost = await getClassedPosts(postPage);

  return (
    <article className={st.article}>
      <div className={st.img_container}>
        <div className={st.bg_cover}>
          <p>WRITE, </p>
          <p>READ, </p>
          <span>
            AND&nbsp;&nbsp;<p>UNDERSTAND</p>
          </span>
        </div>
        <Image
          src={bg}
          alt={String(bg)}
          className={st.img}
          sizes="auto"
          width={0}
          height={0}
        />
        <Waves />
      </div>
      <div className={st.posts_container}>
        <AllPost posts={classedPost} title={postPage} />
      </div>
    </article>
  );
};

export default PostPage;
