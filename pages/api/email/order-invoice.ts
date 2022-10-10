import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";
import { filterCountries } from "@/lib/formatAdminDBData";
import { cartType } from "@/types/redux-types";
import { addToDate, formatPrice } from "@/lib/formatPrice";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { cart, details }: any = req.body;
  function getOrders() {
    let orders: any[] = [];
    cart.map((item: cartType) => {
      orders.push({
        title: item.title,
        image_URL: item.img,
        price: item.price,
        amount: item.amount,
        quantity: item.quantity,
      });
    });
    return orders;
  }
  switch (req.method) {
    case "POST":
      try {
        mailjet
          .apiConnect(
            `${process.env.NEXT_PUBLIC_MAILJET_API_KEY}`,
            `${process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY}`
          )
          .post("send", { version: "v3.1" })
          .request({
            Messages: [
              {
                From: {
                  Email: "admin@jinterros.com",
                  Name: "You have a new Order",
                },
                To: [
                  {
                    Email: details.payer.email_address,
                    Name: `${details.payer.name.surname} ${details.payer.name.given_name}`,
                  },
                  {
                    Email: "freelancer.dave.anderson@gmail.com",
                    Name: "David Anderson",
                  },
                  {
                    Email: "austinarts56@gmail.com",
                    Name: "David Austin",
                  },
                  {
                    Email: "jordanjines@gmail.com",
                    Name: "Jordan Jines",
                  },
                ],
                TemplateID: 4264396,
                TemplateLanguage: true,
                Subject: "Jinterros Order Invoice",
                Variables: {
                  user: {
                    name: `${details.payer.name.surname} ${details.payer.name.given_name}`,
                    address: {
                      shipping_address: {
                        full_name: `${details.payer.name.surname} ${details.payer.name.given_name}`,
                        address_line_1:
                          details.purchase_units[0].shipping.address
                            .address_line_1,
                        city: details.purchase_units[0].shipping.address
                          .admin_area_2,
                        state: filterCountries(
                          details.purchase_units[0].shipping.address
                            .country_code
                        ),
                      },
                    },
                  },
                  order: {
                    items: getOrders(),
                    delivery_date: addToDate(details.create_time),
                    shipping: formatPrice(
                      Number(
                        details.purchase_units[0].amount.breakdown.shipping
                          .value
                      )
                    ),
                    total: formatPrice(
                      Number(details.purchase_units[0].amount.value)
                    ),
                    number: details.id,
                  },
                },
              },
            ],
          })
          .then((result) => {
            console.log(result.body);
            res.status(200).send("Email Sent");
          })
          .catch((err) => {
            console.log(err.statusCode);
            res.status(400).send("Error sending e-mail");
          });
      } catch (error) {}
  }
}
