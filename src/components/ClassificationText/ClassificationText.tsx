import st from "./ClassificationText.module.scss";

interface Prop {
  content: string;
}

const ClassificationText = ({ content }: Prop) => {
  return (
    <div className={st.styled_underline}>
      <p>{content}</p>
      <div className={st.underline_container}>
        <div className={st.left_bar}></div>
        <div className={st.underline}></div>
        <div className={st.right_bar}></div>
      </div>
    </div>
  );
};

export default ClassificationText;
