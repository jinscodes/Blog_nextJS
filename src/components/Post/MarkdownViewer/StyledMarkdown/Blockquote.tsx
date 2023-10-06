import st from "./Blockquote.module.scss";

type Prop = {
  props: any;
};

const Blockquote = ({ props }: Prop) => {
  return <blockquote {...props} className={st.blockquote}></blockquote>;
};

export default Blockquote;
