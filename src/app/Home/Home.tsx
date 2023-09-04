import Categories from "@/components/Home/Categories/Categories";
import Gif from "@/components/Home/Gif/Gif";
import RecentPosts from "@/components/Home/RecentPosts/RecentPosts";
import st from "./Home.module.scss";

const Home = async () => {
  return (
    <section className={st.section}>
      <Gif />
      <Categories />
      <RecentPosts />
      {/* <RecentPosts />
      <FeaturedPosts /> */}
    </section>
  );
};

export default Home;
