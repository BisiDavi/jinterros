import { AiOutlinePlus } from "react-icons/ai";

import AdminLayout from "@/layout/AdminLayout";
import PolicyTable from "@/components/table/PolicyTable";
import Button from "@/components/button";
import type { GetServerSidePropsContext } from "next";

export default function PoliciesPage() {
  return (
    <AdminLayout title="Policies">
      <section className="flex flex-col items-end ">
        <Button
          text="Create Policy"
          href="/admin/policies/create-policy"
          icon={<AiOutlinePlus size={30} className="mr-2" />}
          className="bg-green-500 font-bold text-white px-4 py-2 rounded-md w-48 hover:opacity-80  items-center justify-center flex my-4"
        />
        <PolicyTable />
      </section>
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
