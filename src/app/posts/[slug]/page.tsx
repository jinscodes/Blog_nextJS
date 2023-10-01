import { Waves } from "@/components/Waves/Waves";
import { getPostData } from "@/service/posts";
import st from "./slug.module.scss";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  // const post = await getPostData(slug);
  // const { title, path, next, prev } = post;
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className={st.article}>
      <img src={`/images/posts/${path}.png`} alt={path} className={st.img} />
      {slug} page
      <Waves />
    </article>
  );
};

export default PostPage;
