"use client";

import st from "./Categories.module.scss";
import { useState } from "react";

interface HandleClickProps {
  e: React.MouseEvent<HTMLButtonElement>;
  type: string;
}

const categories = ["FE", "Publishing", "JavaScript", "TypeScript"];

const Categories = () => {
  const [isClicked, setIsClicked] = useState<string>("1");
  const handleClick = ({ e, type }: HandleClickProps) => {
    setIsClicked(type);
  };

  return (
    <section className={st.section}>
      <div className={st.container}>
        {categories.map((el, idx) => (
          <button
            // className={isClicked === el && `${st.clickedBtnColor}`}
            key={idx}
            onClick={(e) => handleClick({ e: e, type: el })}
          >
            {el}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
