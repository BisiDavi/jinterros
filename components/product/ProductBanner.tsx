/* eslint-disable @next/next/no-img-element */
import useCart from "@/hooks/useCart";
import { productType } from "@/types";
import Button from "@/components/button";

interface Props {
  product: productType;
}

export default function ProductBanner({ product }: Props) {
  const { addCartItemHandler } = useCart();

  const productDescriptonList = [
    { text: "Price ($):", value: product.price.toFixed(2) },
    { text: "Size (ML):", value: product.size },
    { text: "Alcohol (%):", value: product.alcoholVolume },
    { text: "Country:", value: product.country },
    { text: "Type:", value: product.type },
  ];

  function addToCart() {
    addCartItemHandler({
      title: product.title,
      img: product.productImage,
      price: product.price,
      quantity: 1,
    });
  }

  return (
    <section className="content mt-36 lg:mt-60">
      <h4 className="text-center text-xl font-bold my-4">
        “A party is best enjoyed with a circle of friends and a bottle of rum.”
      </h4>
      <img
        src="/rum-bottle.webp"
        alt="jinterros"
        title="jinterros"
        className="image-wrapper -mb-28 lg:-mb-4 lg:hidden mx-auto w-2/5 lg:w-auto justify-center"
      />
      <div className="shop-view bg-orange flex flex-col lg:flex-row px-8 py-32 lg:p-20 lg-h-800  lg:mb-40 shop-background-image w-screen">
        <div className="w-full hidden h-full lg:flex lg:w-1/2 relative">
          <img
            src={product.productImage}
            alt={product.title}
            title={product.title}
            className="image-wrapper mx-auto  h-full flex justify-center mt-40"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:text-xl font-bold">
          <h6 className="text-white  lg:mb-10 lg:w-3/4 lg:mt-20 ">
            {product.description}
          </h6>
          <ul>
            {productDescriptonList.map((other) => (
              <li key={other.value} className="text-white my-2">
                <span className="mr-1">{other.text}</span>
                {other.value}
              </li>
            ))}
          </ul>
          <Button
            icon={<img src="/cartIcon.webp" alt="cart-icon" className="mr-6" />}
            text={`$${product.price.toFixed(2)}`}
            onClick={addToCart}
            className="flex items-center bg-rum-brown w-4/5 mx-auto lg:mx-0 lg:w-2/5 font-bold hover:opacity-80 justify-center py-1 text-white text-3xl mt-20"
          />
        </div>
      </div>
    </section>
  );
}
