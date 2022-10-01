import Button from "@/components/button";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import OrdersTable from "@/components/table/OrdersTable";
import useAuth from "@/hooks/useAuth";
import useOrders from "@/hooks/useOrders";
import DefaultLayout from "@/layout/DefaultLayout";

export default function MyOrders() {
  const { authDetails } = useAuth();
  const user = authDetails();
  const { formattedOrders, useMemoizedOrderData } = useOrders();

  const userOrder =
    formattedOrders && user
      ? formattedOrders.filter(
          (item: any) =>
            item.purchase_units[0].shipping.name.full_name === user?.displayName
        )
      : null;

  const orderData = useMemoizedOrderData(userOrder);

  console.log("orderData", orderData);
  return (
    <DefaultLayout>
      <section className="my-orders container  mx-auto my-20 mt-52">
        {orderData === null ? (
          <SpinnerLoader loadingText="fetching orders" />
        ) : orderData.length === 0 ? (
          <div className="">
            <p className="text-center font-bold text-xl">
              You currently don&#39;t have any Order
            </p>
            <Button
              text="Shop Now"
              href="/shop"
              className="bg-dark-brown text-white mx-auto hover:opacity-80 px-8 py-4 flex justify-center w-40 my-6 font-bold"
            />
          </div>
        ) : (
          <div className="order-view justify-center items-center flex flex-col">
            <h4 className="text-center font-bold text-2xl my-2">Orders</h4>
            <OrdersTable data={orderData} />
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
