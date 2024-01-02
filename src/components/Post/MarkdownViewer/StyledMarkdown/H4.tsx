import st from "./H4.module.scss";

type Prop = {
  props: any;
};

const H4 = ({ props }: Prop) => {
  return <h4 className={st.h4} {...props} />;
};

export default H4;
