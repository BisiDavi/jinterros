import { AiOutlinePlus } from "react-icons/ai";

import AdminLayout from "@/layout/AdminLayout";
import ProductTable from "@/components/table/ProductTable";
import Button from "@/components/button";

import type { GetServerSidePropsContext } from "next";

export default function Products() {
  return (
    <AdminLayout title="Products">
      <section className="flex flex-col items-end ">
        <Button
          text="Create Product"
          href="/admin/products/create-product"
          icon={<AiOutlinePlus size={30} className="mr-2" />}
          className="bg-green-500 font-bold text-white px-4 py-2 rounded-md w-48 hover:opacity-80  items-center justify-center flex my-4"
        />
        <ProductTable />
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
