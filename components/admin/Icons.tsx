import { GiWineBottle } from "react-icons/gi";

import DashboardIcon from "@/public/icons/DashboardIcon";
import OrdersIcon from "@/public/icons/OrdersIcon";

export default function displayIcons(icon: string) {
  switch (icon) {
    case "Dashboard":
      return <DashboardIcon />;
    case "Products":
      return <GiWineBottle />;
    case "Orders":
      return <OrdersIcon />;
  }
}
