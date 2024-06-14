import linkBg from "assets/images/hyperlinkBg.gif";
import Image from "next/image";
import st from "./A.module.scss";

type Prop = {
  href: string;
};

const A = ({ href }: Prop) => {
  return (
    <a href={href} className={st.a} target="_blank">
      <span className={st.a_container}>
        <span className={st.url}>
          URL: <br /> {href}
        </span>
        <span className={st.cover_bg}></span>
        <Image src={linkBg} alt="aImg" />
      </span>
    </a>
  );
};

export default A;
