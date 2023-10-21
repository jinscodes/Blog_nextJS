import Image from "next/image";

import closeBracket from "assets/svg/Close_bracket.svg";
import downArrow from "assets/svg/Down_arrow.svg";
import heart from "assets/svg/Heart.svg";
import openBracket from "assets/svg/Open_bracket.svg";
import st from "./Gif.module.scss";

const Gif = () => {
  return (
    <div className={st.home_outline_container}>
      <div className={st.bg_img}>
        <div className={st.dark_bg_cover}>
          <div className={st.quote}>
            <Image className={st.heart} src={heart} alt="heart" />
            <h1>
              FALL INTO THE
              <Image src={openBracket} alt="open_bracket" />
              HELLO WORLD
              <Image src={closeBracket} alt="Close_bracket" />
            </h1>
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
