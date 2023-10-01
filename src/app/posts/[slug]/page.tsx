import { Waves } from "@/components/Waves/Waves";
import { getClassedPosts } from "@/service/posts";
import bg from "../../../../public/images/backgrounds/1.gif";

import AllPost from "@/components/Post/AllPost/AllPost";
import Image from "next/image";
import st from "./slug.module.scss";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  // const post = await getPostData(slug);
  // const { title, path, next, prev } = post;

  // const post = await getPostData(slug);
  const classedPost = await getClassedPosts(slug);

  return (
    <article className={st.article}>
      <div className={st.img_container}>
        <div className={st.bg_cover}></div>
        <Image
          src={bg}
          alt={"1"}
          className={st.img}
          sizes="auto"
          width={0}
          height={0}
        />
        <Waves />
      </div>
      <div>
        <AllPost posts={classedPost} />
      </div>
    </article>
  );
};

export default PostPage;
