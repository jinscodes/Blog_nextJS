import Image from "next/image";
import profile from "../../../public/images/profile.png";
import Link from "next/link";

const MyProfile = () => {
  return (
    <section>
      <Image src={profile} alt="profileImg" width={250} height={250} />
      <h2>{"Jay Han"}</h2>
      <h3>FE-Developer</h3>
      <p>Make the value, Build the dream</p>
      <Link href="/about">More Detail About Me!</Link>
    </section>
  );
};

export default MyProfile;
