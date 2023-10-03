type Prop = {
  params: {
    categorizedPostPage: string;
  };
};

const CategorizedPostPage = ({ params: { categorizedPostPage } }: Prop) => {
  return <div>slug2 page {categorizedPostPage}</div>;
};

export default CategorizedPostPage;
