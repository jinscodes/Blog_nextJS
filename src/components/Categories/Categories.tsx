import st from "./Categories.module.scss";
interface Props {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
}

export const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <div className={st.div}>
      <h2>Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={category === selected ? st.li : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
