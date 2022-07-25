import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/header/Logo.png";
import Close from "../../assets/images/header/close.png";
import HeaderMenuLinks from "../../constants/MenuLinks";
import LoginButton from "./LoginButton";
function MobileMenu({ setIsActive, active }) {
  return (
    <div className={active ? "mobilemenu active" : "mobilemenu"}>
      <div
        className="mobilemenuinner"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
            setIsActive(!active);
          }}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              textAlign: "right",
              padding: "15px 15px 0 0",
              display: "block",
              marginLeft: "auto",
              cursor: "pointer",
            }}
          >
            <Image layout="responsive" src={Close} alt="aire logo" />
            
          </div>
          <div style={{ width: "116px", height: "78px",marginLeft:"17px",marginTop:"-22px" }}>
            <Image layout="responsive" src={Logo} alt="aire logo" />
          </div>
        </div>    

        <div
          className="mobilemenucontent"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            {HeaderMenuLinks.map((item) => (
              <Link key={item.name} href={`/${item.link}`} passHref>
                <a
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#000",
                    marginBottom: "25px",
                    
                  }}
                  title={item.name}
                  onClick={(event) => {
            event.stopPropagation();
            setIsActive(!active);
          }}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
