import ManOne from "../../../assets/svg/Icon Strategy (2).svg";
import ManTwo from "../../../assets/svg/Icon Strategy (1).svg";
import ManThree from "../../../assets/svg/Icon Strategy.svg";
import Stars from "../../../assets/svg/Stars.svg";
export type Testimonials = {
  icon: string;
  name: string;
  description: string;
  stars: string;
  location: string;
};

export const features: Testimonials[] = [
  {
    icon: ManOne,
    name: "Maximilian Schneider",
    description: "Since I used this platform, I have doubled my orders!",
    stars: Stars,
    location: "Electrician, Dresden",
  },
  {
    icon: ManTwo,
    name: "John Meier",
    description: "I can use my free time perfectly to get additional jobs .",
    stars: Stars,
    location: "Tischler, Berlin",
  },
  {
    icon: ManThree,
    name: "Peter Schmidt",
    description: "Super easy handling and direct contact with customers!",
    stars: Stars,
    location: "Maler, München",
  },
];
