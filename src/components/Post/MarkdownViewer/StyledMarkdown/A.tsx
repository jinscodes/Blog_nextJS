import Image from "next/image";

import AImg from "assets/images/programming.png";
import st from "./A.module.scss";

type Prop = {
  href: string;
};

const A = ({ href }: Prop) => {
  return (
    <span className={st.a_container}>
      <span className={st.url}>
        URL: <br /> {href}
      </span>
      <Image src={AImg} alt="aImg" />
      <a href={href} className={st.a} target="_blank"></a>
    </span>
  );
};

export default A;
