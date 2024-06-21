import st from "./UlAndLi.module.scss";

type Prop = {
  props: any;
};

const UlAndLi = ({ props }: Prop) => {
  return <ul children={props.children} className={st.ul}></ul>;
};

export default UlAndLi;
