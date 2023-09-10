import CategoryPill from "@/components/CategoryPill/CategoryPill";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import st from "./OpenSources.module.scss";

const OpenSources = () => {
  return (
    <section className={st.open_sources}>
      <HomeTitle content="Open Sources 📚" />
      <div className={st.container}>
        <div className={st.opensource_card}>
          <img src="" alt="" />
          <div className={st.content_container}>
            <CategoryPill category="git" />
            <div>
              <div className={st.title}>title</div>
              <p className={st.description}>description</p>
            </div>
          </div>
        </div>
        <div className={st.opensource_card}></div>
      </div>
    </section>
  );
};

export default OpenSources;
