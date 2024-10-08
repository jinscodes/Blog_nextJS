import developer from "assets/images/developer.png";
import laon from "assets/images/laon.jpeg";
import puppyWalking from "assets/images/puppy_walking.gif";
import speechBubble from "assets/images/speech_bubble.png";
import TextButton from "components/About/TextButton";
import Image from "next/image";
import { getAllPosts } from "service/aboutPosts";
import { AboutPost } from "types/aboutPost";
import st from "./page.module.scss";

const About = async () => {
  const posts: AboutPost[] = await getAllPosts();

  return (
    <>
      <div className={st.about_page}>
        <div className={st.text_container}>
          <div>
            <p>Frontend Developer & Mentor</p>
            <p>I code beautifully simple things, and I love what I do.</p>
          </div>
          <Image className={st.developer} src={developer} alt="developer" />
        </div>
        <div className={st.walking_dog_container}>
          <Image className={st.dog} src={puppyWalking} alt="puppyWalking" />
          <Image className={st.bubble} src={speechBubble} alt="speechBubble" />
        </div>
      </div>
      <div className={st.link_page}>
        <Image className={st.laon} src={laon} alt="laon" />
        <div className={st.content_container}>
          {posts.map((post: AboutPost) => (
            <TextButton title={post.title} icon={post.icon} path={post.path} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
