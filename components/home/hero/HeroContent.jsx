import globalStyles from "../../shared/Shared.module.scss";
function HeroContent() {
  return (
    <>
      <h5
        className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_10}`}
      >
        SUPER EASY AND FAST
      </h5>
      <h1
        className={`${globalStyles.nero} ${globalStyles.fontSize_55} ${globalStyles.fontSize_lg_40} ${globalStyles.fontSize_sm_30} ${globalStyles.fontBold} ${globalStyles.mb_15} ${globalStyles.lineheight_70} ${globalStyles.lineheight_lg_55} ${globalStyles.lineheight_sm_40} ${globalStyles.uppercase}`}
      >
        Request nearest, available technician to you now
      </h1>
      <p
        className={`${globalStyles.darkgray} ${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.mb_30}`}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </>
  );
}

export default HeroContent;
