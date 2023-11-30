import Image from "next/image";

import AImg from "assets/images/programming.png";
import st from "./A.module.scss";

type Prop = {
  props: any;
  href: string;
};

const A = ({ props, href }: Prop) => {
  return (
    <div className={st.a_container}>
      <p>
        URL: <br /> {href}
      </p>
      <Image src={AImg} alt="aImg" />
      <a href={href} className={st.a}></a>
    </div>
  );
};

export default A;
