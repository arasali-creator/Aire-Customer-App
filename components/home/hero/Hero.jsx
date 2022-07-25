import globalStyles from "../../shared/Shared.module.scss";
import BannerImage from "./BannerImage";
import CalenderButton from "./CalenderButton";
import Hand from "./Hand";
import HeroBookNow from "./HeroBookNow";
import HeroContent from "./HeroContent";
function Hero() {
  return (
    <section
      className={`${globalStyles.fullHeight} ${globalStyles.culturedbackground} ${globalStyles.pt_50} ${globalStyles.pb_50}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
      >
        <Hand />
        <div
          className={`${globalStyles.row} ${globalStyles.flex}  ${globalStyles.flexColumn_md} ${globalStyles.flexAlignCenter} `}
        >
          <div
            className={`${globalStyles.column_50} ${globalStyles.mb_md_50}   ${globalStyles.column_md_100} ${globalStyles.fullWidth}`}
          >
            <HeroContent />
            <div
              className={` ${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignCenter} ${globalStyles.flexAlignEnd_sm}`}
            >
              <HeroBookNow />
            </div>
          </div>
          <div
            className={`${globalStyles.column_50}  ${globalStyles.column_md_100}  ${globalStyles.fullWidth}`}
          >
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
