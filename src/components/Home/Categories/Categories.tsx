import st from "./Categories.module.scss";

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
      <p className={st.title}>공부한 카테고리</p>
      <div className={st.container}>
        {categories.map((el, idx) => (
          <div className={st.box}>
            <p>게시글 카테고리</p>
            <div>
              <div>#1</div>
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
