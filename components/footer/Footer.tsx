import links from "@/json/links.json";
import FooterForm from "@/components/form/FooterForm";
import {
  PageLinks,
  PaymentLink,
  PolicyLinks,
  SocialLinks,
} from "@/components/footer/FooterLinks";

export default function Footer() {
  return (
    <>
      <footer className="2xl:px-20 bg-carton-brown footer w-full">
        <div className="layer-1 w-full py-16">
          <div className="container px-8 lg:px-0  mx-auto flex lg:flex-row flex-col justify-between">
            <div className="w-full lg:w-1/2 left-pane">
              <PageLinks pageLinks={links.footer} />
              <div className="bottom-content hidden lg:flex w-full flex-col mt-28">
                <p className="mb-4 text-xs">Copyright 2022 | Jinterros</p>
                <PolicyLinks
                  className="hidden lg:flex items-center"
                  policyLinks={links.others}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/3 right-pane">
              <h5 className="text-lg font-medium mb-3">FIND US</h5>
              <SocialLinks
                socialLinks={links.socials}
                className="flex hidden lg:flex"
              />
              <FooterForm />
              <PaymentLink paymentLinks={links.paymentGateway} />
              <PolicyLinks
                className="flex lg:hidden mt-4 flex-col items-center"
                policyLinks={links.others}
              />
              <SocialLinks
                socialLinks={links.socials}
                className="flex  mx-auto justify-center my-2 text-lg lg:hidden"
              />
              <p className="my-3 text-center text-lg lg:hidden">
                Copyright 2022 | Jinterros
              </p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer {
            background-image: url("/flower.webp");
            background-repeat: no-repeat;
            background-position: left;
          }
          .layer-1 {
            background-image: url("/beer.webp");
            background-repeat: no-repeat;
            background-position: right;
          }
        `}
      </style>
    </>
  );
}
