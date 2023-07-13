"use client";

import Image from "next/image";
import gif from "../../../public/images/developer.gif";
import arrow from "../../../public/svg/arrowDown.svg";
import st from "./Home.module.scss";

const recentPosts = ["Post1", "Post2", "Post3", "Post4", "Post5"];

const Home = () => {
  return (
    <section className={st.section}>
      <div className={st.home_outline_container}>
        <Image className={st.gif} src={gif} alt="gif" />
        <div className={st.scroll_container}>
          <span>Scroll</span>
          <div className={st.arrow_animation}>
            <Image className={st.arrow} src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className={st.postsContainer}>
        <h4>Recent Posts</h4>
        <ul className={st.recentPostUl}>
          {recentPosts.map((post, idx) => (
            <li key={idx} className={st.post}>
              {post}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
