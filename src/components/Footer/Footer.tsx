import Image from "next/image";

import { getFeaturedPosts, getRecentPosts } from "service/posts";

import { FooterWaves } from "components/Waves/FooterWaves";

import st from "./Footer.module.scss";

const Footer = async () => {
  const recentPosts = await getRecentPosts();
  const popularPosts = await getFeaturedPosts();

  return (
    <div className={st.footer}>
      <FooterWaves />
      <div className={st.footer_content_container}>
        <svg
          className={st.waves}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,1)" />
          </g>
        </svg>
        <div className={st.content_container}>
          <div className={st.recent_posts}>
            {recentPosts.map((post) => (
              <div>
                <Image
                  src={`/images/posts/${post.path}.png`}
                  alt={post.title}
                  className={st.img}
                  width={0}
                  height={0}
                  sizes="auto"
                />
                <div>
                  <p>{post.title}</p>
                  <p>{String(post.date)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={st.popular_posts}>
            {popularPosts.map((post) => (
              <div>
                <Image
                  src={`/images/posts/${post.path}.png`}
                  alt={post.title}
                  className={st.img}
                  width={0}
                  height={0}
                  sizes="auto"
                />
                <div>
                  <p>{post.title}</p>
                  <p>{String(post.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className={st.reference}>© Copyright 2023 Jay Han</p>
    </div>
  );
};

export default Footer;
