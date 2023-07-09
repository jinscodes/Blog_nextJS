import st from "./Home.module.scss";
import Image from "next/image";
import gif from "../../../public/images/developer.gif";
import arrow from "../../../public/svg/arrowDown.svg";

const Home = () => {
  return (
    <section className={st.section}>
      <div className={st.home_container}>
        <Image className={st.gif} src={gif} alt="gif" />
        <div className={st.scroll_container}>
          <span>Scroll</span>
          <div className={st.arrow_animation}>
            <Image className={st.arrow} src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
