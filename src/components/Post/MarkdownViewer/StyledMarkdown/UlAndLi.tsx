import st from "./UlAndLi.module.scss";

type Prop = {
  props: any;
};

const UlAndLi = ({ props }: Prop) => {
  return <ul {...props} className={st.ul}></ul>;
};

export default UlAndLi;
