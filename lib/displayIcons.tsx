import { GiWineBottle } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlinePolicy } from "react-icons/md";
import { FaCocktail } from "react-icons/fa";
import { MdOutlinePages } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiSettings, FiUsers } from "react-icons/fi";

import DashboardIcon from "@/public/icons/DashboardIcon";
import OrdersIcon from "@/public/icons/OrdersIcon";
import PeopleIcon from "@/public/icons/PeopleIcon";

export default function displayIcons(icon: string, size?: number) {
  const iconSize = size ? size : 40;
  const wineSize = size ? 40 : 50;
  switch (icon) {
    case "Dashboard":
      return <DashboardIcon size={iconSize} />;
    case "Products":
      return <GiWineBottle size={wineSize} />;
    case "Orders":
      return <FaClipboardList size={iconSize} />;
    case "TOTAL REVENUE":
      return <BsCurrencyDollar size={iconSize} color="white" />;
    case "TOTAL ORDERS":
      return <OrdersIcon color="white" />;
    case "TOTAL CUSTOMERS":
      return <PeopleIcon />;
    case "Policies":
      return <MdOutlinePolicy size={iconSize} />;
    case "Cocktails":
      return <FaCocktail size={iconSize} />;
    case "Pages":
      return <MdOutlinePages size={iconSize} />;
    case "Settings":
      return <FiSettings size={iconSize} />;
    case "Users":
      return <FiUsers size={iconSize} />;
    case "Newsletter":
      return <IoNewspaperOutline size={iconSize} />;
  }
}
