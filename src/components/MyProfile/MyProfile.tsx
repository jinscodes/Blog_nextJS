import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import st from "./MyProfile.module.scss";
import profile from "../../../public/images/profile.png";
import github from "../../../public/svg/github.svg";
import AboutButton from "../AboutButton/AboutButton";
import gmail from "../../../public/svg/gmail.svg";

const MyProfile = () => {
  return (
    <section className={st.section}>
      <Image className={st.profileImg} src={profile} alt="profileImg" />
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
