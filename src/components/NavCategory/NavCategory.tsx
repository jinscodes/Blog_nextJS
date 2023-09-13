import st from "./NavCategory.module.scss";

const NavCategory = () => {
  return (
    <section className={st.nav_category}>
      <p className={st.total}>
        TOTAL <span>1,234</span>
      </p>
    </section>
  );
};

export default NavCategory;
