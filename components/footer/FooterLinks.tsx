/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface SocialLinksProps {
  socialLinks: {
    text: string;
  }[];
  className: string;
}

export function SocialLinks({ socialLinks, className }: SocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((social, index) => {
        const showBorder = Number(socialLinks.length - 1) !== index ? "|" : "";
        return (
          <li key={social.text}>
            <a className="font-light lg:text-xs">
              {social.text}
              <span className="mx-2">{showBorder}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

interface PolicyLinksProps {
  className: string;
  policyLinks: {
    link: string;
    text: string;
  }[];
}

export function PolicyLinks({ policyLinks, className }: PolicyLinksProps) {
  return (
    <ul className={className}>
      {policyLinks.map((linkItem, index) => {
        const showBorder = Number(policyLinks.length - 1) !== index ? "|" : "";
        return (
          <li key={`${linkItem.link}-${index}`}>
            <Link href={linkItem.link}>
              <>
                <a className="underline hover:text-red-500 text-lg">
                  {linkItem.text}
                </a>{" "}
                <span className="mr-1 hidden lg:flex">{showBorder}</span>
              </>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

interface PaymentLinkProps {
  paymentLinks: string[];
}

export function PaymentLink({ paymentLinks }: PaymentLinkProps) {
  return (
    <div className="payment lg:mt-12 lg:items-start lg:mx-0 flex flex-col mx-auto justify-center items-center">
      <h5 className="font-medium">WE ACCEPT</h5>
      <ul className="flex items-center my-2">
        {paymentLinks.map((linkItem, index) => (
          <li key={`${linkItem}-${index}`} className="mr-4">
            <img src={linkItem} alt="payment gateway" />
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PageLinksProps {
  pageLinks: {
    title: string;
    group: {
      link: string;
      text: string;
    }[];
  }[];
}

export function PageLinks({ pageLinks }: PageLinksProps) {
  return (
    <div className="links-group grid grid-cols-2 lg:grid-cols-3">
      {pageLinks.map((footerItem) => (
        <ul key={footerItem.title}>
          <h5 className="text-lg font-medium mb-3">{footerItem.title}</h5>
          {footerItem.group.map((groupItem, index) => (
            <li key={`${groupItem.link}-${index}`} className="my-2">
              <Link href={groupItem.link}>
                <a className="font-light">{groupItem.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
