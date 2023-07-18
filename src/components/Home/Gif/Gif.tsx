import Image from "next/image";
import gif from "../../../../public/images/developer.gif";
import arrow from "../../../../public/svg/arrowDown.svg";
import st from "./Gif.module.scss";

const Gif = () => {
  return (
    <div className={st.home_outline_container}>
      <Image
        className={st.gif}
        src={gif}
        alt="gif"
        priority
        width="0"
        height="0"
      />
      <h2 className={st.logo}>
        {"Hi,"}
        <br></br>
        {"Jay's Blog"}
      </h2>
      <div className={st.scroll_container}>
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
      </div>
    </div>
  );
};

export default Gif;
