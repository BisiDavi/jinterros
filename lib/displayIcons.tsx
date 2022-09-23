import { GiWineBottle } from "react-icons/gi";
import { FaClipboardList } from "react-icons/fa";

import DashboardIcon from "@/public/icons/DashboardIcon";
import OrdersIcon from "@/public/icons/OrdersIcon";

export default function displayIcons(icon: string) {
  switch (icon) {
    case "Dashboard":
      return <DashboardIcon />;
    case "Products":
      return <GiWineBottle size={50} />;
    case "Orders":
      return <FaClipboardList size={47} />;
    case "Order":
      return <OrdersIcon />;
  }
}
