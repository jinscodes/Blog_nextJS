import st from "./H2Underline.module.scss";

type Prop = {
  props: any;
};

const H2Underline = ({ props }: Prop) => {
  return (
    <div className={st.h2_container}>
      <h2 className={st.h2} {...props} />
      <div className={st.h2_underline}>
        <div></div>
        <div></div>
        <div className={st.bottom_line}></div>
        <div></div>
      </div>
    </div>
  );
};

export default H2Underline;
