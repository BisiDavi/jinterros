import { useEffect, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBUsers } from "@/lib/formatDBData";
import { getDate } from "@/lib/formatPrice";

export default function useUser() {
  const [users, setUsers] = useState(null);
  const [admins, setAdmin] = useState(null);

  useEffect(() => {
    if (users === null) {
      readData("/users", users, setUsers);
    }
  }, [users]);

  useEffect(() => {
    if (admins === null) {
      readData("/admin", admins, setAdmin);
    }
  }, [admins]);

  const formattedUsers: any = users ? formatDBUsers(users) : null;
  const formattedAdmin: any = admins ? formatDBUsers(admins) : null;

  function getUsers() {
    const userData: any = [];
    if (formattedUsers) {
      formattedUsers.map((item: any) =>
        userData.push({
          name: item.displayName,
          email: item.email,
          date: getDate(item.createdAt),
        })
      );
    }
    return userData;
  }

  function getAdmins() {
    const adminData: any[] = [];
    if (formattedAdmin) {
      formattedAdmin.map((item: any) =>
        adminData.push({
          name: item.name,
          email: item.user.email,
        })
      );
      return adminData;
    }
  }

  return { formattedUsers, formattedAdmin, getAdmins, getUsers };
}
