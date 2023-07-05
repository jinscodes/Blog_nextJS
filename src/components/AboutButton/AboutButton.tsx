"use client";

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Link from "next/link";
import Image from "next/image";

import st from "./AboutButton.module.scss";
import check from "../../../public/svg/check.svg";

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
      <Image className={st.github} src={src} alt="github" />
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
            <Image className={st.check_logo} src={check} alt={check} />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Image className={st.email_logo} src={src} alt="gmail" />
            <span>{title}</span>
          </>
        )}
      </button>
    </CopyToClipboard>
  );
};

export default AboutButton;
