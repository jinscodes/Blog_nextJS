import Image from "next/image";
import Link from "next/link";

import house from "../../../public/svg/House.svg";
import manifyGlass from "../../../public/svg/MagnifyGlass.svg";
import person from "../../../public/svg/Person.svg";
import st from "./header.module.scss";

const Header = () => {
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
              <Image src={house} alt="house" />
            </Link>
            <Link href={"/about"}>
              <Image src={person} alt="person" />
            </Link>
            <Image src={manifyGlass} alt="manifyGlass" />
          </div>
        </div>
      </section>
      <section></section>

      {/* <nav>
        <Link className={st.link} href="/">
          Home
        </Link>
        <Link className={st.link} href="/posts">
          Posts
        </Link>
        <Link className={st.link} href="/about">
          About
        </Link>
      </nav> */}
    </header>
  );
};

export default Header;
