"use client";

import Markdown from "react-markdown";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

import H2Underline from "components/Post/MarkdownViewer/StyledMarkdown/H2Underline";

import A from "components/Post/MarkdownViewer/StyledMarkdown/A";
import Blockquote from "components/Post/MarkdownViewer/StyledMarkdown/Blockquote";
import H3Underline from "components/Post/MarkdownViewer/StyledMarkdown/H3Underline";
import H4 from "components/Post/MarkdownViewer/StyledMarkdown/H4";
import HrLine from "components/Post/MarkdownViewer/StyledMarkdown/HrLine";
import OlAndLi from "components/Post/MarkdownViewer/StyledMarkdown/OlAndLi";
import UlAndLi from "components/Post/MarkdownViewer/StyledMarkdown/UlAndLi";
import Image from "next/image";
import { useState } from "react";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import st from "./MarkdownViewer.module.scss";

interface Prop {
  content: string;
}

const MarkdownViewer = ({ content }: Prop) => {
  const [imageAlt, setImageAlt] = useState<string>("");

  const expandImage = (clickedAlt: string) => {
    if (imageAlt === clickedAlt) {
      setImageAlt("");
    } else {
      setImageAlt(clickedAlt);
    }
  };

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
                borderRadius: "12px",
              }}
              style={atomDark}
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
            width={400}
            height={200}
            className={`${st.image} ${
              imageAlt === image.alt && st.image_expanded
            }`}
            onClick={(e) => expandImage(e.currentTarget.alt)}
          />
        ),
        h2: ({ node, ...props }) => <H2Underline props={props} />,
        h3: ({ node, ...props }) => <H3Underline props={props} />,
        h4: ({ node, ...props }) => <H4 props={props} />,
        pre: ({ node, ...props }) => (
          <pre className={st.pre_container} {...props}></pre>
        ),
        blockquote: ({ node, ...props }) => <Blockquote props={props} />,
        ul: ({ node, ...props }) => <UlAndLi props={props} />,
        ol: ({ node, ...props }) => <OlAndLi props={props} />,
        hr: () => <HrLine />,
        a: ({ href }) => <A href={href || ""} />,
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownViewer;
