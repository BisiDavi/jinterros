/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";

import { readData } from "@/lib/firebaseConfig";
import useMediaQuery from "@/hooks/useMediaQuery";
import { formatNewsletter, sortDataByDate } from "@/lib/formatDBData";


export default function useNewsletterTable() {
  const [newsletter, setNewsletter] = useState(null);
  const mobileDevice = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (newsletter === null) {
      readData("/newsletter", newsletter, setNewsletter);
    }
  }, [newsletter]);

  const formattedNewsletter =
    newsletter !== null ? formatNewsletter(newsletter) : null;

  const columns: any = useMemo(
    () => [
      { Header: "E-mail", accessor: "email" },
      { Header: "Created At", accessor: "date" },
    ],
    []
  );
  const newsletterData = formattedNewsletter ? formattedNewsletter : [];

  const vdata = useMemo(() => [...newsletterData], [newsletter]);
  const data = vdata ? sortDataByDate(vdata) : null;


  return { mobileDevice, data, columns, newsletter };
}
