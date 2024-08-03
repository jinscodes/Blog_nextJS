import Image from "next/image";
import Link from "next/link";
import Caret from "../../../public/svg/Caret.svg";

import Developer from "assets/images/developer.png";
import NavBg from "assets/images/nav_bg.png";
import Category from "assets/svg/Category.svg";
import House from "assets/svg/House.svg";
import Person from "assets/svg/Person.svg";
import NavCategory from "components/NavCategory/NavCategory";

import st from "./Nav.module.scss";

const Nav = () => {
  return (
    <header className={st.header}>
      <section className={st.profile}>
        <Image
          className={st.nav_bg}
          src={NavBg}
          alt="NavBg"
          sizes="auto"
          width={0}
          height={0}
        />
        <Image
          src={Developer}
          alt="myself"
          sizes="auto"
          width={0}
          height={0}
          className={st.myself}
        />
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
            <Link href={"/posts"}>
              <Image src={Category} alt="Category" />
            </Link>
          </div>
        </div>
      </section>
      <NavCategory />
      <p className={st.copyright}>🧑🏻‍💻 Jay</p>
      <Image
        className={st.caret}
        src={Caret}
        alt="Caret"
        width={20}
        height={20}
      />
    </header>
  );
};

export default Nav;
