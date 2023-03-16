/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import toSlug from "@/lib/toSlug";
import { productType } from "@/types";

interface Props {
  otherProducts: productType[];
}

export default function OtherProduct({ otherProducts }: Props) {
  return (
    <>
      {otherProducts.length > 0 && (
        <section className="container mx-auto mb-12">
          <h4 className="text-center text-xl font-bold my-4">
            Other Available Products
            <ul className="grid grid-cols-4 gap-4 product-grid">
              {otherProducts.map((item) => (
                <li key={item.title} className="border p-4 rounded shadow h-96">
                  <Link href={`/shop/${toSlug(item.title)}`} passHref>
                    <img
                      src={item.productImage}
                      alt={item.title}
                      className="h-90 mx-auto"
                    />
                    <h6>{item.title}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </h4>
        </section>
      )}
    </>
  );
}
