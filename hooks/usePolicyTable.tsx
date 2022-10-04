/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import { formatDBData } from "@/lib/formatDBData";
import useDBMutation from "@/hooks/useDBMutation";
import useMediaQuery from "./useMediaQuery";

export default function usePolicyTable() {
  const [policies, setPolicies] = useState(null);
  const { useDeleteDataMutation } = useDBMutation();
  const { mutate } = useDeleteDataMutation();
  const mobileDevice = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (policies === null) {
      readData("/policy", policies, setPolicies);
    }
  }, [policies]);

  const formattedPolicies = formatDBData(policies);

  const columns: any = useMemo(
    () => [
      { Header: "Title", accessor: "title" },
      { Header: "Author", accessor: "authorName" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const policyData = formattedPolicies ? formattedPolicies : [];

  const data = useMemo(() => [...policyData], [policies]);

  return {
    data,
    columns,
    mutate,
    mobileDevice,
  };
}
