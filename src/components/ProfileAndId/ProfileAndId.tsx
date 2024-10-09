import st from "./ProfileAndId.module.scss";

interface Props {
  date: Date | string;
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
        <span className={`${size === "sm" && st.sm_font}`}>Jay_H</span>
      </div>
      <span className={`${size === "sm" ? st.sm_date : st.date}`}>
        {date.toString()}
      </span>
    </div>
  );
};

export default ProfileAndId;
