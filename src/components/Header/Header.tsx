import Link from "next/link";
import st from "./header.module.scss";
import Posts from "@/app/posts/page";

const Header = () => {
  return (
    <header className={st.header}>
      <Link className={st.link} href="/">
        <h2 className={st.logo}>{"Jay's Blog"}</h2>
      </Link>
      <nav className={st.nav}>
        <Link className={st.link} href="/">
          Home
        </Link>
        <Link className={st.link} href="/posts">
          Posts
        </Link>
        <Link className={st.link} href="/posts">
          Category
        </Link>
        <Link className={st.link} href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
