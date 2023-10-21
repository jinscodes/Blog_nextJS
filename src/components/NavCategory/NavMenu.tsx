import Image from "next/image";
import Link from "next/link";

import Apple from "../../../public/svg/Apple.svg";
import Caret from "../../../public/svg/Caret.svg";
import Codepen from "../../../public/svg/Codepen.svg";
import Css from "../../../public/svg/Css.svg";
import Flutter from "../../../public/svg/Flutter.svg";
import Git from "../../../public/svg/Git.svg";
import Javascript from "../../../public/svg/Javascript.svg";
import Mysql from "../../../public/svg/Mysql.svg";
import Nextjs from "../../../public/svg/Nextjs.svg";
import Reactjs from "../../../public/svg/Reactjs.svg";
import Sass from "../../../public/svg/Sass.svg";
import Typescript from "../../../public/svg/Typescript.svg";
import st from "./NavMenu.module.scss";

import { DatasFromJson } from "components/NavCategory/NavCategory";

interface Props {
  datas: DatasFromJson;
  isMenu: string;
}

interface SvgList {
  [key: string]: string;
}

const NavMenu = ({ datas, isMenu }: Props) => {
  const svgList: SvgList = {
    Javascript: Javascript,
    Reactjs: Reactjs,
    Nextjs: Nextjs,
    Typescript: Typescript,
    Css: Css,
    Sass: Sass,
    Codepen: Codepen,
    Flutter: Flutter,
    Apple: Apple,
    Mysql: Mysql,
    Git: Git,
  };

  return (
    <div
      style={
        datas.class === isMenu
          ? {
              maxHeight: `${50 * datas.menu.length}px`,
            }
          : {
              maxHeight: "0",
            }
      }
      className={st.nav_menu}
    >
      {datas.class === isMenu &&
        datas.menu.map((menu) => (
          <Link href={`/posts/${menu.title}`} className={st.open_category_btn}>
            <div>
              <Image
                src={svgList[menu.svg]}
                alt={menu.svg}
                width={25}
                height={25}
              />
              <span>{menu.title}</span>
            </div>
            <Image
              className={st.caret}
              src={Caret}
              alt="Caret"
              width={20}
              height={20}
            />
          </Link>
        ))}
    </div>
  );
};

export default NavMenu;
