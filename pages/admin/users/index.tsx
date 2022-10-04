import AdminTable from "@/components/table/AdminTable";
import UserTable from "@/components/table/UserTable";
import useUser from "@/hooks/useUser";
import AdminLayout from "@/layout/AdminLayout";
import { sortDataByDate } from "@/lib/formatDBData";

export default function UsersPage() {
  const { formattedAdmin, formattedUsers, getAdmins, getUsers } = useUser();

  const adminData = getAdmins();
  const userData = getUsers();
  const sortedData = userData ? sortDataByDate(userData) : null;

  return (
    <AdminLayout title="Users">
      <section className="users">
        {formattedAdmin && <AdminTable data={adminData} />}
        {formattedUsers && <UserTable data={sortedData} />}
      </section>
    </AdminLayout>
  );
}
