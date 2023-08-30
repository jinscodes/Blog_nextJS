import Gif from "@/components/Home/Gif/Gif";
import st from "./Home.module.scss";

const Home = async () => {
  return (
    <section className={st.section}>
      <Gif />
      {/* <RecentPosts />
      <FeaturedPosts /> */}
    </section>
  );
};

export default Home;
