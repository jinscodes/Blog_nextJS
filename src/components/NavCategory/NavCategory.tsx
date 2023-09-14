import Image from "next/image";
import Apple from "../../../public/svg/Apple.svg";
import Caret from "../../../public/svg/Caret.svg";
import Codepen from "../../../public/svg/Codepen.svg";
import Flutter from "../../../public/svg/Flutter.svg";
import Git from "../../../public/svg/Git.svg";
import Javascript from "../../../public/svg/Javascript.svg";
import Mysql from "../../../public/svg/Mysql.svg";
import Nextjs from "../../../public/svg/Nextjs.svg";
import Reactjs from "../../../public/svg/Reactjs.svg";
import Sass from "../../../public/svg/Sass.svg";
import Typescript from "../../../public/svg/Typescript.svg";
import st from "./NavCategory.module.scss";

const NavCategory = () => {
  const svgList = [
    Javascript,
    Sass,
    Codepen,
    Reactjs,
    Nextjs,
    Typescript,
    Git,
    Mysql,
    Flutter,
    Apple,
  ];
  return (
    <section className={st.nav_category}>
      <p className={st.total}>
        TOTAL <span>1,234</span>
      </p>
      <div className={st.btn_container}>
        <button className={st.open_category_btn}>
          <div>
            <Image src={Javascript} alt="Js" width={25} height={25} />
            <span>category1</span>
          </div>
          <Image src={Caret} alt="Caret" width={20} height={20} />
        </button>
      </div>
    </section>
  );
};

export default NavCategory;
