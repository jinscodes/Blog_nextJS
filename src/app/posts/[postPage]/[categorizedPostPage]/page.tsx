import MarkdownViewer from "@/components/Post/MarkdownViewer/MarkdownViewer";
import { getPostData } from "@/service/posts";

type Prop = {
  params: {
    categorizedPostPage: string;
  };
};

const CategorizedPostPage = async ({
  params: { categorizedPostPage },
}: Prop) => {
  const file = await getPostData(categorizedPostPage);
  const { content, next, prev } = file;

  return (
    <section>
      slug2 page {categorizedPostPage}
      <article>
        <MarkdownViewer content={content} />
        {/*  */}
      </article>
    </section>
  );
};

export default CategorizedPostPage;
