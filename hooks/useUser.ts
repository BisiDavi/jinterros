import { useEffect, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBUsers } from "@/lib/formatDBData";

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

  return { formattedUsers, formattedAdmin };
}
