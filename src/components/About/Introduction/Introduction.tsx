import st from "./Introduction.module.scss";

export const Introduction = () => {
  return (
    <div className={st.intro_container}>
      <h2>Who Am I?</h2>
      <p>
        개발을 사랑하는 개발자 <br />
        사람과 디자인을 담는 웹앱을 만들고 있음
      </p>
    </div>
  );
};
