import linkBg from "assets/images/hyperlinkBg.gif";
import Image from "next/image";
import { useEffect, useRef } from "react";
import st from "./A.module.scss";

type Prop = {
  href: string;
};

const A = ({ href }: Prop) => {
  const linkRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const parentNode = linkRef.current?.parentElement;
    if (parentNode) {
      parentNode.style.width = "100%";
    }
    console.log(linkRef.current?.parentElement);
  }, []);

  return (
    <span ref={linkRef} className={st.a_container}>
      <span className={st.url}>
        URL: <br /> {href}
      </span>
      <span className={st.cover_bg}></span>
      <Image src={linkBg} alt="aImg" />
      <a href={href} className={st.a} target="_blank"></a>
    </span>
  );
};

export default A;
