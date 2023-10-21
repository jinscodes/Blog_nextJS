import { maple } from "app/layout";
import st from "./HomeTitle.module.scss";

type Prop = {
  content: string;
};

const HomeTitle = ({ content }: Prop) => {
  return <p className={`${st.title} ${maple.className}`}>{content}</p>;
};

export default HomeTitle;
