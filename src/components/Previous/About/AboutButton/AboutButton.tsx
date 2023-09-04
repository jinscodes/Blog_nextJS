"use client";

import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import check from "../../../../public/svg/Check.svg";
import st from "./AboutButton.module.scss";

interface AboutButtonProps {
  props: {
    copyText?: string;
    title: string;
    src: string;
    link: boolean;
    bgColor?: string;
    path?: string;
    setState?: Dispatch<SetStateAction<boolean>>;
  };
}

const AboutButton = ({ props }: AboutButtonProps) => {
  const { copyText, title, src, link, bgColor, path, setState } = props;

  return (
    <>
      {link && LinkButton(title, src, bgColor, path)}
      {!link && CopiedButton(copyText!, title, src, setState && setState)}
    </>
  );
};

const LinkButton = (
  title: string,
  src: string,
  bgColor?: string,
  path?: string
) => {
  return (
    <Link
      style={{ backgroundColor: bgColor }}
      className={st.link}
      href={path || ""}
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

const CopiedButton = (
  copyText: string,
  title: string,
  src: string,
  setState?: Dispatch<SetStateAction<boolean>>
) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <CopyToClipboard text={copyText}>
      <button
        className={`${st.link} ${st.email}`}
        onClick={() => {
          handleClick();
          setState && setState((prev) => !prev);
        }}
      >
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
