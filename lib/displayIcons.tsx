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

export default function displayIcons(icon: string) {
  switch (icon) {
    case "Dashboard":
      return <DashboardIcon />;
    case "Products":
      return <GiWineBottle size={50} />;
    case "Orders":
      return <FaClipboardList size={40} />;
    case "TOTAL REVENUE":
      return <BsCurrencyDollar size={40} color="white" />;
    case "TOTAL ORDERS":
      return <OrdersIcon color="white" />;
    case "TOTAL CUSTOMERS":
      return <PeopleIcon />;
    case "Policies":
      return <MdOutlinePolicy size={40} />;
    case "Cocktails":
      return <FaCocktail size={40} />;
    case "Pages":
      return <MdOutlinePages size={40} />;
    case "Settings":
      return <FiSettings size={40} />;
    case "Users":
      return <FiUsers size={40} />;
    case "Newsletter":
      return <IoNewspaperOutline size={40} />;
  }
}
