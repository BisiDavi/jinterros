import useUser from "@/hooks/useUser";
import AdminLayout from "@/layout/AdminLayout";

export default function UsersPage() {
  const { formattedAdmin, formattedUsers } = useUser();

  console.log("formattedAdmin", formattedAdmin);
  console.log("formattedUsers", formattedUsers);

  return (
    <AdminLayout title="Users">
      <section className="users"></section>
    </AdminLayout>
  );
}
