import Link from "next/link";
import MenuLinks from "../../constants/MenuLinks";
import globalStyles from "../shared/Shared.module.scss";
function HeaderMenuLinks() {
  return MenuLinks.map((item, index) => {
    return (
      <Link href={item.link} key={index}>
        <a
          className={`${globalStyles.uppercase} ${globalStyles.black} ${globalStyles.fontSize_15} ${globalStyles.fontBold} ${globalStyles.fontBold} ${globalStyles.mr_40}`}
        >
          {item.name}
        </a>
      </Link>
    );
  });
}

export default HeaderMenuLinks;
