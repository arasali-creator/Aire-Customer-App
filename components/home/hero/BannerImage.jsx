import Image from "next/image";
import Banner from "../../../assets/images/home/BannerImage.png";
import styles from "./Hero.module.scss";

function BannerImage() {
  return (
    <div className={`${styles.BannerImagecontainer}`}>
      <Image alt="Banner" src={Banner} />
    </div>
  );
}

export default BannerImage;
