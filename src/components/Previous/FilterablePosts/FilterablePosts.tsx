// "use client";

// import { Categories } from "@/components/Previous/Categories(prev)/Categories";
// import { Post } from "@/service/posts";
// import { useState } from "react";

// import PostCard from "@/components/Previous/PostCard/PostCard";
// import st from "./FilterablePosts.module.scss";

// interface Props {
//   posts: Post[];
//   categories: string[];
// }

// const ALL_POSTS = "All Posts";

// export const FilterablePosts = ({ posts, categories }: Props) => {
//   const [selected, setSelected] = useState(ALL_POSTS);
//   const filtered =
//     selected === ALL_POSTS
//       ? posts
//       : posts.filter((post) => post.category === selected);

//   return (
//     <section className={st.section}>
//       {/* <PostsGrid posts={filtered} /> */}
//       <ul className={st.ul}>
//         {filtered.map((post) => (
//           <li key={post.path} className={st.li}>
//             <PostCard post={post} />
//           </li>
//         ))}
//       </ul>
//       <Categories
//         categories={[ALL_POSTS, ...categories]}
//         selected={selected}
//         onClick={setSelected}
//       />
//     </section>
//   );
// };
