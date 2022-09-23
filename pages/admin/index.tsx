import AdminLayout from "@/layout/AdminLayout";
import AdminOrderSummary from "@/views/AdminOrderSummary";
import InfoCardGroupView from "@/views/InfoCardGroupView";

export default function Admin() {
  return (
    <AdminLayout title="Dashboard">
      <InfoCardGroupView />
      <AdminOrderSummary />
    </AdminLayout>
  );
}
