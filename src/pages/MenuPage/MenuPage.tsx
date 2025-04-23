import React from "react";
import "./MenuPage.css";
import MenuPageHeader from "../../components/MenuPage/MenuPageHeader/MenuPageHeader";
import MenuPageBody from "../../components/MenuPage/MenuPageBody/MenuPageBody";
import MenuPageButtons from "../../components/MenuPage/MenuPageButtons/MenuPageButtons";

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page">
      <MenuPageHeader />
      <MenuPageBody />
      <MenuPageButtons />
    </div>
  );
};

export default MenuPage;
