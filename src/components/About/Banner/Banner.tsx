import { HiPaperAirplane } from "react-icons/hi";

import st from "./Banner.module.scss";

type Prop = {
  state: boolean;
};

const Banner = ({ state }: Prop) => {
  return (
    <div className={state ? st.submit_container : st.container_hidden}>
      <HiPaperAirplane className={st.icon} />
    </div>
  );
};

export default Banner;
