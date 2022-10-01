import AdminLayout from "@/layout/AdminLayout";
import useOrders from "@/hooks/useOrders";
import type { GetServerSidePropsContext } from "next";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import { filterCountries } from "@/lib/formatAdminDBData";
import { formatPrice } from "@/lib/formatPrice";

interface Props {
  slug: string;
}

export default function OrdersSlugPage({ slug }: Props) {
  const { formattedOrders } = useOrders();
  const order = formattedOrders
    ? formattedOrders.filter((item: { id: string }) => item.id === slug)[0]
    : null;

  console.log("order", order);

  return (
    <AdminLayout title="Orders Details">
      <section className="container">
        {order === null ? (
          <SpinnerLoader loadingText="fetching order..." />
        ) : (
          <div className="content grid grid-cols-2 gap-4 border p-4">
            <div className="payer-details border p-4">
              <h4 className="font-bold text-lg">Payer Details</h4>
              <h6>
                Name: {order.payer.name.surname} {order.payer.name.given_name}
              </h6>
              <h6>Email: {order.payer.email_address}</h6>
              <h6>
                Country: {filterCountries(order.payer.address.country_code)}
              </h6>
            </div>
            <div className="payer-details border p-4">
              <h4 className="font-bold text-lg">Product Details</h4>
              <h6>Name: {order.purchase_units[0].items[0].name}</h6>
              <h6>Quantity: {order.purchase_units[0].items[0].quantity}</h6>
              <h6>
                Price: $
                {formatPrice(
                  Number(order.purchase_units[0].items[0].unit_amount.value)
                )}
              </h6>
              <h6>
                Amount: $
                {formatPrice(Number(order.purchase_units[0].amount.value))}
              </h6>
              <h6>Description : {order.purchase_units[0].description} </h6>
            </div>
            <div className="payer-details border p-4">
              <h4 className="font-bold text-lg">Shipping Details</h4>
              <h6>Name: {order.purchase_units[0].shipping.name.full_name}</h6>
              <h6>
                Address:{" "}
                {order.purchase_units[0].shipping.address.address_line_1}
              </h6>
              <h6>
                City: {order.purchase_units[0].shipping.address.admin_area_2}
              </h6>
              <h6>
                State: {order.purchase_units[0].shipping.address.admin_area_1}
              </h6>
              <h6>
                Country:{" "}
                {filterCountries(
                  order.purchase_units[0].shipping.address.country_code
                )}
              </h6>
            </div>
            <div className="payer-details border p-4">
              <h4 className="font-bold text-lg">Payment Details</h4>
              <h6>Transaction ID: {order.purchase_units[0].shipping.name.full_name}</h6>
              <h6>
                Address:{" "}
                {order.purchase_units[0].shipping.address.address_line_1}
              </h6>
              <h6>
                City: {order.purchase_units[0].shipping.address.admin_area_2}
              </h6>
              <h6>
                State: {order.purchase_units[0].shipping.address.admin_area_1}
              </h6>
              <h6>
                Country:{" "}
                {filterCountries(
                  order.purchase_units[0].shipping.address.country_code
                )}
              </h6>
            </div>
          </div>
        )}
      </section>
    </AdminLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { slug } = context.query;

  if (!req.cookies?.admin) {
    return {
      redirect: {
        destination: "/admin/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug,
    },
  };
}
