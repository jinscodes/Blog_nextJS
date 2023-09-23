"use client";

import { DatasFromJson } from "@/components/NavCategory/NavCategory";
import Image from "next/image";
import { useState } from "react";

import Caret from "../../../public/svg/Caret.svg";
import st from "./NavClass.module.scss";

interface Props {
  datas: DatasFromJson[];
}

const NavClass = ({ datas }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState<string>();

  return (
    <div className={st.nav_class}>
      {datas.map((el) => (
        <>
          <div
            className={`${st.title} ${
              el.class === isOpenMenu && st.active_menu
            }`}
            onClick={() =>
              setIsOpenMenu((prev) =>
                prev === el.class ? undefined : el.class
              )
            }
          >
            <p>{el.class}</p>
            <Image
              className={`${st.caret} ${
                el.class === isOpenMenu && st.active_caret
              }`}
              src={Caret}
              alt="Caret"
              width={20}
              height={20}
            />
          </div>
          {/* <div
            style={
              el.class === isOpenMenu
                ? {
                    maxHeight: `${50 * el.menu.length}px`,
                  }
                : {
                    maxHeight: "0",
                  }
            }
            className={st.menus_animation_open}
          >
            {el.class === isOpenMenu &&
              el.menu.map((menu) => (
                <Link
                  href={`/posts/${menu.title}`}
                  className={st.open_category_btn}
                >
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
          </div> */}
        </>
      ))}
    </div>
  );
};

export default NavClass;
