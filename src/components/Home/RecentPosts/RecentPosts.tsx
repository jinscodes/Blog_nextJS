import st from "./RecentPosts.module.scss";

const RecentPosts = () => {
  const recentPosts = ["Post1", "Post2", "Post3", "Post4", "Post5"];

  return (
    <div className={st.postsContainer}>
      <h4>Recent Posts</h4>
      <ul className={st.recentPostUl}>
        {recentPosts.map((post, idx) => (
          <li key={idx} className={st.post}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
