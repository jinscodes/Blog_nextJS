import st from "./CategoryPill.module.scss";

interface Prop {
  category: string;
}

const CategoryPill = ({ category }: Prop) => {
  return <div className={st.category}>{category}</div>;
};

export default CategoryPill;
