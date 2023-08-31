import js from "../../../../public/images/JavaScript.png";
import { maple } from "../../../app/layout";
import st from "./Categories.module.scss";

const Categories = () => {
  const categories = [
    { title: "JavaScript", img: js },
    "HTML&CSS",
    "Scss",
    "React",
    "NextJs",
    "TypeScript",
    "Git",
    "MySQL",
    "Flutter",
    "IOS",
  ];

  return (
    <div className={st.categories}>
      <p className={`${st.title} ${maple.className}`}>Categories</p>
      <div className={st.container}>
        {categories.map((el, idx) => (
          <div key={idx} className={st.box}>
            <div className={st.rank}>#{idx}</div>
            <img />
            <h5>title</h5>
            <h6>articles</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
