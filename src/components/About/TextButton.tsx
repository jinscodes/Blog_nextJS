import st from "./TextButton.module.scss";

interface Props {
  title: string;
  icon: string;
}

const TextButton = ({ title, icon }: Props) => {
  return (
    <div className={st.text_button_container}>
      <div className={st.icon}>{icon}</div>
      <span className={st.title}>{title}</span>
    </div>
  );
};

export default TextButton;
