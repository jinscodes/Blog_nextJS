import st from "./ProfileAndId.module.scss";

interface Prop {
  date: Date;
}

const ProfileAndId = ({ date }: Prop) => {
  return (
    <div className={st.info}>
      <div>
        <div className={st.profile}></div>
        <span>Jay_H</span>
      </div>
      <span className={st.date}>{date.toString()}</span>
    </div>
  );
};

export default ProfileAndId;
