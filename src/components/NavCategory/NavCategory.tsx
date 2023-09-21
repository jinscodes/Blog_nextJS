"use client";

import Image from "next/image";
import { useState } from "react";

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

import st from "./NavCategory.module.scss";

interface DatasFromJson {
  class: string;
  menu: {
    title: string;
    svg: any;
  }[];
}

interface SvgList {
  [key: string]: string;
}

const NavCategory = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<string>();
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
  console.log(svgList["Javascript"]);

  const datasFromJson: DatasFromJson[] = require("./NavCategory.json");

  return (
    <section className={st.nav_category}>
      <p className={st.total}>
        TOTAL <span>1,234</span>
      </p>
      <div className={st.btn_container}>
        {datasFromJson.map((el) => (
          <>
            {/* title */}
            <div
              className={st.title}
              onClick={() =>
                setIsOpenMenu((prev) =>
                  prev === el.class ? undefined : el.class
                )
              }
            >
              <p>{el.class}</p>
              <Image
                className={`${st.caret} ${
                  el.class === isOpenMenu && st.changed_caret
                }`}
                src={Caret}
                alt="Caret"
                width={20}
                height={20}
              />
            </div>
            {/* sub-title */}
            <div
              style={
                el.class === isOpenMenu
                  ? { maxHeight: `${50 * el.menu.length}px` }
                  : { maxHeight: "0" }
              }
              className={`${el.class === isOpenMenu && st.menus_animation}`}
            >
              {el.class === isOpenMenu &&
                el.menu.map((menu) => (
                  <button className={st.open_category_btn}>
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
                  </button>
                ))}
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default NavCategory;
