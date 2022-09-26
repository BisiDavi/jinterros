import { useRouter } from "next/router";

import AdminLayout from "@/layout/AdminLayout";
import PolicyForm from "@/components/form/PolicyForm";
import type { GetServerSidePropsContext } from "next";
import AdminFormView from "@/views/AdminFormView";

export default function PoliciesSlugPage() {
  const router = useRouter();
  return (
    <AdminLayout title="Policies">
      <AdminFormView>
        <PolicyForm />
      </AdminFormView>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
