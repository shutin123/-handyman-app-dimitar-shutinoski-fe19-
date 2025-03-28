import HomeIcon from "../../../../assets/icons/Frame-3.svg";
import Bookings from "../../../../assets/icons/Frame-4.svg";
import Map from "../../../../assets/svg/Location Map.svg";
import Chat from "../../../../assets/svg/Vector.svg";
import Profile from "../../../../assets/svg/VectorProfile.svg";
import { MenuItem } from "../types/menuTypes";

export const icons: MenuItem[] = [
  { id: 1, name: "Bookings", src: Bookings, type: "svg" },
  { id: 2, name: "Map", src: Map, type: "png" },
  { id: 3, name: "Home Page", src: HomeIcon, type: "svg" },
  { id: 4, name: "Chat", src: Chat, type: "svg" },
  { id: 5, name: "Profile", src: Profile, type: "png" },
];
