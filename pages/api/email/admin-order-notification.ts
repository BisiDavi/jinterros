import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
                  Name: "A New Order for Jinterros 🍹 ",
                },
                To: [
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
                TemplateID: 4264359,
                TemplateLanguage: true,
                Subject: "🛒 New Order",
                Variables: {},
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
