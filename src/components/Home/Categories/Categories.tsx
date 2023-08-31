import st from "./Categories.module.scss";

import { maple } from "../../../app/layout";

const Categories = () => {
  const categories = [
    "JavaScript",
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
            <p>게시글 카테고리</p>
            <div>
              <div>#{idx}</div>
              <img />
              <h5>title</h5>
              <h6>articles</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
