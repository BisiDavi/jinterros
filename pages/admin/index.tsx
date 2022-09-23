import InfoCard from "@/components/card/InfoCard";
import AdminLayout from "@/layout/AdminLayout";

import links from "@/json/links.json";

export default function Admin() {
  return (
    <AdminLayout title="Dashboard">
      <div className="top grid grid-cols-3 items-center gap-x-14 w-4/5">
        {links.dashboard.map((item) => (
          <InfoCard title={item.title} text={item.text} key={item.title} />
        ))}
      </div>
    </AdminLayout>
  );
}