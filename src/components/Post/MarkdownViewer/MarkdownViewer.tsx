"use client";

import Image from "next/image";

import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

import st from "./MarkdownViewer.module.scss";

interface Prop {
  content: string;
}

const MarkdownViewer = ({ content }: Prop) => {
  return (
    <Markdown
      className={st.markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={0}
            height={0}
            sizes="auto"
            className={st.image}
          />
        ),
        h2: "h2",
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
