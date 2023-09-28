import ClassificationText from "@/components/ClassificationText/ClassificationText";
import st from "./AllPost.module.scss";

const AllPost = () => {
  return (
    <div className={st.all_post}>
      <ClassificationText content="분류 전체 보기" />
    </div>
  );
};

export default AllPost;
