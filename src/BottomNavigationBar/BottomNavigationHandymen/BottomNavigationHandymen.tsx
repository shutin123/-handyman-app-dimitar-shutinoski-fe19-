import React from "react";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import NavigationMenu from "../../layouts/NavigationMenu/HandyMen/component/NavigationMenu";

const BottomNavigationHandymen: React.FC = () => {
  return (
    <>
      <div className="BottomNavigationBar">
        <NavigationMenu />
        <FooterImage />
      </div>
    </>
  );
};
export default BottomNavigationHandymen;
