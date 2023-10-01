import { AiTwotoneCalendar } from "react-icons/ai";

import { PostData } from "@/service/posts";

import MarkdownViewer from "@/components/Post/MarkdownViewer/MarkdownViewer";
import st from "./PostContent.module.scss";

interface Prop {
  post: PostData;
}

const PostContent = ({ post }: Prop) => {
  const { date, content } = post;

  return (
    <section className={st.section}>
      <div className={st.calendar}>
        <AiTwotoneCalendar className={st.calendar_icon} />
        <p>{date.toString()}</p>
      </div>
      <MarkdownViewer content={content} />
    </section>
  );
};

export default PostContent;
