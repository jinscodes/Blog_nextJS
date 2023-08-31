import Categories from "@/components/Home/Categories/Categories";
import Gif from "@/components/Home/Gif/Gif";
import st from "./Home.module.scss";

const Home = async () => {
  return (
    <section className={st.section}>
      <Gif />
      <Categories />
      <div style={{ marginTop: "60px" }}></div>
      {/* <RecentPosts />
      <FeaturedPosts /> */}
    </section>
  );
};

export default Home;
