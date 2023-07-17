"use client";

import Gif from "@/components/Home/Gif/Gif";
import RecentPosts from "@/components/Home/RecentPosts/RecentPosts";
import st from "./Home.module.scss";

const Home = async () => {
  return (
    <section className={st.section}>
      <Gif />
      <RecentPosts />
    </section>
  );
};

export default Home;
