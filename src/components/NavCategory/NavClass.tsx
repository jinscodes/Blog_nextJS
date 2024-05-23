"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

import { DatasFromJson } from "components/NavCategory/NavCategory";
import NavMenu from "components/NavCategory/NavMenu";

import Caret from "../../../public/svg/Caret.svg";
import st from "./NavClass.module.scss";

interface Props {
  datas: DatasFromJson[];
  isMenu: string;
  setIsMenu: Dispatch<SetStateAction<string | undefined>>;
}

const NavClass = ({ datas, isMenu, setIsMenu }: Props) => {
  const [coordinates, setCoordinates] = useState(0);
  const setSubmenu = (
    classEle: string,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setCoordinates(rect.left);
    setIsMenu((prev) => (prev === classEle ? undefined : classEle));
  };

  return (
    <div className={st.nav_class}>
      {datas.map((el, idx) => (
        <div key={idx} className={st.visible_menu}>
          <div
            className={`${st.title} ${el.class === isMenu && st.active_menu}`}
            onClick={(event) => setSubmenu(el.class, event)}
          >
            <p>{el.class}</p>
            <Image
              className={`${st.caret} ${
                el.class === isMenu && st.active_caret
              }`}
              src={Caret}
              alt="Caret"
              width={20}
              height={20}
            />
          </div>

          <NavMenu
            datas={el}
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            coordinates={coordinates}
          />
        </div>
      ))}
    </div>
  );
};

export default NavClass;
