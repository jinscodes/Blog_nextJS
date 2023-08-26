"use client";

import Image from "next/image";

import { Introduction } from "@/components/About/Introduction/Introduction";
import st from "./MyProfile.module.scss";

import EmailForm from "@/components/About/EmailForm/EmailForm";
import { useState } from "react";
import profile from "../../../../public/images/me.png";
import github from "../../../../public/svg/github.svg";
import gmail from "../../../../public/svg/gmail.svg";
import linkedin from "../../../../public/svg/linkedin.svg";
import AboutButton from "../AboutButton/AboutButton";

const MyProfile = () => {
  const [onEmailForm, setOnEmailForm] = useState<boolean>(false);

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
      <Introduction />
      <div className={st.link_container}>
        <AboutButton
          props={{
            title: "GITHUB",
            src: github,
            link: true,
            path: "https://github.com/jinscodes",
          }}
        />
        <AboutButton
          props={{
            copyText: "jayhan0215@gmail.com",
            title: "EMAIL",
            src: gmail,
            link: false,
            setState: setOnEmailForm,
          }}
        />
        <AboutButton
          props={{
            title: "LinkedIn",
            link: true,
            src: linkedin,
            bgColor: "rgb(47, 66, 139)",
            path: "https://www.linkedin.com/in/jin-sung-han-49974920a/",
          }}
        />
      </div>
      {onEmailForm && <EmailForm />}
    </section>
  );
};

export default MyProfile;
