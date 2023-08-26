import Image from "next/image";

import heart from "../../../../public/svg/Heart.svg";
import st from "./Gif.module.scss";

const Gif = () => {
  return (
    <div className={st.home_outline_container}>
      <div className={st.bg_img}>
        <div className={st.dark_bg_cover}>
          <div className={st.quote}>
            <Image src={heart} alt="heart" />
            <h1> CLEAN & SIMPLE</h1>
            <p>LOREM IPSUM DOLOR SIT AMET</p>
          </div>
        </div>
      </div>
      {/* <h2 className={st.logo}>
        {"Hi,"}
        <br></br>
        {"Jay's Blog"}
      </h2> */}
      {/* <div className={st.scroll_container}>
        <span>Scroll</span>
        <div className={st.arrow_animation}>
          <Image
            className={st.arrow}
            src={arrow}
            alt="arrow"
            width={0}
            height={0}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Gif;
