import useOrders from "@/hooks/useOrders";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import { filterCountries } from "@/lib/formatAdminDBData";
import { formatPrice, getDate } from "@/lib/formatPrice";

interface Props {
  slug: string;
}

export default function AdminOrderView({ slug }: Props) {
  const { formattedOrders } = useOrders();
  const order = formattedOrders
    ? formattedOrders.filter((item: { id: string }) => item.id === slug)[0]
    : null;
  return (
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
            <h6>Description : {order.purchase_units[0].description} </h6>
          </div>
          <div className="payer-details border p-4">
            <h4 className="font-bold text-lg">Shipping Details</h4>
            <h6>Name: {order.purchase_units[0].shipping.name.full_name}</h6>
            <h6>
              Address: {order.purchase_units[0].shipping.address.address_line_1}
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
            <h6>
              Shipping Price: $
              {formatPrice(
                Number(order.purchase_units[0].amount.breakdown.shipping.value)
              )}
            </h6>
          </div>
          <div className="payer-details border p-4">
            <h4 className="font-bold text-lg">Payment Details</h4>
            <h6>Transaction ID: {order.id}</h6>
            <h6>
              Payment Status:{" "}
              {order.status === "COMPLETED" ? "PAID" : "NOT PAID"}
            </h6>
            <h6>
              Amount Paid: $
              {formatPrice(Number(order.purchase_units[0].amount.value))}
            </h6>
            <h6>
              Paid By: {order.payer.name.surname} {order.payer.name.given_name}
            </h6>
            <h6>Paid at: {getDate(order.create_time, true)}</h6>
          </div>
        </div>
      )}
    </section>
  );
}
