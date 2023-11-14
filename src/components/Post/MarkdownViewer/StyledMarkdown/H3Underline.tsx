import st from "./H3Underline.module.scss";

type Prop = {
  props: any;
};

const H3Underline = ({ props }: Prop) => {
  return (
    <div className={st.h3_container}>
      <h3 {...props}></h3>
    </div>
  );
};

export default H3Underline;
