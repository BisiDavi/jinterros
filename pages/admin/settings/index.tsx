import AdminForm from "@/components/form/AdminForm";
import AdminLayout from "@/layout/AdminLayout";

export default function SettingsPage() {
  return (
    <AdminLayout title="Settings">
      <section className="w-2/3 px-2">
        <h4 className="text-center font-bold text-xl mb-2">Create An Admin</h4>
        <AdminForm type="signup" />
      </section>
    </AdminLayout>
  );
}
