import st from "./NavTotal.module.scss";

interface Prop {
  total: number;
}

const NavTotal = ({ total }: Prop) => {
  return (
    <p className={st.total}>
      TOTAL <span>{total.toLocaleString()}</span>
    </p>
  );
};

export default NavTotal;
