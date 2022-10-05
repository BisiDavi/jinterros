/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect } from "react";

import DefaultLayout from "@/layout/DefaultLayout";
import useMyOrders from "@/hooks/useMyOrders";
import { addToDate, getDate } from "@/lib/formatPrice";
import useAuth from "@/hooks/useAuth";
import { sortDataByDate } from "@/lib/formatDBData";

export default function OrderProgressPage() {
  const { orderData } = useMyOrders();
  const { getAuthStatus } = useAuth();
  const authStatus = getAuthStatus();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === null) {
      router.push("/");
    }
  }, [authStatus]);

  const sortedData = orderData ? sortDataByDate(orderData) : null;

  const latestOrder = sortedData[0];

  console.log("latestOrder", latestOrder);

  const images = [
    { img: "/note.webp", text: "Order Confirmed" },
    { img: "/order.webp", text: "Packaging Order" },
    { img: "/truck.webp", text: "Delivery on the Way" },
  ];
  return (
    <DefaultLayout title="Thanks for your order">
      <section className="mt-24 mb:10 lg:my-52 mx-auto w-4/5">
        <ul className="images flex lg:flex-row flex-col items-center justify-center mx-auto w-full">
          {images.map((item, index) => {
            const borderImage =
              index === 0 ? (
                <img src="/line.webp" alt="line" />
              ) : (
                <img src="/dashed-line.webp" alt="line" />
              );
            const textValue =
              item.text === "Order Confirmed"
                ? latestOrder &&
                  `Order received on : ${getDate(latestOrder?.createdAt, true)}`
                : item.text === "Delivery on the Way"
                ? latestOrder.fulfillmentStatus === "Unfulfilled"
                  ? `Package to be delivered latest on: ${addToDate(
                      latestOrder?.createdAt
                    )}`
                  : latestOrder.fulfillmentStatus === "Fulfilled"
                  ? "Package Delivered"
                  : latestOrder.fulfillmentStatus === "Cancelled" && "Cancelled"
                : "";

            return (
              <li key={item.img} className="mx-4 w-full flex items-center">
                <div className="group w-2/3 mx-auto lg:mx-0 my-4">
                  <img src={item.img} alt={item.text} className="mx-auto" />
                  <p className="mt-4 font-bold text-center">{item.text}</p>
                  <p className="mt-4 font-bold text-center text-sm">
                    {textValue}
                  </p>
                </div>
                <div className="border-image hidden lg:flex">
                  {index < 2 && borderImage}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </DefaultLayout>
  );
}
