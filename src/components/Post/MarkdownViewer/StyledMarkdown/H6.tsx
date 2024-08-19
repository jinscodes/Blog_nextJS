import st from "./H6.module.scss";

type Prop = {
  props: any;
};

const H6 = ({ props }: Prop) => {
  return <h6 className={st.h6} {...props} />;
};

export default H6;
