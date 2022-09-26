import AdminLayout from "@/layout/AdminLayout";
import ProductTable from "@/components/table/ProductTable";

import AdminTableView from "@/views/AdminTableView";
import type { GetServerSidePropsContext } from "next";

export default function Products() {
  return (
    <AdminLayout title="Products">
      <AdminTableView
        text="Create Product"
        href="/admin/products/create-product"
      >
        <ProductTable />
      </AdminTableView>
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
