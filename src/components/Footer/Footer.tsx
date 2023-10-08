import st from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={st.footer}>
      <div className={st.footer_style_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={st.svg}
        >
          <path
            fill="#6cb4e71a"
            fill-opacity="1"
            d="M0,160L60,176C120,192,240,224,360,245.3C480,267,600,277,720,256C840,235,960,181,1080,154.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        {/* <FooterWaves /> */}
      </div>
    </div>
  );
};

export default Footer;
