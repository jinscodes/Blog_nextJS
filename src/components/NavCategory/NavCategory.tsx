"use client";

import Apple from "../../../public/svg/Apple.svg";
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

import NavClass from "@/components/NavCategory/NavClass";
import NavTotal from "@/components/NavCategory/NavTotal";
import localFont from "next/font/local";
import { useState } from "react";
import st from "./NavCategory.module.scss";

export interface DatasFromJson {
  class: string;
  menu: {
    title: string;
    svg: any;
  }[];
}

export interface SvgList {
  [key: string]: string;
}

export const maple = localFont({
  src: "../../../public/fonts/MaplestoryLight.otf",
});

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

  const datasFromJson: DatasFromJson[] = require("./NavCategory.json");

  return (
    <section className={`${maple.className} ${st.nav_category}`}>
      <NavTotal total={99} />
      <NavClass
        datas={datasFromJson}
        isMenu={isOpenMenu || ""}
        setIsMenu={setIsOpenMenu}
      />
    </section>
  );
};

export default NavCategory;
