import React from "react";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import Footer from "../../other/footer/Footer";
import Hero from "../../components/homepage_handyman/Hero/Hero";
import ValueProposition from "../../components/homepage_handyman/ValueProposition/ValuePropostion";
import Categories from "../../components/homepage_handyman/Categories/Categories";
import "./HomePage_Handymen.css";
import Frame1984077828 from "../../components/homepage_handyman/Scrols/Frame-1984077828/Frame-1984077828";
import FeaturesSection from "../../components/homepage_handyman/FeaturesSection/FeaturesSection";
import Frame1984077823 from "../../components/homepage_handyman/Scrols/Frame-1984077823/Frame-1984077823";

const HomePageHandymen: React.FC = () => {
  return (
    <div className="homepage-handymen">
      <div className="top-section">
        <StatusBar />
        <Hero />
      </div>
      <ValueProposition />
      <Categories />
      <Frame1984077828 />
      <FeaturesSection />
      <Frame1984077823 />
      <Footer />
    </div>
  );
};

export default HomePageHandymen;
