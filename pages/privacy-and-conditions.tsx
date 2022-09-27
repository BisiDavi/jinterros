import { ref, get, child } from "firebase/database";
import ContentEditable from "react-contenteditable";

import { initializeDB } from "@/lib/firebaseConfig";
import DefaultLayout from "@/layout/DefaultLayout";
import { formatDBDataSlug } from "@/lib/formatDBData";

interface Props {
  policy: string;
}

export default function PrivacyAndConditionsPage({ policy }: Props) {
  const parsedPolicy = formatDBDataSlug(policy);

  console.log("parsedPolicy", parsedPolicy);

  return (
    <DefaultLayout title="privacy-and-conditions">
      <ContentEditable
        html={parsedPolicy.policy}
        onChange={() => null}
        disabled
        className="mt-52 mb-32 container mx-auto"
      />
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const db = initializeDB();
  const dataRef = ref(db);

  const dbResponse = await get(
    child(dataRef, `/policy/us-jinterros-privacy-and-cookie-notice-overview`)
  );
  return {
    props: {
      policy: JSON.stringify(dbResponse.val()),
    },
    revalidate: 10,
  };
}
