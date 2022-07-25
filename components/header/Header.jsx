import { useEffect, useState } from "react";
import globalStyles from "../shared/Shared.module.scss";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Header.module.scss";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderProfile from "./HeaderProfile";
import LoginButton from "./LoginButton";
import MobileMenu from "./MobileMenu";
function Header() {
  const [profile, setProfile] = useState();
  const [btnLock, setBtnLock] = useState(false);
  useEffect(() => {
    setBtnLock(true);
    setProfile(JSON.parse(localStorage.getItem("aireuser")));
    setBtnLock(false);
  }, [btnLock]);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", closeSidemenu);
    return function cleanup() {
      window.removeEventListener("click", closeSidemenu);
    };
  }, [isActive]);

  let closeSidemenu = () => {
    setIsActive(false);
  };
  return (
    <div
      className={`${globalStyles.absolute} ${globalStyles.fullWidth} ${styles.header} `}
    >
      <div className={`${globalStyles.container}`}>
        <div
          className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween}`}
        >
          <div
            className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
          >
            <HeaderLogo />
            <div className="menuheader">
              <HeaderMenu />
            </div>
          </div>
          <div
            className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
          >
            <div className={`${globalStyles.mr_md_15}`}>
              {/* {profile ? <HeaderProfile profile={profile} /> : <LoginButton />} */}
              <HeaderProfile profile={profile} />
            </div>
            <div className="menubarheader">
              <HamburgerMenu setIsActive={setIsActive} isActive={isActive} />
            </div>
          </div>
        </div>
      </div>
      <MobileMenu setIsActive={setIsActive} active={isActive} />
    </div>
  );
}

export default Header;
