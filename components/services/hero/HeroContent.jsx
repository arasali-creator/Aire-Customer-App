import globalStyles from "../../shared/Shared.module.scss";
function HeroContent() {
  return (
    <>
      <h5
        className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_10}`}
      >
        SERVICES
      </h5>
      <h1
        className={`${globalStyles.nero} ${globalStyles.fontSize_55} ${globalStyles.fontSize_lg_40} ${globalStyles.fontSize_sm_30} ${globalStyles.fontBold} ${globalStyles.mb_15} ${globalStyles.lineheight_70} ${globalStyles.lineheight_lg_55} ${globalStyles.lineheight_sm_40} ${globalStyles.uppercase}`}
      >
        Select a service
      </h1>
      <p
        className={`${globalStyles.darkgray} ${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.mb_35}`}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum.
      </p>
    </>
  );
}

export default HeroContent;
