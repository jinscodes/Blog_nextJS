"use client";

import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

import H2Underline from "components/Post/MarkdownViewer/StyledMarkdown/H2Underline";

import Blockquote from "components/Post/MarkdownViewer/StyledMarkdown/Blockquote";
import HrLine from "components/Post/MarkdownViewer/StyledMarkdown/HrLine";
import OlAndLi from "components/Post/MarkdownViewer/StyledMarkdown/OlAndLi";
import UlAndLi from "components/Post/MarkdownViewer/StyledMarkdown/UlAndLi";
import Image from "next/image";
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
              showLineNumbers={true}
              showInlineLineNumbers={false}
              lineNumberStyle={{
                paddingRight: "1em",
                textAlign: "right",
                userSelect: "none",
                opacity: "0.3",
              }}
              language={match[1]}
              PreTag="div"
              {...props}
              customStyle={{
                fontSize: "16px",
                padding: "20px 20px",
                lineHeight: "22px",
                margin: "30px 0",
              }}
              style={ocean}
              className="custom-syntax-highlighter"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
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
        h2: ({ node, ...props }) => <H2Underline props={props} />,
        pre: ({ node, ...props }) => (
          <pre className={st.pre_container} {...props}></pre>
        ),
        blockquote: ({ node, ...props }) => <Blockquote props={props} />,
        ul: ({ node, ...props }) => <UlAndLi props={props} />,
        ol: ({ node, ...props }) => <OlAndLi props={props} />,
        hr: ({ node, ...props }) => <HrLine />,
        a: ({ node, ...props }) => <a {...props} className={st.a}></a>,
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
