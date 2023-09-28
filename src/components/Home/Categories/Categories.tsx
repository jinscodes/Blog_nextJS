import Image, { StaticImageData } from "next/image";

import HomeTitle from "@/components/HomeTitle/HomeTitle";
import st from "./Categories.module.scss";

import ios from "../../../../public/images/Apple.jpeg";
import codepen from "../../../../public/images/CodePen.webp";
import css from "../../../../public/images/Css.png";
import flutter from "../../../../public/images/Flutter.png";
import git from "../../../../public/images/Git.png";
import js from "../../../../public/images/JavaScript.png";
import mysql from "../../../../public/images/MySQL.png";
import next from "../../../../public/images/NextJs.png";
import react from "../../../../public/images/React.png";
import typescript from "../../../../public/images/TypeScript.png";

type CategoriesList = {
  title: string;
  img: StaticImageData;
  color?: string;
};

const Categories = () => {
  const categories: CategoriesList[] = [
    { title: "JavaScript", img: js, color: "255, 102, 0" },
    { title: "HTML&CSS", img: css, color: "0, 170, 255" },
    { title: "Codepen", img: codepen, color: "0, 193, 157" },
    { title: "React", img: react, color: "144, 0, 255" },
    { title: "NextJs", img: next, color: "255, 0, 102" },
    { title: "TypeScript", img: typescript },
    { title: "Git", img: git },
    { title: "MySQL", img: mysql },
    { title: "Flutter", img: flutter },
    { title: "IOS", img: ios },
  ];

  return (
    <section className={st.categories}>
      <HomeTitle content="Categories" />
      <div className={st.container}>
        {categories.map((el, idx) => (
          <div className={st.flip_card}>
            <div key={idx} className={st.flip_card_box}>
              <div className={st.card_front}>
                <div
                  style={{
                    color: `rgba(${el.color}, 0.8)`,
                    backgroundColor: `rgba(${el.color}, 0.3)`,
                  }}
                  className={st.rank}
                >
                  {idx < 5 && <>#{idx + 1}</>}
                </div>
                <Image src={el.img} alt={el.title} />
                <h5>{el.title}</h5>
              </div>
              <div className={st.card_back}>
                <p>{el.title}</p>
                <p>바로가기</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
