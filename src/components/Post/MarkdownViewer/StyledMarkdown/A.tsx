import linkBg from "assets/images/hyperlinkBg.gif";
import chrome from "assets/svg/Chrome.svg";
import Image from "next/image";
import st from "./A.module.scss";

type Prop = {
  href: string;
  props: any;
};

const A = ({ href, props }: Prop) => {
  return (
    <>
      {props.title ? (
        <>
          <a className={st.a_container_with_title}>
            <Image className={st.chrome_icon} src={chrome} alt="" />
            {props.title}
          </a>
        </>
      ) : (
        <a href={href} className={st.a} target="_blank">
          <span className={st.a_container}>
            <span className={st.url}>
              URL: <br /> {href}
            </span>
            <span className={st.cover_bg}></span>
            <Image src={linkBg} alt="aImg" />
          </span>
        </a>
      )}
    </>
  );
};

export default A;
