import { FilterablePosts } from "@/components/FilterablePosts/FilterablePosts";
import { getAllPosts } from "@/service/posts";

const Posts = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <>
      <h2>Posts</h2>
      <FilterablePosts posts={posts} categories={categories} />
    </>
  );
};

export default Posts;
