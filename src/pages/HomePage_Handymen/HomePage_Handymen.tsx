import React from "react";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import Footer from "../../other/footer/Footer";
import Hero from "../../components/homepage_handyman/Hero/Hero";

const HomePageHandymen: React.FC = () => {
  return (
    <>
      <StatusBar />
      <Hero />
      <Footer />
    </>
  );
};

export default HomePageHandymen;
