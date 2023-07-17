"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import check from "../../../../public/svg/check.svg";
import st from "./AboutButton.module.scss";

interface AboutButtonProps {
  props: {
    copyText?: string;
    title: string;
    src: string;
    link: boolean;
  };
}

const AboutButton = ({ props }: AboutButtonProps) => {
  const { copyText, title, src, link } = props;

  return (
    <>
      {link && LinkButton("GITHUB", src)}
      {!link && CopiedButton(copyText!, title, src)}
    </>
  );
};

const LinkButton = (title: string, src: string) => {
  return (
    <Link
      className={st.link}
      href="https://github.com/jinscodes"
      target="_blank"
    >
      <Image
        className={st.github}
        src={src}
        width="0"
        height="0"
        alt="github"
      />
      <span>{title}</span>
    </Link>
  );
};

const CopiedButton = (copyText: string, title: string, src: string) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={copyText}>
      <button className={`${st.link} ${st.email}`} onClick={handleClick}>
        {isCopied ? (
          <>
            <Image
              className={st.check_logo}
              src={check}
              alt={check}
              width="0"
              height="0"
            />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Image
              className={st.email_logo}
              src={src}
              alt="gmail"
              width="0"
              height="0"
            />
            <span>{title}</span>
          </>
        )}
      </button>
    </CopyToClipboard>
  );
};

export default AboutButton;
