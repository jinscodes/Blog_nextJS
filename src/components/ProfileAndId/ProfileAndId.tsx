import st from "./ProfileAndId.module.scss";

interface Props {
  date: Date;
  size?: "sm";
}

const ProfileAndId = ({ date, size }: Props) => {
  const convertSize = {
    sm: "30px",
  };

  return (
    <div className={st.info}>
      <div>
        <div
          className={st.profile}
          style={
            size && { width: convertSize[size], height: convertSize[size] }
          }
        ></div>
        <span>Jay_H</span>
      </div>
      <span className={st.date}>{date.toString()}</span>
    </div>
  );
};

export default ProfileAndId;
