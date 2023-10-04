"use client";

import Image from "next/image";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface Prop {
  content: string;
}

const MarkdownViewer = ({ content }: Prop) => {
  console.log("markdown", content);

  return (
    <Markdown
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
            width={300}
            height={350}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
