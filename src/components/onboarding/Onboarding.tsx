import React, { useState, useEffect } from "react";
import "./Onboarding.css";
import "../../styles/colors.css";
import "../../styles/typography.css";
import { onboardingData } from "../onboarding/data/onboardingData";
import Image from "../onboarding/image/Image";
import Text from "../onboarding/text/Text";
import PageIndicator from "../onboarding/pageIndicator/PageIndicator";
import StatusBar from "../../layouts/StatusBar/StatusBar";
import Footer from "./footer/Footer";

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % onboardingData.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="onboarding">
      <StatusBar />
      <Image src={onboardingData[currentIndex].image} />
      <Text
        heading={onboardingData[currentIndex].text.heading}
        paragraph={onboardingData[currentIndex].text.paragraph}
      />
      <PageIndicator
        total={onboardingData.length}
        activeIndex={currentIndex}
        onClick={setCurrentIndex}
      />
      <Footer />
    </div>
  );
};

export default Onboarding;
