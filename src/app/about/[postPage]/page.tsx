import MarkdownViewer from "components/Post/MarkdownViewer/MarkdownViewer";
import { getPostData } from "service/aboutPosts";
import st from "./page.module.scss";

type Props = {
  params: {
    postPage: string;
  };
};

export const PostPage = async ({ params: { postPage } }: Props) => {
  const classifiedPost = await getPostData(postPage);

  return (
    <section className={st.section}>
      <div className={st.post_container}>
        <div className={st.title_container}>
          <h1 className={st.title}>{classifiedPost.title}</h1>
        </div>
        <article className={st.content_container}>
          <MarkdownViewer content={classifiedPost.content} />
        </article>
      </div>
    </section>
  );
};
export default PostPage;
