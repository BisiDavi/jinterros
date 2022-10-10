import mailjet from "node-mailjet";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;
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
                    Email: email,
                    Name: "",
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
                Subject: "Admin Order Notification",
                Variables: {
                  email,
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
