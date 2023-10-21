"use client";

import { useState } from "react";

import NavClass from "components/NavCategory/NavClass";
import NavTotal from "components/NavCategory/NavTotal";
import localFont from "next/font/local";

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
