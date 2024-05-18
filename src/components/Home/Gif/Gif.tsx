import Image from "next/image";

import blogTitle from "assets/images/BlogTitle.png";
import downArrow from "assets/svg/Down_arrow.svg";
import heart from "assets/svg/Heart.svg";
import st from "./Gif.module.scss";

const Gif = () => {
  return (
    <div className={st.home_outline_container}>
      <div className={st.bg_img}>
        <div className={st.dark_bg_cover}>
          <div className={st.quote}>
            <Image className={st.heart} src={heart} alt="heart" />
            <Image className={st.blog_title} src={blogTitle} alt="" />
            <p>LOREM IPSUM DOLOR SIT AMET</p>
            <div className={st.arrow_container}>
              <Image src={downArrow} alt="arrow_down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gif;
