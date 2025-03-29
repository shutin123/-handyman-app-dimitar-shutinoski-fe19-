import LinksContainer from "./LinksContainer/LinksContainer";
import LogoName from "./LogoName/LogoName";
import "./Footer.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import Copyright from "./Copyright/Copyright";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <LogoName />
        <LinksContainer />
        <SocialMedia />
        <Copyright />
      </div>
    </>
  );
};
export default Footer;
