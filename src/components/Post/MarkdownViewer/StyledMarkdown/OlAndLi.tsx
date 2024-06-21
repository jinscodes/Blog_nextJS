import st from "./OlAndLi.module.scss";

type Prop = {
  props: any;
};

const OlAndLi = ({ props }: Prop) => {
  return <ol children={props.children} className={st.ol}></ol>;
};

export default OlAndLi;
