import React from "react";
import FooterImage from "../../layouts/FooterImage/FooterImage";
import NavigationMenu from "../../layouts/NavigationMenu/HandyMen/component/NavigationMenu";
import Onboarding from "../../components/onboarding/Onboarding";

const BottomNavigationHandymen: React.FC = () => {
  return (
    <>
      <div className="BottomNavigationBar">
        <Onboarding />
        <NavigationMenu />
        <FooterImage />
      </div>
    </>
  );
};
export default BottomNavigationHandymen;
