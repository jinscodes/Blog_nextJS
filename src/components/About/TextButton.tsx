import dots from "assets/svg/Dots.svg";
import Image from "next/image";
import Link from "next/link";
import st from "./TextButton.module.scss";

interface Props {
  title: string;
  icon: string;
  path: string;
}

const TextButton = ({ title, icon, path }: Props) => {
  return (
    <div className={st.text_button_container}>
      <Image className={st.dots} src={dots} alt="dots" />
      <Link href={`/about/${path}`} className={st.content_container}>
        <div className={st.icon}>{icon}</div>
        <span className={st.title}>{title}</span>
      </Link>
    </div>
  );
};

export default TextButton;
