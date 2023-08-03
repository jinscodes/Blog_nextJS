import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Prop {
  content: string;
}

const MarkdownViewer = ({ content }: Prop) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
};

export default MarkdownViewer;
