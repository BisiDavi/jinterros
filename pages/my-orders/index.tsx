import Button from "@/components/button";
import { SpinnerLoader } from "@/components/loader/SpinnerRipple";
import OrdersTable from "@/components/table/OrdersTable";
import useMyOrders from "@/hooks/useMyOrders";
import DefaultLayout from "@/layout/DefaultLayout";

export default function MyOrders() {
  const { orderData } = useMyOrders();

  return (
    <DefaultLayout>
      <section className="my-orders container  mx-auto mt-28 my-20 lg:mt-52">
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
          <div className="order-view lg:w-full w-11/12 ml-4 lg:ml-4 justify-center items-center flex flex-col">
            <h4 className="text-center font-bold text-2xl my-2">Orders</h4>
            <OrdersTable data={orderData} />
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
