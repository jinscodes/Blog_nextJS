import Link from "next/link";
import st from "./header.module.scss";

const Header = () => {
  return (
    <header className={st.header}>
      <nav className={st.nav}>
        <Link className={st.link} href="/">
          Home
        </Link>
        <Link className={st.link} href="/Posts">
          Posts
        </Link>
        <Link className={st.link} href="/About">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
