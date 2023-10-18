import { getAllPosts } from "service/posts";

const Posts = async () => {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <div style={{ paddingTop: "30px", paddingBottom: "60px" }}>
      {/* <h2>Posts</h2> */}
      {/* <FilterablePosts posts={posts} categories={categories} /> */}
      posts page
    </div>
  );
};

export default Posts;
