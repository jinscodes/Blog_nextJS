import st from "./H5.module.scss";

type Prop = {
  props: any;
};

const H5 = ({ props }: Prop) => {
  return <h5 className={st.h5} {...props} />;
};

export default H5;
