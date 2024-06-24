import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import HomeTitle from "components/HomeTitle/HomeTitle";

import ios from "assets/images/icons/Apple.jpeg";
import codepen from "assets/images/icons/CodePen.webp";
import flutter from "assets/images/icons/Flutter.png";
import git from "assets/images/icons/Git.png";
import js from "assets/images/icons/JavaScript.png";
import mysql from "assets/images/icons/MySQL.png";
import next from "assets/images/icons/NextJs.png";
import react from "assets/images/icons/React.png";
import typescript from "assets/images/icons/TypeScript.png";
import css from "assets/images/icons/WebCS.png";
import st from "./Categories.module.scss";

type CategoriesList = {
  path?: string;
  title: string;
  img: StaticImageData;
  color?: string;
};

const Categories = () => {
  const categories: CategoriesList[] = [
    { title: "JavaScript", img: js, color: "255, 102, 0" },
    { path: "WebCS", title: "Web CS", img: css, color: "0, 170, 255" },
    { title: "OpenSources", img: codepen, color: "0, 193, 157" },
    { path: "ReactJs", title: "React", img: react, color: "144, 0, 255" },
    { title: "NextJs", img: next, color: "255, 0, 102" },
    { title: "TypeScript", img: typescript },
    { path: "GIT", title: "Git", img: git },
    { title: "MySQL", img: mysql },
    { title: "Flutter", img: flutter },
    { title: "IOS", img: ios },
  ];

  return (
    <section className={st.categories}>
      <HomeTitle content="Categories" />
      <div className={st.container}>
        {categories.map((el, idx) => (
          <Link
            href={el.path ? `/posts/${el.path}` : `/posts/${el.title}`}
            className={st.flip_card}
            key={idx}
          >
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
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
