// onboardingData.ts
import { TextContent } from "./OnboardingTypes";
import "../../styles/typography.css";

export const onboardingData: { text: TextContent; image: string }[] = [
  {
    text: {
      heading: "Become a member in minutes",
      paragraph:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    image: "/images/onboarding/onboarding-image1.png",
  },
  {
    text: {
      heading: "Stay Connected",
      paragraph:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    image: "/images/onboarding/onboarding-image2.png",
  },
  {
    text: {
      heading: "Track Your Progress",
      paragraph:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    image: "/images/onboarding/onboarding-image3.png",
  },
  {
    text: {
      heading: "Get Started Today",
      paragraph:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
    },
    image: "/images/onboarding/onboarding-image4.png",
  },
];
