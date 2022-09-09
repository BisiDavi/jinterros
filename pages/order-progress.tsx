/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layout/DefaultLayout";

export default function OrderProgress() {
  const images = [
    { img: "/note.webp", text: "Order Confirmed" },
    { img: "/order.webp", text: "Packaging Order" },
    { img: "/truck.webp", text: "Delivery on the Way" },
  ];
  return (
    <DefaultLayout title="Thanks for your order">
      <section className="my-52 mx-auto w-4/5">
        <ul className="images flex items-center justify-center mx-auto w-full">
          {images.map((item, index) => {
            const borderImage =
              index === 0 ? (
                <img src="/line.webp" alt="line" />
              ) : (
                <img src="/dashed-line.webp" alt="line" />
              );
            return (
              <li key={item.img} className="mx-4 w-full flex items-center">
                <div className="group w-2/3">
                  <img src={item.img} alt={item.img} className="mx-auto" />
                  <p className="mt-4 font-bold text-center">{item.text}</p>
                </div>
                {index < 2 && borderImage}
              </li>
            );
          })}
        </ul>
      </section>
    </DefaultLayout>
  );
}
