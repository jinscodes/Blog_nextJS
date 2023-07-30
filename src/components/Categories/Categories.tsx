import st from "./Categories.module.scss";
interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export const Categories = ({ categories, selected, onClick }: Props) => {
  console.log(selected);

  return (
    <section className={st.section}>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} onClick={() => onClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};
