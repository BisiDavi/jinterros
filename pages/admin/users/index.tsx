import AdminTable from "@/components/table/AdminTable";
import UserTable from "@/components/table/UserTable";
import useUser from "@/hooks/useUser";
import AdminLayout from "@/layout/AdminLayout";

export default function UsersPage() {
  const { formattedAdmin, formattedUsers, getAdmins, getUsers } = useUser();

  console.log("formattedAdmin", formattedAdmin);
  const adminData = getAdmins();
  const userData = getUsers();
  console.log("formattedUsers", formattedUsers);

  return (
    <AdminLayout title="Users">
      <section className="users">
        {formattedAdmin && <AdminTable data={adminData} />}
        {formattedUsers && <UserTable data={userData} />}
      </section>
    </AdminLayout>
  );
}
