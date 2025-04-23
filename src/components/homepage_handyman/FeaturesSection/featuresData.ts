import CheckMarkOne from "../../../assets/svg/Checkmark.svg";
import CheckMarkTwo from "../../../assets/svg/Checkmark2.svg";
import CheckMarkThree from "../../../assets/svg/Checkmark3.svg";

export type Feature = {
  icon: string;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: CheckMarkOne,
    title: "Create your profile",
    description:
      "Create your profile, set your availability and present your services .",
  },
  {
    icon: CheckMarkTwo,
    title: "Find jobs & be booked",
    description:
      "Browse available orders near you and contact potential customers .",
  },
  {
    icon: CheckMarkThree,
    title: "Chat & Buchen",
    description:
      "Clarify details directly via our app and get secure bookings .",
  },
];
