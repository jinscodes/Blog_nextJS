import FeaturedPosts from "@/components/About/FeaturedPosts/FeaturedPosts";
import Gif from "@/components/Home/Gif/Gif";
import RecentPosts from "@/components/Home/RecentPosts/RecentPosts";
import st from "./Home.module.scss";

const Home = async () => {
  return (
    <section className={st.section}>
      <Gif />
      <RecentPosts />
      <FeaturedPosts />
    </section>
  );
};

export default Home;
