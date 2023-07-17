import Image from "next/image";

import profile from "../../../../public/images/me.png";
import github from "../../../../public/svg/github.svg";
import gmail from "../../../../public/svg/gmail.svg";
import AboutButton from "../AboutButton/AboutButton";
import st from "./MyProfile.module.scss";

const MyProfile = () => {
  return (
    <section className={st.section}>
      <Image
        className={st.profileImg}
        src={profile}
        alt="profileImg"
        width="0"
        height="0"
        style={{ objectFit: "cover" }}
      />
      <h2 className={st.name}>{"Jay Han"}</h2>
      <h3 className={st.position}>FE-Developer</h3>
      <p>{'"Make the value, Build the dream"'}</p>
      <div className={st.link_container}>
        <AboutButton props={{ title: "GITHUB", src: github, link: true }} />
        <AboutButton
          props={{
            copyText: "jayhan0215@gmail.com",
            title: "EMAIL",
            src: gmail,
            link: false,
          }}
        />
      </div>
    </section>
  );
};

export default MyProfile;
