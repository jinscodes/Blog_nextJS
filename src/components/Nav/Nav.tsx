import Image from "next/image";
import Link from "next/link";

import NavCategory from "@/components/NavCategory/NavCategory";
import Category from "../../../public/svg/Category.svg";
import House from "../../../public/svg/House.svg";
import Person from "../../../public/svg/Person.svg";
import st from "./Nav.module.scss";

const Nav = () => {
  return (
    <header className={st.header}>
      <section className={st.profile}>
        <div className={st.img}></div>
        <div className={st.myself}></div>
        <div className={st.name_container}>
          <span>Jay Han🧑🏻‍💻</span>
          <span>제이_</span>
        </div>
        <div className={st.link_container}>
          <div className={st.svg_container}>
            <Link href={"/"}>
              <Image src={House} alt="house" />
            </Link>
            <Link href={"/about"}>
              <Image src={Person} alt="person" />
            </Link>
            <Link href={"/post"}>
              <Image src={Category} alt="Category" />
            </Link>
          </div>
        </div>
      </section>
      <NavCategory />
    </header>
  );
};

export default Nav;
