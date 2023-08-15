import { Post } from "@/service/posts";
import Link from "next/link";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import st from "./AdjacentPostCard.module.scss";

interface Props {
  post: Post;
  type: "prev" | "next";
}

const AdjacentPostCard = ({ post, type }: Props) => {
  const { path, title, description } = post;

  return (
    <Link href={`/posts/${path}`} className={st.link}>
      <div className={st.background}></div>
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className={st.info_frame}>
        {/* {type === "prev" && <FaArrowLeft style={{ marginLeft: "50px" }} />} */}
        {type === "prev" && (
          <FaArrowLeft style={{ top: "35px", left: "50px" }} />
        )}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {/* {type === "next" && <FaArrowRight style={{ marginRight: "50px" }} />} */}
        {type === "next" && (
          <FaArrowRight style={{ top: "35px", right: "50px" }} />
        )}
      </div>
    </Link>
  );
};

export default AdjacentPostCard;
