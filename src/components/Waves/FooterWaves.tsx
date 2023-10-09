import st from "./FooterWaves.module.scss";

export const FooterWaves = () => {
  return (
    <>
      <div className={st.header}>
        <div>
          <svg
            className={st.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                className={st.gentle_wave}
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="10"
                y="0"
                fill="rgba(0, 0, 0, 0.1)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="80"
                y="5"
                fill="rgba(0, 0, 0, 0.1)"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};
