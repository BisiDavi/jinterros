import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import AdminLayout from "@/layout/AdminLayout";
import PolicyForm from "@/components/form/PolicyForm";
import type { GetServerSidePropsContext } from "next";
import Button from "@/components/button";

export default function PoliciesSlugPage() {
  const router = useRouter();
  return (
    <AdminLayout title="Policies">
      <section>
        <Button
          text="back"
          icon={<BsArrowLeft size={30} className="mr-2" />}
          className="bg-red-500 font-bold text-white px-4 py-2 rounded-md w-24 hover:opacity-80  items-center justify-center flex my-4"
          onClick={() => router.back()}
        />
        <PolicyForm />
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
