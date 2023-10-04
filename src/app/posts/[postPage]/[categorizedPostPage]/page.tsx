import { getPostData } from "@/service/posts";
import { log } from "console";

type Prop = {
  params: {
    categorizedPostPage: string;
  };
};

const CategorizedPostPage = async ({
  params: { categorizedPostPage },
}: Prop) => {
  const file = await getPostData(categorizedPostPage);
  log(file);

  return <div>slug2 page {categorizedPostPage}</div>;
};

export default CategorizedPostPage;
